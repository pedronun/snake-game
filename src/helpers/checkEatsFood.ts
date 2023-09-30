import { Coordinate } from "../types/game";

export function checkEatsFood(
  head: Coordinate,
  food: Coordinate,
  area: number
): boolean {
  const distanceFoodY = Math.abs(head.y - food.y);
  const distanceFoodX = Math.abs(head.x - food.x);

  return distanceFoodY < area && distanceFoodX < area;
}
