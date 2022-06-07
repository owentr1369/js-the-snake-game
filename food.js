import { onSnake, expandSnake } from "./snake.js";
import { randomGridPostition } from "./grid.js";

let food = randomGridPostition();
const EXPANSION_RATE = 1;

export function update() {
  if (onSnake(food)) {
    expandSnake(EXPANSION_RATE);
    food = { x: 20, y: 10 };
  }
}

export function draw(gameBoard) {
  const foodElement = document.createElement("div");

  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add("food");

  gameBoard.appendChild(foodElement);
}

function getRandomFoodPosition() {
  let newFoodPostion;

  while (newFoodPostion == null || onSnake(newFoodPostion)) {
    newFoodPostion = randomGridPostition();
  }
  return newFoodPostion;
}
