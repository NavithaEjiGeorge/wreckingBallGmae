class Bob {
    constructor(x, y) {
       var options ={
          isStatic : false,
          density:10,
          frictionAir:0.005
       }
    this.body = Bodies.rectangle(x,y,30,30,options)
    this.width = 100
    this.height = 100
    World.add(world,this.body)
    }
display(){
   push()
   var pos = this.body.position;
   var angle = this.body.angle;
   translate(pos.x,pos.y)
   rotate(angle)
   fill("red")
   ellipseMode(CENTER)
   ellipse(0,0,this.width,this.height)
   pop()
   
}
    }