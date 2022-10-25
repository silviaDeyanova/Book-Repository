import { IComment } from './IComment';

export interface IBook {
  id: number;
  title: string;
  author: string;
  resume: string;
  comments?: IComment[];
  likes: number;
  cover?: string;
}
