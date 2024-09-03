import UserCard from "./components/UserCard";
import Header from "./components/Header";
import PostForm from "./components/PostForm";
import PostItem from "../../components/postItem/PostItem";
import { usePosts } from "../../hooks/usePosts";

const Feed = () => {
  const { posts } = usePosts();

  return (
    <div className=" bg-slate-100">
      <Header />

      <div className="flex">
        <div className="w-8/12 p-6 h-screen overflow-y-scroll">
          <PostForm />
          <div className="flex flex-col py-5 gap-5">
            {posts.map((post, index) => (
              <PostItem key={index} post={post} />
            ))}
          </div>
        </div>
        <div className="w-4/12 p-6">
          <UserCard />
        </div>
      </div>
    </div>
  );
};

export default Feed;
