const canvas = document.querySelector(".neve");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = document.body.scrollHeight;

console.log(canvas.height, window.innerHeight)

let flocosDeNeve = []

for(let i = 0; i < 200; i++ ){
    flocosDeNeve.push({x: Math.random()*canvas.width, y: Math.random()*canvas.height, i: 0, r: Math.random() + 1.2})
}

ctx.beginPath()
ctx.moveTo(canvas.width/2, 0)
ctx.lineTo(canvas.width/2, canvas.height)
ctx.strokeStyle= "#fff"
ctx.stroke()

function animacao(){

    ctx.clearRect(0,0, canvas.width, canvas.height)
    for (let floco of flocosDeNeve){
        ctx.beginPath()
        ctx.arc(floco.x, floco.y, floco.r, 0, Math.PI*2)
        ctx.fillStyle= "#fff"
        ctx.fill()

        floco.y += floco.r / 2
        floco.x += Math.sin(floco.i)
        floco.i += Math.random() * Math.random() * 0.1

        if(floco.y > canvas.height){
            floco.y = 0
        }
    }

    requestAnimationFrame(animacao)
}



animacao()

// TODO 
// Resize event
// movimento mais orgânico
