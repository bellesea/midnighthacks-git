import { FaSun } from "react-icons/fa";
import { useTheme } from "next-themes";

export default function Footer() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="pb-4 w-full text-center">
      <div>
        <div>
          <p className="p-2">
            Modified from {" "}
            <a
              href="https://github.com/eilla1/GitHub-Workshop"
              className="text-blue-400 underline"
            >
              ella's git exercise
            </a>
            &#x2665;
          </p>
        </div>
      </div>
    </div>
  );
}
