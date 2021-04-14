class Umbrella{
    constructor(x,y){
        var options ={
            isStatic:true
        }
      this.image=loadImage("images/Walking Frame/walking_1.png");
      this.umb = Bodies.circle(x,y,50,options);
      this.radius =50;
      World.add(world,this.umb);
    }
    display(){
        imageMode(CENTER);
        image(this.image,this.umb.position.x,this.umb.position.y + 520,300,300);
    }
}