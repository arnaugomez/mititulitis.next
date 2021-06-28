import { Post } from "../domain/Post";

export function toPostDomain(data: any): Post {
  return {
    title: data.title,
    body: data.body,
    created: new Date(data.created),
    id: parseInt(data.id),
    likesAmount: parseInt(data.likes_amount),
    link: data.link,
    postType: data.post_type,
    remixedFrom: parseInt(data.remixed_from) || undefined,
    slug: data.slug,
    tags: data.tags.map(parseInt),
    user: parseInt(data.user),
  };
}
