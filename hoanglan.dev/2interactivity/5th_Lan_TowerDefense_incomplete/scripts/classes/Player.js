class Player{
  constructor(){
    this.money=0
    this.hearts=0
    this.towers=[]
    this.enemies=[]
  }
  addTower(tower){
    
    this.towers.push(tower)
  }
  addEnemy(enemy){
    this.enemies.push(enemy)
  }
  update(){

  }
}