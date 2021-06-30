import { Post } from "../domain/Post";
import { limitTextLength } from "./presenters/limitTextLength";
import Image from "next/image";
import { postTypeToIcon } from "./presenters/postTypeToIcon";
import heartImg from "./assets/heart.svg";

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
}: Post): JSX.Element => {
  return (
    <div className="pb-4 pt-4">
      <div className="flex justify-between items-baseline">
        <h3 className="text-3xl">{title}</h3>
        <Image src={postTypeToIcon(postType)} alt="" className="w-10 h-auto" />
      </div>
      {body && (
        <p className="text-sm text-stone-800">{limitTextLength(body, 200)}</p>
      )}
      <div className="flex justify-between items-baseline pt-2">
        <div className="text-stone">{user}</div>
        <div className="flex space-x-2">
          <div className="w-4 flex items-center">
            <Image src={heartImg} alt="" />
          </div>
          <div>
            {likesAmount}
            <span className="sr-only"> likes</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostTeaser;
