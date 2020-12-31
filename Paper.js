class Paper
{
	constructor(x,y)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:1.2

			
			}
		
		
		this.body=Bodies.rectangle(x,y,50,50, options);//width,height is fixed
		this.width=50;
		this.height=50;
		this.image=loadImage("sprites/paper.png");
		World.add(world, this.body);

	}
	display()
	{
			
			var paperpos=this.body.position;
			imageMode (CENTER);

			image(this.image,this.body.position.x,this.body.position.y,70,80);//here 70 is width and 80 is height of image
			
			
	}

}
