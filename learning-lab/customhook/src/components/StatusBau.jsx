import { useOnlineStatus } from "../hooks/useOnlineStatus";

function StatusBar() {
  const isOnline = useOnlineStatus();

  return (
    <div>
      <div
        className={`text-2xl font-bold ${
          isOnline ? "bg-lime-400" : "bg-red-500"
        } px-2 rounded-lg border-4`}
      >
        {isOnline ? "Online" : "Offline"}
      </div>
    </div>
  );
}

export default StatusBar;
