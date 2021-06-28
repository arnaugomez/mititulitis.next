import { useCallback, useState } from "react";
import { Post } from "./Post";
import PostsRepository from "../data/PostsRepository";

export function usePostsStore() {
  const [latestPosts, setLatestPosts] = useState<Post[]>([]);

  const getLatestPosts = useCallback(async () => {
    setLatestPosts(await PostsRepository.getLatestPosts());
  }, []);

  return { latestPosts, getLatestPosts };
}
