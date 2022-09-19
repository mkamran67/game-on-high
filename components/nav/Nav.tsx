import Logo from "./Logo";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";
import Link from "next/link";

type Props = {};

function Nav({}: Props) {
  const router = useRouter();

  return (
    <nav className="flex flex-row items-center justify-between w-full h-24">
      <div className="p-1 ml-12 rounded-md cursor-pointer hover:shadow-md" onClick={() => router.push("/")}>
        <Logo />
      </div>

      <ul className="flex mr-4 space-x-6 justify-evenly">
        <li className="font-mono text-xl transition-all duration-300 border-b-2 cursor-pointer border-b-white hover:border-black">
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li className="font-mono text-xl transition-all duration-300 border-b-2 cursor-pointer border-b-white hover:border-black">
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li className="font-mono text-xl transition-all duration-300 border-b-2 cursor-pointer border-b-white hover:border-black">
          <Link href="/trending">
            <a>Trending</a>
          </Link>
        </li>
      </ul>
      <div className="mr-12">
        <UserCircleIcon className="w-16 h-16 text-green-500 rounded-full cursor-pointer hover:shadow-lg" />
      </div>
    </nav>
  );
}

export default Nav;
