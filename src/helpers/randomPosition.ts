import { Coordinate } from '../types/game';

export function randomPosition(maxX: number, maxY: number): Coordinate {
  return {
    x: Math.floor(Math.random() * maxX),
    y: Math.floor(Math.random() * maxY),
  };
}
