/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  BookmarkSquareIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  LifebuoyIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import dynamic from "next/dynamic";
import BlogSection from "../components/BlogSection";

const features = [
  {
    name: "Analytics",
    href: "#",
    description: "Get a better understanding of where your traffic is coming from.",
    icon: ChartBarIcon,
  },
  {
    name: "Engagement",
    href: "#",
    description: "Speak directly to your customers in a more meaningful way.",
    icon: CursorArrowRaysIcon,
  },
  { name: "Security", href: "#", description: "Your customers' data will be safe and secure.", icon: ShieldCheckIcon },
  {
    name: "Integrations",
    href: "#",
    description: "Connect with third-party tools that you're already using.",
    icon: Squares2X2Icon,
  },
  {
    name: "Automations",
    href: "#",
    description: "Build strategic funnels that will drive your customers to convert",
    icon: ArrowPathIcon,
  },
];
const callsToAction = [
  { name: "Watch Demo", href: "#", icon: PlayIcon },
  { name: "Contact Sales", href: "#", icon: PhoneIcon },
];
const resources = [
  {
    name: "Help Center",
    description: "Get all of your questions answered in our forums or contact support.",
    href: "#",
    icon: LifebuoyIcon,
  },
  {
    name: "Guides",
    description: "Learn how to maximize our platform to get the most out of it.",
    href: "#",
    icon: BookmarkSquareIcon,
  },
  {
    name: "Events",
    description: "See what meet-ups and other events we might be planning near you.",
    href: "#",
    icon: CalendarIcon,
  },
  { name: "Security", description: "Understand how we take your privacy seriously.", href: "#", icon: ShieldCheckIcon },
];
const recentPosts = [
  { id: 1, name: "Boost your conversion rate", href: "#" },
  { id: 2, name: "How to use search engine optimization to drive traffic to your site", href: "#" },
  { id: 3, name: "Improve your customer experience", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  let darkMode = false;

  // Check if window object exists aka is this the server or the client.
  if (typeof window !== "undefined") {
    darkMode = document.getElementsByTagName("html")[0].className === "dark" ? true : false; // true if dark mode is enabled.
  }

  return (
    <div className="relative bg-gray-50">
      <main className="lg:relative">
        <div className="w-full pt-16 pb-20 mx-auto text-center max-w-7xl lg:py-48 lg:text-left">
          <div className="px-4 sm:px-8 lg:w-1/2 xl:pr-16">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">
                Game reviews
                {/* <p className="ml-12 text-2xl">and</p> */}
                <p></p>
              </span>
              <span className="block text-green-500 xl:inline">Weed reviews</span>
            </h1>
            <p className="max-w-md mx-auto mt-3 text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
              Gather your favorite entertainment into one hub and find the best ways to get lit.
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a
                  href="/signup"
                  className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-green-500 border border-transparent rounded-md hover:bg-green-700 md:py-4 md:px-10 md:text-lg"
                >
                  Get started
                </a>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a
                  href="/trending"
                  className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-green-500 bg-white border border-transparent rounded-md hover:bg-gray-50 md:py-4 md:px-10 md:text-lg"
                >
                  Reviews
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
          <img
            className="absolute inset-0 object-cover w-full h-full"
            src="https://images.unsplash.com/photo-1536795335207-28f63e2352f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            alt=""
          />
        </div>
      </main>
      <section>
        <BlogSection />
      </section>
    </div>
  );
}
