import { Coordinate } from '../types/game';

export function randomPosition(maxX: number, maxY: number, snake?: Coordinate[]): Coordinate {
  const newPosition = {
    x: Math.floor(Math.random() * maxX),
    y: Math.floor(Math.random() * maxY),
  }

  return snake?.some((part) => part.x === newPosition.x && part.y === newPosition.y)
    ? randomPosition(maxX, maxY, snake)
    : newPosition;
}
