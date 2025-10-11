import { useDispatch, useSelector } from "react-redux";
import { buyMilk } from "../features/milk/milkSlice";

function MilkContainer() {
  const state = useSelector((state) => state.milk);

  const dispatch = useDispatch();

  console.log(state);
  return (
    <div className="flex flex-col justify-center">
      <h2 className="text-2xl font-bold bg-orange-500 px-2 rounded-2xl mb-2">
        Milk Number : {state.numOfMilks}
      </h2>

      <button
        onClick={() => dispatch(buyMilk(5))}
        className="px-2 bg-blue-500 transition-all hover:bg-blue-600 cursor-pointer text-white font-bold rounded-2xl"
      >
        Buy Cake
      </button>
    </div>
  );
}

export default MilkContainer;
