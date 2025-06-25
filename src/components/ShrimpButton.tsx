import { FaShrimp } from "react-icons/fa6";
import Link from "next/link";

export default function ShrimpButton() {
  return (
    <Link href="/shrimp">
      <button
        className="flex items-center gap-2 px-6 py-3 bg-orange-200 border-2 border-orange-400 rounded-full text-orange-900 font-bold text-xl shadow-md transition-transform duration-200 hover:scale-110 hover:bg-orange-300 hover:shadow-lg cursor-pointer"
      >
        <FaShrimp className="text-2xl" />
        <span>Peel the shrimp</span>
      </button>
    </Link>
  );
}
