import { useState } from "react";

const tabs = [
  { id: 1, text: "Dashboard" },
  { id: 2, text: "Info" },
  { id: 3, text: "Settings" },
];

function App() {
  const [activeTab, setActiveTab] = useState<number>(tabs[0].id);

  return (
    <main className="h-screen flex items-center justify-center bg-gray-950">
      <nav className="space-x-4">
        {tabs.map((tab) => (
          <button
            onClick={() => setActiveTab(tab.id)}
            key={tab.id}
            type="button"
            className="relative rounded-full px-2 py-1 text-sm text-white"
          >
            {tab.text}
            {activeTab === tab.id && (
              <span className="absolute inset-0 bg-white rounded-full mix-blend-exclusion"></span>
            )}
          </button>
        ))}
      </nav>
    </main>
  );
}

export default App;
