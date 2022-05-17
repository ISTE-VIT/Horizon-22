var meteors = [];

//first, we define our setup method. This will be run once, when the sketch is loaded.
function setup() {
  //create a canvas of full width and height
  createCanvas("100px", "100px");

  //position ellipses via their center
  ellipseMode(RADIUS);

  //change color type to HSB (Hue, Saturation, Brightness)
  colorMode(HSB);

  //Now, we will push back 300 new meteors into an array
  for (var i = 0; i < 10; i++) {
    meteors.push(new Meteor());
  }
}

//This method will be called many times per second
function draw() {
  //We will clear the screen each time, with all black, and 10% opacity, giving us our trail effect
  background(color(218, 70, 14, 0.3));

  //For each meteor in the array (meteors.length will return a value representing this)
  for (var i = 0; i < meteors.length; i++) {
    //we will update it's position
    meteors[i].move();
    //then draw the updated meteor
    meteors[i].display();
  }
}

//This is a new class, named Meteor. Notice that it is named with a capital M, this will be standard whenever we define our classes.
function Meteor() {
  this.size = random(5);
  this.length = 30;
  this.color = color(44, 13, 99);
  this.speed = random(10);

  this.x = -random(width);
  this.y = -random(height);

  this.move = function () {
    this.x += this.size;
    this.y += this.size;

    //if our meteor goes out of bounds...
    if (this.x > width || this.y > height) {
      this.x = -random(width);
      this.y = -random(height);
    }
  };

  this.crash = function () {};

  this.display = function () {
    fill(this.color);
    ellipse(this.x, this.y, this.size, this.size);
  };
}

let currentPage = 0;
const leftButton = document.querySelector("#carousel-left");
const rightButton = document.querySelector("#carousel-right");
const panels = document.querySelectorAll(".coordinators-panel");

const renderPanel = () => {
  panels.forEach((panel, idx) => {
    if (idx == currentPage) {
      panel.style.display = "flex";
      panel.style.opacity = "1";
    } else {
      panel.style.display = "none";
      panel.style.opacity = "0";
    }
  });
};

//show page 0
renderPanel();

rightButton.addEventListener("click", () => {
  currentPage = Math.min(currentPage + 1, 3);
  renderPanel();
});
leftButton.addEventListener("click", () => {
  currentPage = Math.max(currentPage - 1, 0);
  renderPanel();
});
