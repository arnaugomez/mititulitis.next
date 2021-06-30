import bookIcon from "../assets/book.svg";
import helpIcon from "../assets/help.svg";
import linkIcon from "../assets/link.svg";
import { PostType } from "../../domain/Post";

const postTypeMap = {
  TUTORIAL: bookIcon,
  QUESTION: helpIcon,
  LINK: linkIcon,
};

export const postTypeToIcon = (postType: PostType): typeof bookIcon =>
  postTypeMap[postType];
