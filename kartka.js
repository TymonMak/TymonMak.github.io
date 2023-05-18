// import kaboom lib
import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

kaboom();

loadSprite("background","Background.jpg")
loadSprite("santa","santa.png")
loadSound("music", "music.mp3")

add([
    sprite("background")
])

const santa = add([
    sprite("santa"),
    pos(0,0)
])



onKeyRelease("space",()=>play ("music"))

onUpdate(()=>{
    if(santa.pos.x<1)
    santa.pos.x +=1
})

let right = true

santa.onUpdate(()  =>{
    if(right && santa.pos.x < 250)
    santa.pos.x += 1

    else if(!right && santa.pos.x > 1)
    santa.pos.x -=1

    else right ^= true
})