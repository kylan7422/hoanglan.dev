let buildableTilesArray=[ { "position": { "x": 192, "y": 0 }, "width": 64 }, { "position": { "x": 832, "y": 0 }, "width": 64 }, { "position": { "x": 192, "y": 64 }, "width": 64 }, { "position": { "x": 832, "y": 64 }, "width": 64 }, { "position": { "x": 192, "y": 128 }, "width": 64 }, { "position": { "x": 832, "y": 128 }, "width": 64 }, { "position": { "x": 192, "y": 192 }, "width": 64 }, { "position": { "x": 512, "y": 192 }, "width": 64 }, { "position": { "x": 832, "y": 192 }, "width": 64 }, { "position": { "x": 192, "y": 256 }, "width": 64 }, { "position": { "x": 512, "y": 256 }, "width": 64 }, { "position": { "x": 832, "y": 256 }, "width": 64 }, { "position": { "x": 512, "y": 320 }, "width": 64 }, { "position": { "x": 512, "y": 384 }, "width": 64 }, { "position": { "x": 512, "y": 448 }, "width": 64 }, { "position": { "x": 0, "y": 512 }, "width": 64 }, { "position": { "x": 128, "y": 512 }, "width": 64 }, { "position": { "x": 256, "y": 512 }, "width": 64 }, { "position": { "x": 384, "y": 512 }, "width": 64 }, { "position": { "x": 512, "y": 512 }, "width": 64 }, { "position": { "x": 640, "y": 512 }, "width": 64 }, { "position": { "x": 768, "y": 512 }, "width": 64 }, { "position": { "x": 896, "y": 512 }, "width": 64 }, { "position": { "x": 1024, "y": 512 }, "width": 64 } ]

class buildableTiles extends Sprite{
  constructor({position={x:0, y:0}}){ 
    super(position)
    this.width=64
  }
}


 function highlightBuildingTiles(){
  buildableTilesArray.forEach(element => {

    if(mouseX-element.position.x<50 && element.position.x+64-mouseX<50
      &&
      mouseY-element.position.y<50 && element.position.y+64-mouseY<50){

      }else{
      c.fillStyle='rgba(255,255,255,0.2)'
      c.fillRect(element.position.x, element.position.y, 64, 64)

    }
    
  });
}