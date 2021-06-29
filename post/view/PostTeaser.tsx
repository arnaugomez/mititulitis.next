import { Post } from "../domain/Post";
import { limitTextLength } from "./presenters/limitTextLength";

const PostTeaser = ({
  tags,
  slug,
  postType,
  link,
  likesAmount,
  id,
  created,
  body,
  title,
  remixedFrom,
  user,
}: Post): JSX.Element => (
  <div className="pb-4 pt-4">
    <h3 className="text-3xl">{title}</h3>
    <p className="">{limitTextLength(body, 200)}</p>
  </div>
);

export default PostTeaser;
