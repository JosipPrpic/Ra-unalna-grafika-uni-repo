//hypotrochoid
var myDoc = app.activeDocument;
var myLine = myDoc.pathItems.add();

//set stroked to true so we can see the path
myLine.stroked = true;
myLine.filled = false;

var a = prompt("Upisi a", "");
var b = prompt("Upisi b", "");
var c = prompt("Upisi c", "");

for (var t=1; t <= 100; t+=0.1){
	
    var x = (a-b) * Math.cos(t) + c * Math.cos((a/b - 1) * t);
    var y = (a-b) * Math.sin(t) - c * Math.sin((a/b - 1) * t);
   
   var newPointX = myLine.pathPoints.add();
   newPointX.anchor = [x, y]; 
   newPointX.leftDirection = newPointX.anchor;
    newPointX.rightDirection = newPointX.anchor;
    newPointX.pointType = PointType.CORNER;
    }