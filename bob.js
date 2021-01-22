class bob
{
	constructor(x,y)
	{
		var options={
			isStatic:false,
			restitution:1,
			friction:0,
			density:7.8,
            
			
			}
		
		
		this.image= loadImage("metal ball.png");
		this.body=Bodies.circle(x,y, 25, options)
		
		World.add(world, this.body);

	}
	display()
	{
			
				

			push()
			
			ellipseMode(CENTER)
		
			
			fill("purple")
			ellipse(this.body.position.x,this.body.position.y,25,25);
			imageMode(CENTER);
			
			image(this.image,this.body.position.x,this.body.position.y,130, 130);
			
			
			
			pop()
			
			
	}

}