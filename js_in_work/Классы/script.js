'use strict';

class Rectangle {
   constructor(height, width){
      this.height = height;
      this.width = width;
   }

   calcArea(){
      return this.height * this.width;
   }
} 

class ColoredRectangleWidthText extends Rectangle {
   constructor(height, width, text, bgColor){
      super(height, width);
      this.text = text;
      this.bgColor = bgColor;
   }

   showMyProps(){
      console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
   }
}

const div = new ColoredRectangleWidthText(25,10, 'Hello world', 'red');

console.log(div.calcArea());

//const square = new Rectangle(10, 10);

//console.log(square.calcArea());