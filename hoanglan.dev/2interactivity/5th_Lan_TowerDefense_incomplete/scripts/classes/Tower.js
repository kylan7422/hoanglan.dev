class Tower extends Sprite{
  constructor({position={x:-100, y:-100}}, enemy){
    super(position)
    this.shooting={
      projectiles: [],
      projectilesDamage: 10,
      shootingRadius: 50,
      shootingRate: 1,
      shootingLevel: 0
    }
    this.target= enemy
  }
  draw(){

  }
  update(){

  }
  shoot(){

  }
  upgrade(){

  }
}