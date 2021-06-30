import { usePostsStore } from "../domain/usePostsStore";
import { useEffect } from "react";
import PostTeaser from "./PostTeaser";

const LatestPosts = (): JSX.Element => {
  const { latestPosts, getLatestPosts } = usePostsStore();

  useEffect(() => {
    void getLatestPosts();
  }, [getLatestPosts]);
  console.log(latestPosts);

  if (latestPosts) {
    return (
      <section className="px-5 space-y-4">
        <div className="px-4 flex items-baseline">
          <h2 className="text-stone-800 mt-0 text-2xl">Latest posts</h2>
          {/*TODO: add share icons*/}
        </div>
        <ul className="border border-stone-400 bg-stone-50 rounded-xl px-4 divide-y divide-stone-400">
          {latestPosts.map((post) => (
            <li key={post.title}>
              <PostTeaser {...post} />
            </li>
          ))}
        </ul>
      </section>
    );
  } else {
    return <h2>Loading...</h2>;
  }
};

export default LatestPosts;
