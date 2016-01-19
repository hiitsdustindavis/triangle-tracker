$(function() {
  $("#sides").submit(function(event) {
    var side1 = parseInt($("#side1").val());
    var side2 = parseInt($("#side2").val());
    var side3 = parseInt($("#side3").val());

    if ((side1 + side2 <= side3) || (side2 + side3 <= side1) || (side1 + side3 <= side2)) {
      $("#result").text("Not a triangle.");
    } else if ((side1 === side2) && (side2 === side3)) {
      $("#result").text("This forms an equilateral triangle.");
    } else if ((side1 === side2) && (side2 !== side3) || (side1 === side3) && (side1 !== side2) || (side2 === side3) && (side1 !== side3)) {
      $("#result").text("This forms an isosceles triangle.");
    } else if ((side1 !== side2) && (side2 !== side3) && (side1 !== side3)) {
      $("#result").text("This forms a scalene triangle.");
    }
    else{
      alert("Please enter an integer for all three sides");
    }

    event.preventDefault();
  });
});
