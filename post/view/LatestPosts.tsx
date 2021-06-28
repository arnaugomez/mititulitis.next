import { usePostsStore } from "../domain/usePostsStore";
import { useEffect } from "react";
const LatestPosts = (): JSX.Element => {
  const { latestPosts, getLatestPosts } = usePostsStore();

  useEffect(() => {
    void getLatestPosts();
  }, [getLatestPosts]);
  console.log(latestPosts);

  if (latestPosts) {
    return (
      <ul>
        {latestPosts.map(({ title }) => (
          <li key={title}>{title}</li>
        ))}
        <button onClick={getLatestPosts}>Update posts</button>
      </ul>
    );
  } else {
    return <h2>Loading...</h2>;
  }
};

export default LatestPosts;
