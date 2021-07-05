class Tree {
    constructor(x,y) {
        
      this.x = x
      this.y = y
      this.width = 450
      this.height = 600
      this.thickness = 10 
      this.image = loadImage("Plucking mangoes/tree.png");
      this.bottomBody = Bodies.rectangle(this.x, this.y, this.width,this.height, this.thickness,{isStatic: true})
    
     
      World.add(this.bottomBody);
    }
    display(){
      var pos =this.bottomBody.position;
      push()
      translate(pos.x,pos.y + 10)
      fill("brown");
      imageMode(CENTER)
      image(this.image, 0, -this.height/2,this.width, this. height);
      pop()
    }
  };
