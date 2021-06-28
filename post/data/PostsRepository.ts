import { IPostsRepository } from "./IPostsRepository";
import { axiosClient } from "../../common/data/axiosClient";
import { Post } from "../domain/Post";
import { toPostDomain } from "./toPostDomain";

class PostsRepository implements IPostsRepository {
  async getLatestPosts(): Promise<Post[]> {
    return (await axiosClient.get("posts/latest/")).data.map(toPostDomain);
  }
}

export default new PostsRepository();
