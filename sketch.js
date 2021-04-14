const Engine= Matter.Engine;
const World=Matter.World;
const Bodies = Matter.Bodies;
var t1,t2,t3,t4,t;
var engine,world,rand;
var drops=[];
var maxdrop=100,thundercreateframe=0;


function preload(){
    t1=loadImage("images/thunderbolt/1.png");
    t2=loadImage("images/thunderbolt/2.png");
    t3=loadImage("images/thunderbolt/3.png");
    t4=loadImage("images/thunderbolt/4.png");
}

function setup(){
  engine=Engine.create();
  world=engine.world;
  createCanvas(400,700);
   u=new Umbrella(200,50);
   if(frameCount %150===0){
       for(var i=0;i<maxdrop ; i++){
        drops.push(new Raindrop(random(0,400),random(0,400)));

        
       }
   }
    
}

function draw(){
    
Engine.update(engine);
background(0);
rand=Math.round(random(1,4));
if(frameCount %80 ===0){
    thundercreateframe=frameCount;
    thunder=createSprite(random(10,370),random(10,30),10,10);
    switch(rand){
        case 1 : thunder .addImage(t1);
        break
        case 2 : thunder .addImage(t2);
        break
        case 3 : thunder .addImage(t3);
        break
        case 4 : thunder .addImage(t4);
        break
        default:break
        
    }
    thunder.scale=random(0.3,0.6);


}
if(thundercreateframe+10=== frameCount && t){
    t.destroy();

}

u.display();
for(var i=0; i<maxdrop;i++){
    drops[i].display()
    drops[i].updateY();
}
drawSprites();
}   

