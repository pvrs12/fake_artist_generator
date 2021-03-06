var fake_gm_categories = [
  "Cowboy Gear",
  "Foods",
  "Weapons",
  "Drinks",
  "Outdoor Gear",
  "Plants",
  "Musical Instruments",
  "Body Parts",
  "Professions",
  "Landmarks",
  "Transportation",
  "Animals",
  "Household Items",
  "Buildings"
]

var fake_gm_list = {
  "Lion": "Animals",
  "Tiger": "Animals",
  "Bear": "Animals",
  "Chicken": "Animals",
  "Owl": "Animals",
  "Penguin": "Animals",
  "Turkey": "Animals",
  "Alligator": "Animals",
  "Butterfly": "Animals",
  "Caterpillar": "Animals",
  "Fly": "Animals",
  "Frog": "Animals",
  "Dragonfly": "Animals",
  "Grasshopper": "Animals",
  "Ladybug": "Animals",
  "Lizard": "Animals",
  "Cockroach": "Animals",
  "Spider": "Animals",
  "Snake": "Animals",
  "Turtle": "Animals",
  "Boar": "Animals",
  "Beaver": "Animals",
  "Camel": "Animals",
  "Cow": "Animals",
  "Cat": "Animals",
  "Deer": "Animals",
  "Dog": "Animals",
  "Horse": "Cowboy Gear",
  "Elephant": "Animals",
  "Giraffe": "Animals",
  "Fox": "Animals",
  "Gorilla": "Animals",
  "Hippo": "Animals",
  "Lamb": "Animals",
  "Kangaroo": "Animals",
  "Raccoon": "Animals",
  "Seal": "Animals",
  "Rabbit": "Animals",
  "Porcupine": "Animals",
  "Zebra": "Animals",
  "Lobster": "Animals",
  "Shrimp": "Animals",
  "Octopus": "Animals",
  "Seahorse": "Animals",
  "Starfish": "Animals",
  "Pine Tree": "Plants",
  "Cactus": "Plants",
  "Poison Ivy": "Plants",
  "Dandelion": "Plants",
  "Fern": "Plants",
  "Root": "Plants",
  "Sunflower": "Plants",
  "Rose": "Plants",
  "Bush": "Plants",
  "Leaf": "Plants",
  "Vine": "Plants",
  "Tree": "Plants",
  "Apple": "Foods",
  "Spaghetti": "Foods",
  "Steak": "Foods",
  "Clams": "Foods",
  "Sushi": "Foods",
  "Potatoes": "Foods",
  "Burger": "Foods",
  "Hoagie": "Foods",
  "Herbs": "Foods",
  "Avocado": "Foods",
  "Banana": "Foods",
  "Pineapple": "Foods",
  "Raspberries": "Foods",
  "Watermelon": "Foods",
  "Blueberries": "Foods",
  "Nuts": "Foods",
  "Bread": "Foods",
  "Toast": "Foods",
  "Bacon": "Foods",
  "Eggs": "Foods",
  "Soda": "Drinks",
  "Beer": "Drinks",
  "Wine": "Drinks",
  "Liquor": "Drinks",
  "Juice": "Drinks",
  "Coffee": "Drinks",
  "Tea": "Drinks",
  "Champagne": "Drinks",
  "Backpack": "Outdoor Gear",
  "Binoculars": "Outdoor Gear",
  "Blanket": "Outdoor Gear",
  "Camp Stove": "Outdoor Gear",
  "Beach Towel": "Outdoor Gear",
  "Cooler": "Outdoor Gear",
  "Surf Board": "Outdoor Gear",
  "Basketball": "Outdoor Gear",
  "Volley Ball": "Outdoor Gear",
  "Baseball": "Outdoor Gear",
  "Dumbbell": "Outdoor Gear",
  "Golf Club": "Outdoor Gear",
  "Fishing Rod": "Outdoor Gear",
  "Swimsuit": "Outdoor Gear",
  "Bicycle": "Outdoor Gear",
  "Accordion": "Musical Instruments",
  "Banjo": "Musical Instruments",
  "Bongo": "Musical Instruments",
  "Bugle": "Musical Instruments",
  "Trumpet": "Musical Instruments",
  "Drum": "Musical Instruments",
  "Guitar": "Musical Instruments",
  "Saxophone": "Musical Instruments",
  "Organ": "Musical Instruments",
  "Trombone": "Musical Instruments",
  "Tuba": "Musical Instruments",
  "Cello": "Musical Instruments",
  "Armpit": "Body Parts",
  "Back": "Body Parts",
  "Butt": "Body Parts",
  "Ears": "Body Parts",
  "Eyes": "Body Parts",
  "Feet": "Body Parts",
  "Face": "Body Parts",
  "Fingers": "Body Parts",
  "Foot": "Body Parts",
  "Hand": "Body Parts",
  "Hair": "Body Parts",
  "Knees": "Body Parts",
  "Legs": "Body Parts",
  "Mouth": "Body Parts",
  "Toes": "Body Parts",
  "Brain": "Body Parts",
  "Heart": "Body Parts",
  "Teeth": "Body Parts",
  "Thumb": "Body Parts",
  "Lungs": "Body Parts",
  "Intestines": "Body Parts",
  "Bakery": "Buildings",
  "Cafe": "Buildings",
  "Church": "Buildings",
  "Movie Theatre": "Buildings",
  "Book Store": "Buildings",
  "Barber Shop": "Buildings",
  "Airport": "Buildings",
  "Castle": "Buildings",
  "Broom": "Household Items",
  "Mop": "Household Items",
  "Blender": "Household Items",
  "Toaster": "Household Items",
  "Knife": "Household Items",
  "Lock and Key": "Household Items",
  "Pencil": "Household Items",
  "Pen": "Household Items",
  "Mug": "Household Items",
  "Salt and Pepper": "Household Items",
  "Pitcher": "Household Items",
  "Oven Mitt": "Household Items",
  "Oven": "Household Items",
  "Refrigerator": "Household Items",
  "Sink": "Household Items",
  "Toilet": "Household Items",
  "Plate": "Household Items",
  "Fork": "Household Items",
  "Spoon": "Household Items",
  "Chopsticks": "Household Items",
  "Bowl": "Household Items",
  "Gun": "Weapons",
  "Shovel": "Household Items",
  "Hammer": "Household Items",
  "Wrench": "Household Items",
  "Nail": "Household Items",
  "Saw": "Household Items",
  "Axe": "Weapons",
  "Ruler": "Household Items",
  "Bottle": "Household Items",
  "Bed": "Household Items",
  "Couch": "Household Items",
  "Chair": "Household Items",
  "Computer Mouse": "Household Items",
  "Computer": "Household Items",
  "Floppy Disk": "Household Items",
  "CD ROM": "Household Items",
  "Computer Keyboard": "Household Items",
  "Phone": "Household Items",
  "Ladder": "Household Items",
  "Mount Rushmoore": "Landmarks",
  "Egyptian Pyramids": "Landmarks",
  "Eiffel Tower": "Landmarks",
  "Statue of Liberty": "Landmarks",
  "Grand Canyon": "Landmarks",
  "Big Ben": "Landmarks",
  "Space Needle": "Landmarks",
  "Taj Mahal": "Landmarks",
  "Cowboy": "Professions",
  "Doctor": "Professions",
  "Firefighter": "Professions",
  "Mail Carrier": "Professions",
  "Hacker": "Professions",
  "Seamstress": "Professions",
  "Dentist": "Professions",
  "Police Officer": "Professions",
  "Plumber": "Professions",
  "Construction Worker": "Professions",
  "Football Player": "Professions",
  "10 Gallon Hat": "Cowboy Gear",
  "Bullet": "Cowboy Gear",
  "Pistol": "Cowboy Gear",
  "Bandolier": "Cowboy Gear",
  "Saddle": "Cowboy Gear",
  "Holster": "Cowboy Gear",
  "Rifle": "Cowboy Gear",
  "Lasso": "Cowboy Gear",
  "Boots": "Cowboy Gear",
  "Car": "Transportation",
  "Boat": "Transportation",
  "Airplane": "Transportation",
  "Truck": "Transportation",
  "Buss": "Transportation",
  "Train": "Transportation",
  "Railroad": "Transportation",
  "Bomb": "Weapons",
  "Bow and Arrow": "Weapons",
  "Cannon": "Weapons",
  "Spear": "Weapons",
  "Tank": "Weapons",
  "Sword": "Weapons",
  "Shield": "Weapons",
  "Hand Grenade": "Weapons",
  "Slingshot": "Weapons",
  "Raygun": "Weapons"
}