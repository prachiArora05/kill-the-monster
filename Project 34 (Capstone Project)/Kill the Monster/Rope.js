class Rope {
  constructor(bodyA, pointB) {
    this.pointB = pointB;
    this.rope = Constraint.create({bodyA: bodyA, pointB: pointB, stiffness: 1.2, length: 450});
    World.add(world, this.rope);
  }
  
  display() {
    if (this.rope.bodyA) {
      var pointA = this.rope.bodyA.position;
      var pointB = this.pointB;
      
      push();
      stroke(48, 22, 8);
      strokeWeight(0);
      line(pointB.x, pointB.y, pointA.x, pointA.y);
      pop();
    }
  }
}
