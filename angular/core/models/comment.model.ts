import { User } from "./user.model";
import { Blog } from "./blog.model";
export class Comment {
  id: number = 0;
  commentHeader: string = "";
  commentDetail: string = "";
  commentLike: number = 0;
  commentPopularity: number = 0;
  userId: number = 0;
  blogId: number = 0;
  user?: User;
  blog?: Blog;
}
