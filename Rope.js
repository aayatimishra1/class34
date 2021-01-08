class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 2,
            length: 250,
        }

        this.pointB = pointB;
        this.rope = Constraint.create(options);
        World.add(world, this.rope);

    }

    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.pointB;
        push();
        fill("brown");
        line(pointB.x, pointB.y, pointA.x, pointA.y);
        pop();
    }
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x:mouseX, y:mouseY});
}