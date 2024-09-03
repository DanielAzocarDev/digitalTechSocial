import UserCard from "./components/UserCard";
import Header from "./components/Header";

const Feed = () => {
  return (
    <div className="h-screen bg-slate-100">
      <Header />

      <div className="flex">
        <div className="w-8/12 p-6 h-screen">
          <div className="bg-white h-60 border"></div>
        </div>
        <div className="w-4/12 p-6">
          <UserCard />
        </div>
      </div>
    </div>
  );
};

export default Feed;
