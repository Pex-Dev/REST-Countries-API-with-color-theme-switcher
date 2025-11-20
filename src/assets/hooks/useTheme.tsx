import { useEffect, useState } from "react";

export default function useTheme() {
  const initialTheme = () => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark" ? "dark" : "light";
  };
  const [theme, setTheme] = useState<"light" | "dark">(initialTheme());

  const updateTheme = (newTheme: "light" | "dark") => {
    localStorage.setItem("theme", newTheme);

    const body = document.body;
    newTheme === "dark"
      ? body.classList.add("dark")
      : body.classList.remove("dark");
  };

  useEffect(() => {
    updateTheme(theme);
  }, [theme]);

  return { theme, setTheme };
}
