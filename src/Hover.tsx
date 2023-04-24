import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const tabs = [
  { id: 1, text: "Dashboard" },
  { id: 2, text: "Info" },
  { id: 3, text: "Settings" },
];

export function Hover() {
  const [hoveredTab, setHoveredTab] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <nav className="space-x-2">
      {tabs.map((tab) => (
        <button
          onClick={() => setActiveTab(tab.id)}
          onMouseOver={() => setHoveredTab(tab.id)}
          onMouseOut={() => setHoveredTab(null)}
          key={tab.id}
          type="button"
          className="transition relative rounded-sm px-2 py-1 text-sm text-white"
        >
          <AnimatePresence>
            {hoveredTab === tab.id && (
              <motion.span
                layoutId="hover-pill"
                className="absolute inset-0 z-10 bg-white/20"
                style={{
                  borderRadius: 4,
                }}
                transition={{ type: "spring", duration: 0.6 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              ></motion.span>
            )}
          </AnimatePresence>
          {activeTab === tab.id && (
            <motion.span
              layoutId="active-hover-tab"
              className="absolute -bottom-2 left-0 w-full z-10 bg-white h-[2px]"
              style={{ borderRadius: 9999 }}
              transition={{ type: "spring", duration: 0.6 }}
            ></motion.span>
          )}
          {tab.text}
        </button>
      ))}
    </nav>
  );
}
