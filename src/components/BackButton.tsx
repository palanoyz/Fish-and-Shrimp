import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { ReactNode } from "react";

interface BackButtonProps {
  href: string;
  children?: ReactNode;
}

export default function BackButton({ href, children }: BackButtonProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white font-semibold hover:bg-white/30 transition-colors duration-200 text-xl"
    >
      <FaArrowLeft />
      <span className="hidden sm:inline">{children || "Back to Home"}</span>
    </Link>
  );
} 