import { Post } from "../domain/Post";

export interface IPostsRepository {
  getLatestPosts(): Promise<Post[]>;
}
