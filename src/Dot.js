export default class Dot {
  // Step 1 : analyze the code of the constructor
  constructor(containerElement, color, size) {
    this.color = color;
    this.size = size;
    this.containerElement = containerElement;

    this.element = document.createElement("div");
    this.element.style.position = "absolute";
    this.element.style.zIndex = 1000;
    this.element.style.cursor = "move";

    this.containerElement.appendChild(this.element);

    if (color === undefined && size === undefined) {
      this.color = this.randomColor();
      this.size = this.random(5, 100);
      this.move(this.random(0, 400), this.random(0, 300));
      this.setRadius(this.random(0, 50));
    } else {
      this.move(0, 0);
      this.setRadius(0);
    }
    this.setSize(this.size);
    this.setColor(this.color);
  }

  // Step 2 : Analyze the code of the move method
  move(x, y) {
    // Step 5 : Adapt the move() method so that the element never leaves the frame
    if (x + this.size > 400) x = 400 - this.size;
    if (x < 0) x = 0;
    this.x = x;
    this.element.style.left = x + "px";

    this.y = y + this.size > 300 ? 300 - this.size : y < 0 ? 0 : y;
    this.element.style.top = this.y + "px";
  }

  setSize(size) {
    this.size = size;
    this.element.style.width = size + "px";
    this.element.style.height = size + "px";
  }

  setColor(color) {
    this.color = color;
    this.element.style.backgroundColor = color;
  }

  // Step 3: Complete the setRadius method.
  setRadius(radius) {
    this.element.style.borderRadius =
      ((radius < 0 ? 0 : radius) || (radius > 50 ? 50 : radius)) + "%";
  }

  random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  randomColor() {
    // rgb
    return `rgb(${this.random(0, 255)}, ${this.random(0, 255)}, ${this.random(
      0,
      255
    )})`;
    // Hexadecimal
    // return "#" + (((1 << 24) * Math.random()) | 0).toString(16);
  }
}
