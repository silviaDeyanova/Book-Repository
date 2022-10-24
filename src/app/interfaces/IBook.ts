import { IComment } from './IComment';

export interface IBook {
  id: number;
  title: string;
  resume: string;
  // comments: IComment[];
  likes: number;
}
