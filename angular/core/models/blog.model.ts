import { User } from "./user.model";
import { Topic } from "./topic.model";
export class Blog {
  id: number = 0;
  blogHeader: string = "";
  blogInfo: string = "";
  blogDetail: string = "";
  blogImage: string = "";
  blogLike: number = 0;
  blogView: number = 0;
  blogPopularity: number = 0;
  userId: number = 0;
  topicId: number = 0;
  user?: User;
  topic?: Topic;
}
