function setup() {
  createCanvas(640, 480);
  background(128, 0, 64);
  noFill();

  stroke(255, 0, 0);

for (var x = 1; x <= 8; x++)
{
  ellipse(x * 70, x * 20 + 100, 50, 50);
}
}

  