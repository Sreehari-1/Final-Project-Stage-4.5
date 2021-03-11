class Player {
    constructor(x, y) {
      var options = {
          'friction':2.5,
          'density':1
      }
      this.image=loadImage("images/alien.png")
      this.body = Bodies.rectangle(x, y, 50,70, options);
      this.width = 60;
      this.height = 80;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      imageMode(CENTER)
      image(this.image,0,0,this.width,this.height)
      pop();
    }
  };
  