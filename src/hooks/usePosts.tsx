import { Post } from "../interfaces/Post";
import { addPost, updatePost } from "../store/features/posts/postsSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";

export const usePosts = () => {
  const posts = useAppSelector((state) => state.posts.posts);
  const user = useAppSelector((state) => state.auth.user);

  const dispatch = useAppDispatch();

  const userPosts = posts.filter(
    (post) => post.author.username === user.username
  );

  const submitPost = (post: Post) => {
    dispatch(addPost(post));
  };

  const handleUpdatePost = (post: Post) => {
    dispatch(updatePost(post));
  };

  return { posts, user, submitPost, userPosts, handleUpdatePost };
};
