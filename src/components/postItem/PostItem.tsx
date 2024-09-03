import { Post } from "../../interfaces/Post";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import Avatar from "../avatar/Avatar";
import { useAuth } from "../../hooks/useAuth";
import { usePosts } from "../../hooks/usePosts";

const PostItem = ({ post }: { post: Post }) => {
  const { author, image, likes, message, create_at, location, status } = post;

  const { user: authUser } = useAuth();

  const { handleUpdatePost } = usePosts();

  const handleLike = () => {
    if (likes) {
      if (likes.filter((user) => user.username !== authUser.username)) {
        handleUpdatePost({
          image,
          author,
          likes: [...likes, authUser],
          message,
          create_at,
          location,
          status,
        });
      }
    }
  };

  const likeIcon = () =>
    likes?.length === 0 ? (
      <button className="hover:cursor-pointer" onClick={handleLike}>
        <IoMdHeartEmpty className="text-lg" />
      </button>
    ) : (
      <div className="flex gap-3">
        <IoMdHeart className="text-lg text-red-500" />
        {likes && (
          <p>
            Le gusta a <strong>{likes[0].username}</strong>{" "}
            {likes.length > 1 &&
              `y
          ${(<strong>{likes?.length - 1} mas</strong>)}`}
          </p>
        )}
      </div>
    );

  return (
    <div className="bg-white">
      <div className="flex gap-3 items-center p-2">
        <Avatar size={70} avatar={author.avatar} />
        <h3 className="font-bold">{author.username}</h3>
      </div>

      {image !== "" ? (
        <div>
          <div>
            <img src={image} alt="" />
          </div>
          <div className="p-2">{likeIcon()}</div>
          <p className="p-2">{message}</p>
        </div>
      ) : (
        <div className="p-2">
          <p>{message}</p>
          <div>{likeIcon()}</div>
        </div>
      )}
    </div>
  );
};

export default PostItem;
