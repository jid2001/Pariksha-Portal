import { Category } from './category';
export class Quiz {
  id:any;
  title: any;
  description: any;
  maxMarks: any;
  noOfQuestion: any;
  active: any;
  category: Category = new Category();
}