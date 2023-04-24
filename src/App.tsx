import { useState } from "react";
import { motion } from "framer-motion";

const tabs = [
  { id: 1, text: "Dashboard" },
  { id: 2, text: "Info" },
  { id: 3, text: "Settings" },
];

function App() {
  const [activeTab, setActiveTab] = useState<number>(tabs[0].id);

  return (
    <main className="h-screen flex items-center justify-center bg-gray-950">
      <nav className="space-x-2">
        {tabs.map((tab) => (
          <button
            onClick={() => setActiveTab(tab.id)}
            key={tab.id}
            type="button"
            className="transition relative rounded-full px-2 py-1 text-sm text-white"
          >
            {activeTab === tab.id && (
              <motion.span
                layoutId="pill"
                className="absolute inset-0 z-10 bg-white mix-blend-exclusion"
                style={{ borderRadius: 9999 }}
                transition={{ type: "spring", duration: 0.6 }}
              ></motion.span>
            )}
            {tab.text}
          </button>
        ))}
      </nav>
    </main>
  );
}

export default App;
