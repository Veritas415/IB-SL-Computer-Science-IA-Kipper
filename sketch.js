var GroundLength = [Math.floor(Math.random() * (-80 -  + 100) ) + -80, Math.floor(Math.random() * (80 -  + 100) ) + 80, Math.floor(Math.random() * (-40 -  + 500) ) + -40];

var WallLength = [Math.floor(Math.random() * (0 -  + 40) ) + 0, Math.floor(Math.random() * (20 -  + 100) ) + 20, Math.floor(Math.random() * (50 -  + 150) ) + 50];

var Formula = ["dmax", "range", "time"];

var t = Math.floor(Math.random() * 3);

var Angle =Math.floor(Math.random() *  89);

var FUD = 0;
FUD = FUD * 1;
var UUH = 0;
UUH = UUH * 1;

var i = prompt("Enter a number between 0 and 2 to select dificulty.");
i = i * 1;

function Velocity() {
 FUD = document.getElementById("xVelocity").value; 
 UUH = document.getElementById("yVelocity").value;
 document.getElementById("Instruction").innerHTML = "Press any key to fire the ball.";
}


//Add in some arrays to give random new scenarios with different wall and ground dimentions. Also, add some loops and searchers to tally the number of tries that a students uses.



/*
Source Code: https://code.tutsplus.com/tutorials/getting-started-with-matterjs-introduction--cms-28784
*/

// creating aliases for all the Matter.js modules that we might need (makes typing easier)
var Engine = Matter.Engine, //contains methods for creating and manipulating engines
//Matter is a parent class and engine is a child class object
    Render = Matter.Render, //This module is a basic HTML5 canvas-based renderer and is required to visualize different engines. 
    World = Matter.World, //create and manipulate the world in which the engine runs
    Bodies = Matter.Bodies,
    Body = Matter.Body; //allows you to create rigid body objects
     
var engine; // setting up global variables

var boxA, ballA, guard, ground, target;

function setup() {
    createCanvas(1280,560);

    engine = Engine.create(); // makes the engine

    /* These lines use the Bodies engine to generate rigid bodies. 
    We have two circles and two rectangles. 
    The second rectangle functions as our ground..
    */  
    //boxA ias an instance of the Bodies object
    //Bodies in an object, boxA is an insatnce of an object, and rectangle is a constructor which allows for a ne  w instance of the Bodies object. Constructors allow for instances of objects          
    boxA = Bodies.rectangle(650 + GroundLength[i], 200 - WallLength[i], 80, 300 + WallLength[i], { isStatic: true });  // parameters are (x, y, w, h)
    console.log(boxA); // gives us information about the box1 object
    
    
    ballA = Bodies.circle(50, 450, 20);    // the parameters here are Matter.Bodies.circle(x, y, radius, [options], [maxSides])
    console.log(ballA);
 //   ballB = Bodies.circle(460, 10, 40, 10);
    // note the parameter isStatic for the ground object used here
    guard = Bodies.rectangle(610 + GroundLength[i], 200 - WallLength[i], 50, 50, { isStatic: true });
  
    ground = Bodies.rectangle(50, 480, 555 + GroundLength[i], 20, { isStatic: true });
    console.log(ground);
    
    target = Bodies.rectangle(585 + GroundLength[i],  159 - WallLength[i], 50, 30, { isStatic: false });
  
    World.add(engine.world, [boxA, ballA, guard, ground, target]);  // adds the body to the world

    Engine.run(engine);
} 

function draw() {
    //background(0);
    fill(255, 0, 0, 100);
    push();
    rectMode(CENTER);
    imageMode(CENTER);
    pop();
    // we are going to create a p5js object rect using the values of the object boxA
    rect(boxA.position.x - 45, boxA.position.y -30, 20, 300 + WallLength[i]  );
    rect(ground.position.x, ground.position.y - 10, 555 + GroundLength[i], 20);
    rect(target.position.x + 10, target.position.y - 20, 30, 30);
    
    //translate(40,40);
    //rotate(PI/3)
    circle(ballA.position.x, ballA.position.y, 20);
    if (mouseIsPressed) {
      //  Trans(ballA);
      console.log(ballA.position.x);
        //Trans(ground);
    } else if (keyIsPressed) {
        LinVel(ballA, FUD, -(UUH));
        console.log(ballA.position.x, ballA.position.y);
  }
   document.getElementById("GMeasure").innerHTML = "The length of the ground is: " + (555 + GroundLength[i]);
   document.getElementById("WMeasure").innerHTML = "The height of the wall is: " + (300 + WallLength[i]);
  document.getElementById("Angle").innerHTML = "Use the angle " + Angle + " degrees and use the formula " + Formula[t];
}
/*
These functions use the Body module to add transformations to the shape. 
We are using a parameter to indicate which shape we want to transform.
Here are some samples, you can find more here: http://brm.io/matter-js/docs/classes/Body.html#methods
*/
function Trans(SHAPE) {
    Body.translate( SHAPE, {x: -10, y: 0});
}

function LinVel(SHAPE, X, Y) {
    Body.setVelocity( SHAPE, {x: X, y: Y});
}

function AngVel(SHAPE) {
    Body.setAngularVelocity( SHAPE, Math.PI/6);
}

function HorForce(SHAPE) {
    Body.applyForce( SHAPE, 
        {x: SHAPE.position.x, y: SHAPE.position.y}, 
        {x: 0.05, y: 0}); 
}

function VertForce(SHAPE) {
    Body.applyForce( SHAPE,
     {x: SHAPE.position.x, y: SHAPE.position.y}, 
     {x: 0, y: -0.05}); 
} 



function Home() {
  
}

function PhysicsGames() {
  
}

function Tutorials() {

}

function OutsideResources() {

}

function Range() {
  document.getElementById("Samples").innerHTML = "We must calcuate the range, or dx, by using the pure and derived forms of d=Vx*t: distance is equal to velocity (meters per second) multiplied by time (seconds). Since we are working with projectile motion, we use the modified formulae. Vx=V*cos(angle) and t=(2V*sin(angle))/g This becomes dx=(V^2*sin(2*angle))/g";

}

function dmax() {
  document.getElementById("Samples").innerHTML = "We must calcuate the height, or dmax, by using the pure and derived forms of Vy^2=Uy^2+2*a*d: final vertical velocity squared is equal to initial vertical velocity squared plus 2 multiplied by acceleration (in this gravitational deccelleration) multiplied by the distance. Since we are working with projectile motion, we use the modified formulae. This results in the formula dmax=(V*sin(angle))^2/2*g";

}

function Time() {
  document.getElementById("Samples").innerHTML = "We must calcuate the time, by using the pure and derived forms of Vy=Uy+a*t: final vertical velocity is equal to initial vertical velocity plus acceleration (in this gravitational deccelleration) multiplied by time. Since we are working with projectile motion, we use the modified formulae. This results in the formula: t=(V*sin(angle))/g You double this to get the time from beginning to landing.";

}