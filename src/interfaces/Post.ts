import { User } from "./User";

export enum PostStatus {
  DRAFTED = 'drafted',
  PUBLISHED = 'published',
  DELETED = 'deleted'
}
export interface Post {
  image?: string;
  message: string;
  likes?: Array<User>;
  author: User;
  create_at: Date;
  location: string;
  status: PostStatus;
  }