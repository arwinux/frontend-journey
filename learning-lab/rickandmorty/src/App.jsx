import "./App.css";
import Navbar, {
  Favourites,
  Search,
  SearchResult,
} from "./assets/components/Navbar";
import CharacterList from "./assets/components/CharacterList";
import CharacterDetail from "./assets/components/CharacterDetail";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import Modal from "./assets/components/Modal";
import useCharacters from "./hooks/useCharacters";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [query, setQuery] = useState("");
  const { isLoading, characters } = useCharacters(
    "https://rickandmortyapi.com/api/character?name",
    query
  );

  const [selectedId, setSelectedId] = useState(null);

  const [favourites, setFavourites] = useLocalStorage("FAVOURITES", []);
  const [count, setCount] = useState(0);

  // fetch api, timer, access to DOM, ... =>
  // effect : 1. event handler function 2.useEffect
  // --------------------------------------------------

  // dependency array : role ? => when to run effect function
  // 1. useEffect(() => {}) => on every
  // 2. useEffect(() => {}, []) => on mount
  // 3. useEffect(() => {}, [state, porps]) => dep. array changes => run effect function
  // --------------------------------------------------

  //! -----------------------------------------

  useEffect(() => {
    const interval = setInterval(() => setCount((c) => c + 1), 1000);

    //? clean up function:
    return () => {
      clearInterval(interval);
    };
  }, [count]);

  /*
  ? clean up function
  * what ?
      todo : 1. prevents memory leak
      todo : 2. removes unnecessary and unwanted behaviors  
      
  * why to use ?
      todo: ///

  * when run ?
      todo : 1. unmount component
      todo : 2. before the next re-render (between re-renders) 

  * where to use ?
      * effect => 
      todo: 1. affter unmount or
      todo: 2. while re-rendering

  * example :
      todo: fetch API
      todo: timer
      todo: eventListener
  */

  //! -----------------------------------------

  const handleSelectCharacter = (id) => {
    setSelectedId((prevId) => (prevId === id ? null : id));
  };

  const handleAddFavourtie = (char) => {
    setFavourites((prevFav) => [...prevFav, char]);
  };

  const handleDeleteFavourite = (id) => {
    setFavourites((prevFav) => prevFav.filter((fav) => fav.id !== id));
  };

  const isAddedToFavourite = favourites
    .map((fav) => fav.id)
    .includes(selectedId);

  return (
    <div className="app">
      {/* <div style={{ color: "#fff" }}>{count}</div> */}
      <Toaster />
      {/* <Modal title="modal test" open={true}>
        This is test
      </Modal> */}
      <Navbar>
        <Search query={query} setQuery={setQuery}></Search>
        <SearchResult numOfResult={characters.length} />
        <Favourites
          favourites={favourites}
          onDeleteFavourite={handleDeleteFavourite}
        />
      </Navbar>
      <div className="main">
        <CharacterList
          selectedId={selectedId}
          characters={characters}
          isloading={isLoading}
          onSelectCharacter={handleSelectCharacter}
        />
        <CharacterDetail
          selectedId={selectedId}
          onAddFavourtie={handleAddFavourtie}
          isAddedToFavourite={isAddedToFavourite}
        />
      </div>
    </div>
  );
}

export default App;
