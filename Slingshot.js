class Slingshot{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness:0.03,
            length:10
        }
    this.sling1 = loadImage("sprites/sling1.png");
    this.sling2 = loadImage("sprites/sling2.png");
    this.sling3 = loadImage("sprites/sling3.png");
    this.pointB = pointB;
    this.sling = Constraint.create(options);
    World.add(world,this.sling);
    }

    attach(body){
        this.sling.bodyA = body;
    }
    
    fly(){
        this.sling.bodyA = null;
    }



    display(){
        image(this.sling1,250,40);
        image(this.sling2,225,40);
        if(this.sling.bodyA){
            var posA = this.sling.bodyA.position;
            var posB = this.pointB;
            push();
            strokeWeight(4);
            stroke(48,22,8);
            if(posA.x< 270){
                strokeWeight(7);
                line(posA.x-20,posA.y,posB.x-10,posB.y);
                line(posA.x-20,posA.y,posB.x+30,posB.y-3);
                image(this.sling3,posA.x-25,posA.y-10,20,30);
            }else{
                strokeWeight(3);
                line(posA.x+20,posA.y,posB.x+5,posB.y);
                line(posA.x+20,posA.y,posB.x+45,posB.y-3);
                image(this.sling3,posA.x+10,posA.y-10,20,30);
            }
            
            pop();
        }
    }
}