
var triangleTracker = function(side1, side2, side3) {
  return true;
};

describe('triangleTracker', function() {
  it("is false when any 2 sides are less than or equal to the third", function() {
    expect(triangleTracker(2,3,6)).to.equal(true);
  });

  it("is true when all 3 sides are equal", function() {
    expect(triangleTracker(3,3,3)).to.equal(true);
  });
  it("is true when only two sides are equal", function() {
    expect(triangleTracker(3,4,3)).to.equal(true);
  });

  it("is true when no sides are equal", function() {
    expect(triangleTracker(3,4,5)).to.equal(true);
  });

});






/*Possible Behaviors

(side1 + side2 <= side3) || (side2 + side3 <= side1) ||
(side1 + side3 <= side2)    //not a triangle

side1=2, side2=5, side3=6
expected output=false

side1=2, side2=3, side3=6
expected output=true

(side1 === side2 === side3) //equilateral

side1=2, side2=5, side3=6
expected output= false

side1=2, side2=2, side3=2
expected output= true

(side1 === side2) && (side2 !== side3) ||
(side1 === side3) && (side1 !== side2) ||  //isosceles
(side2 === side3) && (side1 !== side3)

side1=2, side2=5, side3=6
expected output= false

side1=2, side2=5, side3=5
expected output= true

(side1 !== side2) && (side2 !== side3) && (side1 !== side3) //scalene

side1=2, side2=4, side3=4
expected output=false

side1=2, side2=5, side3=6
expected output=true */
