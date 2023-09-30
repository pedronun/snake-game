import { Coordinate } from "../types/game";

interface ICheckGameIsOverProps {
  head: Coordinate;
  area: { xMin: number; xMax: number; yMin: number; yMax: number };
}

export function checkGameIsOver({ head, area }: ICheckGameIsOverProps): boolean {
  return (
    head.x < area.xMin ||
    head.x > area.xMax ||
    head.y < area.yMin ||
    head.y > area.yMax
  );
}
