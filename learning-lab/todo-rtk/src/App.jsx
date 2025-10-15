import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import { Provider } from "react-redux";
import store from "./features/store";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className=" container flex flex-col justify-center items-start max-w-screen p-5 gap-4">
        <h2 className="text-center font-bold text-2xl py-4 bgred5">
          Wellcome Todo App
        </h2>
        <AddTodoForm />
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
