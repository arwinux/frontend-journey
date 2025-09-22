import { useOnlineStatus } from "../hooks/useOnlineStatus";

function SaveButton() {
  const isOnline = useOnlineStatus();

  const handleSaveClick = () => {
    console.log("✅ Progress saved");
  };

  return (
    <div>
      <button
        disabled={!isOnline}
        onClick={handleSaveClick}
        className="bg-sky-400 font-semibold text-2xl px-2 rounded-lg cursor-pointer hover:bg-sky-500 duration-300"
      >
        Save Progress
      </button>
    </div>
  );
}

export default SaveButton;
