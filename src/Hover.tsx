import { useState } from "react";
import { motion } from "framer-motion";

const tabs = [
  { id: 1, text: "Dashboard" },
  { id: 2, text: "Info" },
  { id: 3, text: "Settings" },
];

export function Hover() {
  const [activeTab, setActiveTab] = useState<number>(tabs[0].id);

  return (
    <nav className="space-x-2">
      {tabs.map((tab) => (
        <button
          onMouseOver={() => setActiveTab(tab.id)}
          key={tab.id}
          type="button"
          className="transition relative rounded-sm px-2 py-1 text-sm text-white"
        >
          {activeTab === tab.id && (
            <motion.span
              layoutId="hover-pill"
              className="absolute inset-0 z-10 bg-white mix-blend-exclusion"
              style={{ borderRadius: 4 }}
              transition={{ type: "spring", duration: 0.6 }}
            ></motion.span>
          )}
          {tab.text}
        </button>
      ))}
    </nav>
  );
}
