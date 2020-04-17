class Ground {
    constructor(x,y,width,height) {
    
      var options = {
        isStatic : true
      };
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      //this.image = loadImage ("sprites/base.png");
      World.add(world, this.body);

    }

    display(){
        var position = this.body.position
        fill(255);
        stroke("red")
        rectMode(CENTER);
        rect(position.x, position.y, this.width, this.height);
      }
    };