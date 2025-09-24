import "./App.css";
import Form from "./components/Form";
import { ThemeProvider, useTheme } from "./context/ThemeContext";

//? 1. create context:

export default function MyApp() {
  return (
    //? 2. provide data to context.provider => ??? => value props
    <ThemeProvider>
      <div>
        <Form />
        <ToggleTheme />
      </div>
    </ThemeProvider>
  );
}

function ToggleTheme() {
  const { theme, setTheme } = useTheme();
  return (
    <label>
      <input
        type="checkbox"
        checked={theme === "dark"}
        onChange={(e) => {
          setTheme(e.target.checked ? "dark" : "light");
        }}
      />
      Use dark mode
    </label>
  );
}
