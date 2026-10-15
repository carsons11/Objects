/* cart = []
shopping = [
    {name: "6 Infinity Stones", origin: "MCU"},
    {name: "Command Block", origin:"Minecraft"},
    {name: "Omnitrix", origin:"BEN 10"},
    {name: "Master Ball", origin:"Pokémon"},
    {name: "7 DragonBalls", origin: "DragonBall"},
    {name: "Chaos Emerald", origin: "Sonic",},
    {name: "Kryptonite", origin: "DCU", cost: 10},
    {name: "5 pieces of Exodia", origin: "Yu-Gi-Oh"},
    {name: "Sun Wukong's Staff", origin: "Chinese mythology" },
    {name: "Gold Scar", origin: "Fortnite"},
    {name: "Death Note", origin: "Death Note"},
    {name: "Roblox Banhammer", origin: "Roblox"},
    {name: "Krabby Patty Secret Formula", origin:"SpongeBob Squarepants"}
] */




/* function Christmas(N,list){
    x=Math.max(...list)
    track = 0
    z=0
    newlist = []
    while (z<=x){
        y = Math.min(...list)
        z+=y
        if (z<=x){
            newlist.push(Math.min(...list))
            list.pop(Math.min(...list))
            track+=1
        }
        track+=1
        newlist.push(Math.max(...list))
    }
    return `There are ${track} presents possible in a stack which are ${newlist} from bottom to top.`
}
console.log(Christmas(5,[7,8,2,5,10])) */