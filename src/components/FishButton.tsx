import { FaFish } from "react-icons/fa";

export default function FishButton() {
  return (
    <button
      className="flex items-center gap-2 px-6 py-3 bg-blue-200 border-2 border-blue-400 rounded-full text-blue-900 font-bold text-xl shadow-md transition-transform duration-200 hover:scale-110 hover:bg-blue-300 hover:shadow-lg cursor-pointer"
    >
      <FaFish className="text-2xl" />
      <span>Remove fish scales</span>
    </button>
  );
}
