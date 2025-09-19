import React, { useEffect, useState } from "react";
import HerosList from "./components/HerosList";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { ScaleLoader } from "react-spinners";

function App() {
  const [heros, setHeros] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          "https://akabab.github.io/superhero-api/api/all.json"
        );
        setHeros(data);
      } catch (err) {
        toast.error(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  // event handler function => effect
  // useEffect =>

  // then catch => async await. ???
  // async function test(){}
  // async ()=>{}

  // const loadHeros = () => {
  //   fetch("https://akabab.github.io/superhero-api/api/all.json")
  //     .then((res) => res.json())
  //     .then((data) => setHeros(data.slice(200, 299)));
  // };

  //? dependency array when to run effect function :
  //^ 1. useEffect(()=>{}) => on every renders
  //^ 2. useEffect(()=>{}, []) => on mount
  //^ 2. useEffect(()=>{}, [state, props]) => dep. array changes

  //& when this useEffect runs. ?!

  //* state => changes => re-render => browser paint
  //* state => changes => run effect function => setState !!! => re-render

  return (
    <div className="flex w-full flex-col gap-4 items-center justify-center p-5">
      <Toaster />
      <p className="text-2xl font-bold bg-blue-700 text-white px-2 py-1 rounded-lg ">
        Heros Here
      </p>

      <button className="bg-amber-500 px-2 font-semibold text-lg rounded-lg cursor-pointer">
        Load Heros | Click
      </button>
      <ScaleLoader
        color="#0011ff"
        loading={isLoading}
        width={20}
        height={100}
      />
      {!isLoading ? (
        <div className="flex flex-col gap-4 bg-cyan-700 rounded-2xl justify-center p-5">
          <HerosList heros={heros} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
