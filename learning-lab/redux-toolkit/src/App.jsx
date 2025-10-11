import { Provider } from "react-redux";
import store from "./features/store";
import CakeContainer from "./components/CakeContainer";
import MilkContainer from "./components/MilkContainer";
import UsersList from "./components/UsersList";
// import UsersList from "./components/UsersList";

function App() {
  return (
    <Provider store={store}>
      <div className="w-screen h-screen flex flex-col justify-center items-center ">
        <CakeContainer />
        <div className="h-10"></div>
        <MilkContainer />
        <div className="h-10"></div>
        <UsersList />
      </div>
    </Provider>
  );
}

export default App;

//? store : cake =>
// 1. store
// 2. action
// 3. reducer
