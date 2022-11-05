//crtamo u trenutno otvorenom dokumentu u Illustratoru 
var myDoc = app.activeDocument; 
  
// u otvoreni dokument dodajemo novi objekt 
var myLine = myDoc.pathItems.add();

myLine.stroked = true;

// x = S * sin (a*t)
// y = V * cos (b*t)
var S = 300; 
var V = 100; 
var a =30;
var b = 2;

for (var t=0; t <= 10; t+=0.01){
	
    var x = S * Math.sin(a*t);
    var y = V * Math.cos(b*t);
	
   var newPointX = myLine.pathPoints.add();
   newPointX.anchor = [x, y]; 
   newPointX.leftDirection = newPointX.anchor;
    newPointX.rightDirection = newPointX.anchor;
    newPointX.pointType = PointType.CORNER;
    }