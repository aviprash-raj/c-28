class Bird extends BaseClass{
    constructor(x,y){
        //properties
       super(x,y,50,50)
       
       this.image = loadImage("sprites/bird.png");
      
    }
    display(){
        var pos = this.Body.position;
        //pos.x = mouseX;
        //pos.y = mouseY;
        super.display();
    }
}