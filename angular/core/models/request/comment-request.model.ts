export interface CommentRequest {
  commentHeader: string;
  commentDetail: string;
  commentLike: number;
  commentPopularity: number;
  userId: number;
  blogId: number;
}
