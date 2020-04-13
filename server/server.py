import json
import os
import random

import flask

WORD_LIST_FILE = "fake_gm_list.json"

app = flask.Flask(__name__)
app.secret_key = os.environ["FLASK_SECRET"]

def _gen_id():
    """Generate a unique identifier for the game"""
    return random.randint(1000000,9999999)

class player:
    def __init__(self, name, vip):
        # print(f"new player with name {name}")
        self.name = name
        self.vip = vip
        self.record = 0

    def add_win(self):
        self.record += 1

    def add_loss(self):
        self.record -= 1

active_games = {}

class game:
    def __init__(self, faker_count):
        self.id = _gen_id()
        self.faker_count = faker_count
        self.fakers = set()
        self.players = []

        self.started = False

        self.vip = -1
        self.first_player = -1

        self.word = ""
        self.category = ""

    def _gen_word(self):
        with open(WORD_LIST_FILE) as gm_list:
            word_lists = json.load(gm_list)
        keys = list(word_lists["list"].keys())
        self.word = keys[random.randint(0, len(keys) - 1)]
        self.category = word_lists["list"][self.word]

    def add_player(self, name):
        self.players.append(player(name, self.vip is None))
        if self.vip == -1:
            self.vip = len(self.players) - 1
        return len(self.players) - 1

    def new_round(self, player_id):
        if not self.vip == player_id:
            return False
        self.fakers.clear()
        self.started = True

        self._gen_word()
        #next player in list goes first
        self.first_player = (self.first_player + 1) % len(self.players)

        #setup fakers
        for i in range(self.faker_count):
            rand_faker = random.randint(0, len(self.players) - 1)
            if rand_faker in self.fakers:
                i -= 1
                continue
            self.fakers.add(rand_faker)
        print(self.fakers)

        return True

    def get_word(self, player_id):
        if player_id in self.fakers:
            return (None, self.category)
        else:
            return (self.word, self.category)

    def is_vip(self, player_id):
        return self.vip == player_id

@app.route("/new-game", methods=["GET", "POST"])
def new_game():
    if flask.request.method == "GET":
        return flask.render_template("new_game.html")
    else:
        faker_count = int(flask.request.form.get("faker_count"))
        new_game = game(faker_count)
        active_games[new_game.id] = new_game
        # print(active_games)
        return flask.redirect(f"/{new_game.id}/register")

@app.route("/<int:_id>/register", methods=["GET", "POST"])
def register(_id):
    if flask.request.method == "GET":
        return flask.render_template("register.html", _id=_id)
    else:
        #unknown game, need to start a new one
        # print(active_games)
        if _id not in active_games:
            # print("inactive")
            return flask.redirect("/new-game")
        game = active_games[_id]
        if game.started:
            return flask.render_template("registration_closed.html")
        name = flask.request.form.get("name")
        # print(name)
        player_id = game.add_player(name)
        flask.session["player-id"] = player_id
        flask.session["game-id"] = _id
        return flask.redirect(f"/{_id}")

@app.route("/<int:_id>/new-round", methods=["POST"])
def new_round(_id):
    if _id not in active_games:
        return flask.redirect("/new-game")
    game = active_games[_id]
    if "player-id" not in flask.session:
        return flask.redirect(f"/{_id}/register")
    player_id = flask.session["player-id"]
    # print(player_id)
    success = game.new_round(player_id)
    if success:
        # print("success")
        return flask.redirect(f"/{_id}/get-word")
    else:
        # print("fauil")
        #not vIP
        return flask.redirect(f"/{_id}")

@app.route("/<int:_id>/get-word", methods=["GET"])
def get_word(_id):
    if _id not in active_games:
        return flask.redirect("/new-game")
    game = active_games[_id]
    if not game.started:
        return flask.redirect(f"/{_id}")
    if "player-id" not in flask.session:
        return flask.redirect(f"/{_id}/register")
    player_id = flask.session["player-id"]
    word, category = game.get_word(player_id)
    return flask.render_template("get_word.html", word=word, category=category, _id=_id, vip=game.is_vip(player_id))

@app.route("/<int:_id>", methods=["GET"])
def join_game(_id):
    if _id not in active_games:
        return flask.redirect("/new-game")
    game = active_games[_id]

    if "player-id" not in flask.session or flask.session["game-id"] != _id:
        return flask.redirect(f"/{_id}/register")
    elif game.started:
        return flask.redirect(f"/{_id}/get-word")
    else:
        player_id = flask.session["player-id"]
        return flask.render_template("waiting_room.html", _id=_id, vip=game.is_vip(player_id), players=game.players)

@app.route("/", methods=["GET"])
def root():
    return flask.redirect("/new-game")

if __name__ == "__main__":
    app.run()