import Avatar from "../../../components/avatar/Avatar";
import { useAuth } from "../../../hooks/useAuth";
import { usePosts } from "../../../hooks/usePosts";

const UserCard = () => {
  const {
    user: { username, name, surname, avatar },
  } = useAuth();

  const { userPosts } = usePosts();
  return (
    <div className="flex items-center gap-3 border-b border-gray-500 pb-10">
      <div>
        <div>{<Avatar size={150} avatar={avatar} />}</div>
        <h2 className="font-bold text-center">
          {name} {surname}
        </h2>
      </div>
      <div>
        <h2 className="font-bold">{username}</h2>
        <p>
          <strong>{userPosts.length}</strong> publicaciones
        </p>
      </div>
    </div>
  );
};

export default UserCard;
