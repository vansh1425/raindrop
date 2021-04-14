class Raindrop {
    constructor(x,y){
    var options ={
      friction:0.1,
      restitution:0.8
        }
        
        this.rain = Bodies.circle(x,y,4,options);
        this.radius=4;
        World.add(world,this.rain);
      }
   display(){
     fill("blue");
     ellipseMode(CENTER);
     ellipse(this.rain.position.x,this.rain.position.y,this.radius,this.radius);

   }
   updateY(){
     if(this.rain.position.y>height){
       Matter.Body.setPosition(this.rain,{x:random(0,400),y:random(0,400)});
     }
   }
}