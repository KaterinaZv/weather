import { Coord } from './coord';

export type City = {
  id: number;
  name: string;
  state: string;
  country: string;
  coord: Coord;
};
