class Gem{
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':0.3,
            'density':1.0
        }
        this.image= loadImage("images/gem.png")
        this.body = Bodies.rectangle(x, y, 30, 30, options);
        this.width = 30;
        this.height = 30;
        
        World.add(world, this.body);
    }
      display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER)
        image(this.image, 0, 0, this.width, this.height)
        pop();
        if(this.body.speed < 1){
          this.Visibility = 255
        }
        else{
          World.remove(world, this.body);
          push();
          image(this.image, this.body.position.x, this.body.position.y, 30, 30);
          pop();
        }
      }
        score(){
          if (this.Visiblity < 0 && this.Visiblity > -1005){
            score++;
          }
        }
        
       
      
  };


   
   
