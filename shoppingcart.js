shop = [
    {name: "6 Infinity Stones", origin: "MCU", cost: Math.floor(Math.random()*9999)},
    {name: "Stack of Command Blocks", origin:"Minecraft", cost: Math.floor(Math.random()*9999)},
    {name: "Omnitrix", origin:"BEN 10", cost: Math.floor(Math.random()*9999)},
    {name: "Master Ball", origin:"Pokémon", cost: Math.floor(Math.random()*9999)},
    {name: "7 DragonBalls", origin: "DragonBall", cost: Math.floor(Math.random()*9999)},
    {name: "Chaos Emerald", origin: "Sonic", cost: Math.floor(Math.random()*9999)},
    {name: "Kryptonite", origin: "DCU", cost: Math.floor(Math.random()*1000)},
    {name: "5 pieces of Exodia", origin: "Yu-Gi-Oh", cost: Math.floor(Math.random()*9999)},
    {name: "Sun Wukong's Staff", origin: "Chinese mythology", cost: Math.floor(Math.random()*9999)},
    {name: "Gold Scar", origin: "Fortnite", cost: Math.floor(Math.random()*9999)},
    {name: "Death Note", origin: "Death Note", cost: Math.floor(Math.random()*9999)},
    {name: "Roblox Banhammer", origin: "Roblox", cost: Math.floor(Math.random()*9999)},
    {name: "Krabby Patty Secret Formula", origin:"SpongeBob Squarepants", cost: 9999},
    {name: "Lego Death Star II", origin: "Star Wars", cost: 3449},
    {name: "Master Sword", origin: "The Legend of Zelda", cost: Math.floor(Math.random()*9999)},
    {name: "Energy Sword", origin: "Halo", cost: Math.floor(Math.random()*9999)},
    {name: "Gravity Gun", origin: "Half Life 2", cost: Math.floor(Math.random()*9999)},
    {name: "Megatron", origin: "Transformer", cost: Math.floor(Math.random()*9999)},
    {name: "The Real Knife", origin: "Undertale", cost: Math.floor(Math.random()*9999)},
    {name: "The Ruby Slippers", origin: "The Wizard Of Oz", cost: 28000000},
    {name: "Compound V", origin: "The Boys", cost: Math.floor(Math.random()*9999)},
]

cart = []

function ShoppingCart(){
    shop.forEach(shop => {i=1; console.log(`${shop.name}: ${shop.cost} lego studs`)})
}
ShoppingCart()
function Add(x){
    shop.forEach(function(shop){
        if (x===shop.name){
            cart.push(x)
        }
    })
}

function Remove(){}

function Filter(){}

function Total(){}
