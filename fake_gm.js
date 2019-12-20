var player_count, faker_count, current_player, category, secret_word, fakers;

function remove_all_children(element) {
    while(element.hasChildNodes()) {
        element.removeChild(element.lastChild);
    }
}

function load_categories() {
    let category_select = document.getElementById("category");
    let option = document.createElement("option", {"value": "Random"});
    let option_text = document.createTextNode("Random");

    option.appendChild(option_text);
    category_select.appendChild(option);

    for(let category_name in fake_gm_list) {
        let option = document.createElement("option", {"value": category_name});
        let option_text = document.createTextNode(category_name);

        option.appendChild(option_text);
        category_select.appendChild(option);
    }
}

function show_view(view) {
    let elements = document.getElementsByClassName(view);
    for(let i=0; i<elements.length; ++i) {
        elements[i].classList.remove("hidden");
    }
}

function hide_view(view) {
    let elements = document.getElementsByClassName(view);
    for(let i=0; i<elements.length; ++i) {
        elements[i].classList.add("hidden");
    }
}

function show_main() {
    hide_view("player-screen");
    show_view("main-menu");
}

function show_player() {
    load_player();

    hide_view("main-menu");
    show_view("player-screen");
}

function load_player() {
    // set category
    let category_input = document.getElementById("player-category");
    category_input.value = category;

    // set player number
    let player_number = document.getElementById("player-number");
    remove_all_children(player_number);
    player_number.appendChild(document.createTextNode(String(current_player + 1)));
}

function start_game() {
    player_count = document.getElementById("player-count").value;
    faker_count = document.getElementById("faker-count").value;
    category = document.getElementById("category").value;

    if (category == "Random") {
        let cat_keys = Object.keys(fake_gm_list);
        let cat_len = cat_keys.length;
        let cat_sel = Math.floor(Math.random() * cat_len);
        category = cat_keys[cat_sel];
    }

    let word_keys = Object.keys(fake_gm_list[category]);
    let word_len = word_keys.length;
    let word_sel = Math.floor(Math.random() * word_len);
    secret_word = fake_gm_list[category][word_sel];

    current_player = 0;

    fakers = [];
    for(let i = 0; i < faker_count; ++i) {
        let rand_faker = Math.floor(Math.random() * player_count);
        //TODO: this feels dirty ;)
        if (fakers.indexOf(rand_faker) != -1) {
            // go again!
            i--;
            continue;
        }
        fakers.push(rand_faker);
    }

    show_player();
}

function reveal_down() {
    // show word if relevant
    let reveal_button = document.getElementById("reveal-button");
    remove_all_children(reveal_button);

    reveal_button.style.backgroundColor = "green";
    reveal_button.style.color = "white";

    if (fakers.indexOf(current_player) != -1) {
        //They're a faker!
        reveal_button.appendChild(document.createTextNode("FAKER!"));
    } else {
        reveal_button.appendChild(document.createTextNode(secret_word));
    }
}

function reveal_up() {
    // hide word
    let reveal_button = document.getElementById("reveal-button");

    reveal_button.style.backgroundColor = "red";
    reveal_button.style.color = "black";

    remove_all_children(reveal_button);
    reveal_button.appendChild(document.createTextNode("Hold to Reveal Word!"));
}

function next_player() {
    //whatever
    current_player ++;
    if (current_player >= player_count) {
        //done revealing all the things!
        show_main();
        delete player_count, faker_count, current_player, category, secret_word, fakers;
        return;
    }
    show_player();
}

function bind_events() {
    document.getElementById("start-game-button").addEventListener("click", start_game);

    document.getElementById("reveal-button").addEventListener("mousedown", reveal_down);
    document.getElementById("reveal-button").addEventListener("mouseup", reveal_up);
    document.getElementById("reveal-button").addEventListener("mouseout", reveal_up);
    
    document.getElementById("reveal-button").addEventListener("touchstart", reveal_down);
    document.getElementById("reveal-button").addEventListener("touchend", reveal_up);
    document.getElementById("reveal-button").addEventListener("touchcancel", reveal_up);

    document.getElementById("next-player-button").addEventListener("click", next_player);
}

document.addEventListener("DOMContentLoaded", function() {
    load_categories();
    bind_events();

    show_main();
});