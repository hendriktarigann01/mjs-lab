import Link from "next/link";
import { Play } from "lucide-react";

interface DemoButtonProps {
  link: string;
}

export default function DemoButton({ link }: DemoButtonProps) {
  return (
    <Link href={link} target="_blank">
      <button className="inline-flex items-center justify-center p-2 md:p-3 bg-brand-primary text-white rounded-full hover:bg-brand-secondary">
        <Play className="w-3 h-3 md:w-5 md:h-5" />
      </button>
    </Link>
  );
}
