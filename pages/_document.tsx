import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  // if (typeof window !== "undefined") {
  //   if (
  //     (localStorage && localStorage.theme === "dark") ||
  //     (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
  //   ) {
  //     document.documentElement.classList.add("dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //   }
  // }

  // Whenever the user explicitly chooses light mode
  // localStorage.theme = "light";

  // Whenever the user explicitly chooses dark mode
  // localStorage.theme = "dark";

  // Whenever the user explicitly chooses to respect the OS preference
  // localStorage.removeItem("theme");

  return (
    <Html className="dark">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
