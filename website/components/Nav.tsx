import { FaGithub, FaSun } from "react-icons/fa";
import { useTheme } from "next-themes";

export default function Nav() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="sticky w-screen">
      <nav className="p-3 px-5 flex justify-between object-center">
        <div>
          <a
            href="https://github.com/eilla1/CodeDay-GitHubWorkshop"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-500"
          >
            <FaGithub size={30} className="text-right dark:text-white" />
          </a>
        </div>
        <div className="order-last">
          <button
            onClick={() => {
              setTheme(theme === "dark" ? "light" : "dark");
              document
                .querySelector("#theme_toggle")
                .classList.toggle("rotate-180");
            }}
            className="p-2 rounded-full hover:bg-black dark:hover:bg-white hover:bg-opacity-10 dark:hover:bg-opacity-10 transform duration-200"
            id="theme_toggle"
          >
            <FaSun size={30} />
          </button>
        </div>
      </nav>
      <nav className="p-3px-5  dark:text-white static object-center">
        <div className="object-center mb-8">
          <a
            href="https://github.com/eilla1/CodeDay-GitHubWorkshop"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-500"
          >
            <h1 className="text-center sm:text-6xl font-semibold text-5xl">Hackathon Name</h1>
            <h2 className="text-center text-2xl">Introduction to git</h2>
          </a>
        </div>
      </nav>
    </div>
  );
}
