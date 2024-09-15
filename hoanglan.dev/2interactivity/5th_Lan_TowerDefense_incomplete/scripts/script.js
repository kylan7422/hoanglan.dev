
//setup canvas
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
canvas.width= 1280-64*3
canvas.height=768-64*3
//setup map
const normalMap = new Image()
normalMap.src = 'pictures/maps/normalmap.png'
//setup events listener
let mouseX=undefined
let mouseY=undefined
canvas.addEventListener('click', (event) => {
  const rect = canvas.getBoundingClientRect()
  mouseX = event.clientX - rect.left
  mouseY = event.clientY - rect.top
  console.log(`x:${mouseX} y:${mouseY}`)
})
canvas.addEventListener('touchmove', (event) => {
  const rect = canvas.getBoundingClientRect()
  const touch = event.touches[0]
  mouseX = touch.clientX - rect.left
  mouseY = touch.clientY - rect.top
})



//main in here
normalMap.onload = ()=>{
  animate()
}

//animate function
function animate(){
  requestAnimationFrame(animate)
  c.drawImage(normalMap,0,0)
  highlightBuildingTiles()
}