export enum PostType {
  TUTORIAL = "Tutorial",
  QUESTION = "Question",
  LINK = "Link",
}

export interface Post {
  id: number;
  likesAmount: number;
  title: string;
  slug: string;
  link: string;
  postType: PostType;
  body: string;
  created: Date;
  user: number;
  remixedFrom?: number;
  tags: number[];
}
