import { Coordinate } from "../types/game";

interface ICheckSelfCollision {
  head: Coordinate;
  rest: Coordinate[];
}

export function checkSelfCollision({ head, rest }: ICheckSelfCollision) {
  return rest.some(({ x, y }) => x === head.x && y === head.y);
}