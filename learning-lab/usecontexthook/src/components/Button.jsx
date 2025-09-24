import { useTheme } from "../context/ThemeContext";

export default function Button({ children }) {
  //? 3. consume provider value via useContext
  const { theme, setTheme } = useTheme();
  const className = "button-" + theme;
  return <button className={className}>{children}</button>;
}
