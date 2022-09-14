import Logo from "./Logo";

type Props = {};

function Nav({}: Props) {
  return (
    <nav className="flex flex-row items-center justify-between w-full h-24">
      <div className="p-1 ml-4 rounded-md cursor-pointer hover:shadow-md">
        <Logo />
      </div>

      <ul className="flex mr-4 space-x-2 justify-evenly">
        <li className="font-mono text-xl">Home</li>
        <li className="font-mono text-xl">About</li>
        <li className="font-mono text-xl">Trending</li>
      </ul>
      <div></div>
    </nav>
  );
}

export default Nav;
