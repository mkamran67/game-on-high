import Logo from "./Logo";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";
import Link from "next/link";

type Props = {};

function Nav({}: Props) {
  const router = useRouter();

  return (
    <nav className="flex flex-row items-center justify-between w-full h-24 border-b">
      {/* Logo */}
      <div className="p-1 ml-12 rounded-md cursor-pointer hover:shadow-md" onClick={() => router.push("/")}>
        <Logo />
      </div>
      {/* Center Nav */}
      <ul className="flex space-x-6 justify-evenly">
        <li className="font-mono text-xl transition-all duration-300 border-b-2 cursor-pointer border-b-white hover:border-black">
          <Link href="/">
            <a>
              {/* <span className="text-xs">1.</span>Home */}
              Home
            </a>
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
      {/* Right Side */}
      <div className="grid max-w-xs grid-cols-2 gap-4 mr-12">
        {/* <UserCircleIcon className="w-16 h-16 text-green-500 rounded-full cursor-pointer hover:shadow-lg" /> */}
        {/* <div className="mt-6"> */}

        <Link href="/login">
          <a className="px-4 py-2 my-auto text-center text-green-500 rounded-md cursor-pointer hover:text-green-700 hover:shadow-md">
            Sign in
          </a>
        </Link>
        <Link href="/signup   w">
          <a className="flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white bg-green-500 border border-transparent rounded-md shadow-sm hover:bg-green-700">
            Sign up
          </a>
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
