import { useState, type ReactNode } from "react";

interface CollapsibleProps {
  title: string;
  children: ReactNode;
}

export default function Collapsible({ title, children }: CollapsibleProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border rounded-xl  bg-white shadow-sm">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justif-between item-centre px-4 py-3 text-left"
      >
        <span className="font-medium">{title}</span>
        <span className="text-sm">{open ? "-" : "+"} </span>
      </button>
      <div
        className={`tansition-all duration-300 overflow-hidden ${
          open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pb-4 text-sm text-gray-700">{children}</div>
      </div>
    </div>
  );
}
