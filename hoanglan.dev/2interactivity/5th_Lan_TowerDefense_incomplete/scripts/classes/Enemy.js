//Enemy class
class Enemy extends Sprite{
  constructor({position = waypoints1[0]}){
    super(position)
    this.width =64,
    this.height =64,
    this.center = {
      x:this.position.x-0.5*this.width,
      y:this.position.y-0.5*this.height
    },
    this.waypointId = 0
  }
  draw(){
    c.fillRect(this.center.x, this.center.y, this.width, this.height)
  }
  update(){
    this.draw();
    //MOVE ENEMIES ALONG WAYPOINTS
    if(this.waypointId<waypoints1.length-1){
      let distanceX = waypoints1[this.waypointId+1].x-this.position.x
      let distanceY = waypoints1[this.waypointId+1].y-this.position.y
      let angle = Math.atan2(distanceY, distanceX)
      let dx =Math.cos(angle)
      let dy =Math.sin(angle)
      let factor=1
      this.position.x+=dx*factor
      this.position.y+=dy*factor

        if( Math.abs(this.position.x-waypoints1[this.waypointId+1].x)<35&&
            Math.abs(this.position.y-waypoints1[this.waypointId+1].y)<35) {
          this.waypointId=this.waypointId+1
        }
      this.center = {
        x:this.position.x-0.5*this.width,
        y:this.position.y-0.5*this.height
      }
      
    }

  }
}