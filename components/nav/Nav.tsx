import Logo from "./Logo";
import { UserCircleIcon } from "@heroicons/react/24/solid";

type Props = {};

function Nav({}: Props) {
  return (
    <nav className="flex flex-row items-center justify-between w-full h-24">
      <div className="p-1 ml-12 rounded-md cursor-pointer hover:shadow-md">
        <Logo />
      </div>

      <ul className="flex mr-4 space-x-4 justify-evenly">
        <li className="font-mono text-xl transition-all duration-300 border-b-2 cursor-pointer border-b-white hover:border-black">
          Home
        </li>
        <li className="font-mono text-xl transition-all duration-300 border-b-2 cursor-pointer border-b-white hover:border-black">
          About
        </li>
        <li className="font-mono text-xl transition-all duration-300 border-b-2 cursor-pointer border-b-white hover:border-black">
          Trending
        </li>
      </ul>
      <div className="mr-12">
        <UserCircleIcon className="w-16 h-16 text-green-400 rounded-full cursor-pointer hover:shadow-lg" />
      </div>
    </nav>
  );
}

export default Nav;
