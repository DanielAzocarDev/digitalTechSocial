import { MdOutlineSearch } from "react-icons/md";
import UserCard from "./components/UserCard";

const Feed = () => {
  return (
    <div className="h-screen bg-slate-100">
      <div className="flex items-center gap-8 border-b py-3 px-6">
        <h2 className="text-2xl text-gray-300 font-black">Digital Tech Inc</h2>
        <div className="flex items-center gap-1 bg-gray-100 border border-purple-400 py-2 px-5 rounded-sm">
          <MdOutlineSearch />

          <input
            className="bg-transparent placeholder:text-zinc-600 placeholder:font-semibold focus:outline-none"
            type="text"
            name="searchbar"
            id="searchbar"
            placeholder="buscar"
          />
        </div>
      </div>

      <div className="flex">
        <div className="w-8/12 p-6 h-screen border">
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
