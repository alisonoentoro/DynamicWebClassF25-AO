import { useState, useMemo } from "react";
import Pomodoro from "../component/Pomodoro";
import Dropdown from "../component/Dropdown"; 

// City options
const CITY_OPTIONS = [
  { label: "New York", value: "nyc" },
  { label: "San Francisco", value: "sf" },
  { label: "Tokyo", value: "tokyo" },
  { label: "Reykjavik", value: "reykjavik" },
];

const CITY_BG = {
  nyc: "bg-gradient-to-b from-amber-100 via-rose-200 to-indigo-500",
  sf: "bg-gradient-to-b from-sky-100 via-blue-200 to-cyan-500",
  tokyo: "bg-gradient-to-b from-pink-100 via-fuchsia-200 to-purple-500",
  reykjavik: "bg-gradient-to-b from-slate-100 via-blue-100 to-indigo-400",
};

export default function PomodoroPage() {
  const [selectedCity, setSelectedCity] = useState(null);

  
  const bgClass = useMemo(() => {
    const key = selectedCity?.value;
    return CITY_BG[key] || "bg-gradient-to-b from-sky-100 to-indigo-200";
  }, [selectedCity]);

  return (
    <div className={`min-h-screen ${bgClass}`}>
      <main className="max-w-3xl mx-auto px-4 py-8">
        <section className="rounded-2xl p-4 bg-white/70 shadow">
          <h2 className="text-lg font-semibold mb-2">Choose a city</h2>

          {/* Dropdown City */}
          <Dropdown
            options={CITY_OPTIONS}
            value={selectedCity}            
            onChange={setSelectedCity}     
            placeholder="Select a city…"
          />
        </section>
      </main>
      {/* Pomodoro */}
      <header className="sticky top-0 z-20 ">
        <div className="max-w-3xl mx-auto px-4 py-8">
          <Pomodoro />
        </div>
      </header>

     
    </div>
  );
}
