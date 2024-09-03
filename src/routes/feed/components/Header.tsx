import { MdOutlineSearch } from "react-icons/md";

const Header = () => {
  return (
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
  );
};

export default Header;
