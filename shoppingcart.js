shop = [
    {name: "6 Infinity Stones", origin: "MCU", cost: Math.floor(Math.random()*9999), image:`InfinityStones.png`},
    {name: "Stack of Command Blocks", origin:"Minecraft", cost: Math.floor(Math.random()*9999), image:`Command-Block.gif`},
    {name: "Omnitrix", origin:"BEN 10", cost: Math.floor(Math.random()*9999), image:`Omnitrix.webp`},
    {name: "Master Ball", origin:"Pokémon", cost: Math.floor(Math.random()*9999), image:`Master-Ball.png`},
    {name: "7 DragonBalls", origin: "DragonBall", cost: Math.floor(Math.random()*9999), image:`7-Dragonballs.png`},
    {name: "Chaos Emerald", origin: "Sonic", cost: Math.floor(Math.random()*9999), image:``},
    {name: "Kryptonite", origin: "DCU", cost: Math.floor(Math.random()*1000), image:``},
    {name: "5 pieces of Exodia", origin: "Yu-Gi-Oh", cost: Math.floor(Math.random()*9999), image:`Exodia.png`},
    {name: "Sun Wukong's Staff", origin: "Chinese mythology", cost: Math.floor(Math.random()*9999), image:`Sun-Wukong-Staff.png`},
    {name: "Gold Scar", origin: "Fortnite", cost: Math.floor(Math.random()*9999), image:`Gold-Scar.jpg`},
    {name: "Death Note", origin: "Death Note", cost: Math.floor(Math.random()*9999), image:`Death_Note.webp`},
    {name: "Roblox Banhammer", origin: "Roblox", cost: Math.floor(Math.random()*9999), image:`Banhammer.png`},
    {name: "Krabby Patty Secret Formula", origin:"SpongeBob Squarepants", cost: 9999, image:``},
    {name: "Lego Death Star II", origin: "Star Wars", cost: 3449, image:``},
    {name: "Master Sword", origin: "The Legend of Zelda", cost: Math.floor(Math.random()*9999), image:``},
    {name: "Energy Sword", origin: "Halo", cost: Math.floor(Math.random()*9999), image:``},
    {name: "Gravity Gun", origin: "Half Life 2", cost: Math.floor(Math.random()*9999), image:``},
    {name: "Megatron", origin: "Transformer", cost: Math.floor(Math.random()*9999), image:``},
    {name: "The Real Knife", origin: "Undertale", cost: Math.floor(Math.random()*9999), image:``},
    {name: "The Ruby Slippers", origin: "The Wizard Of Oz", cost: 28000000, image:``},
    {name: "Compound V", origin: "The Boys", cost: Math.floor(Math.random()*9999), image:``},
]

/* cart = {}

function ShoppingCart(){
    shop.forEach(shop => {i=1; console.log(`${shop.name}: ${shop.cost} lego studs`)})
}

function Add(x){
    shop.forEach(function(shop){
        if (x===shop.name){
            cart.x = cart
        }
    })
}
Add("Megatron")
Add("Gravity Gun")

function Remove(y){
    cart.forEach(function(cart){
        if (y===cart){
            delete cart[y]
        }
    })
}
Remove("Megatron")
console.log(cart)

function Filter(){}

function Total(){} */


/* console.log("test");
 */
/* let x = document.querySelector(".box");
console.log(x.parentElement);
x.style.backgroundColor = "rgb(255,255,0)";

const y = document.getElementById("color");
y.style.backgroundColor = "rgb(0,255,0)";

y.textContent="Hello World"; */

/* function getRGB(){
    let r = Math.floor(Math.random()* 256);
    let g = Math.floor(Math.random()* 256);
    let b = Math.floor(Math.random()* 256);
    const box = document.querySelector(".box");
    box.style.backgroundColor = `rgb(${r},${g},${b})`
    header.textContent = `rgb(${r},${g},${b})`;
} */


function inject(){
    const cardmenu = document.querySelector(".cardsmenu");
    shop.forEach(shop => {
    cardmenu.insertAdjacentHTML("beforeend", ` <div class="card">
        <h2 class="title">${shop.name}</h2>
        <p class="desc">${shop.origin}</p>
        <p class="price">$: ${shop.cost}</p>        
        <img class="img" src="img/${shop.image}" alt="Doesn't work">
        </div>`)
    });
}

inject();



//Select the container
//Create inject function that takes argument for items
//Inject 1 full HTML card into the container