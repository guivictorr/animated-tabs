import { Click } from "./Click";
import { Hover } from "./Hover";

function App() {
  return (
    <main className="space-y-4 h-screen flex flex-col items-center justify-center bg-gray-950">
      <p className="text-white">Click</p>
      <Click />
      <p className="text-white">Hover</p>
      <Hover />
    </main>
  );
}

export default App;
