import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function EmptyState({ icon, title, description }) {
  const { dispatch } = useContext(AppContext);
  return (
    <div className="flex flex-col items-center justify-center h-[60vh] text-center max-w-md mx-auto">
      <div className="mb-6 animate-bounce-slow">{icon}</div>
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-gray-500 mb-8">{description}</p>
      <button
        onClick={() => dispatch({ type: "SET_VIEW", payload: "practice" })}
        className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
      >
        Start Practicing
      </button>
    </div>
  );
}
