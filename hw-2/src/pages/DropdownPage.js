// src/pages/DropdownPage.jsx
import { useState, useMemo } from "react";
import Dropdown from "../component/Dropdown";

const CITY_OPTIONS = [
  { label: "New York", value: "sunset1" },
  { label: "Los Angeles", value: "sunset2" },
  { label: "Tokyo", value: "sunset3" },
  { label: "London", value: "sunset4" },
];

const SUNSET_BG = {
  sunset1: "bg-gradient-to-br from-orange-400 via-pink-400 to-fuchsia-500",
  sunset2: "bg-gradient-to-br from-amber-300 via-orange-400 to-rose-400",
  sunset3: "bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400",
  sunset4: "bg-gradient-to-br from-sky-300 via-blue-400 to-indigo-500",
};

export default function DropdownPage() {
  const [value, setValue] = useState(null);

  const bgClass = useMemo(() => {
    return SUNSET_BG[value?.value] ?? "bg-gradient-to-br from-gray-100 to-white";
  }, [value]);

  return (
    <div className={`min-h-screen ${bgClass} transition-all duration-700`}>
      {/* <div className="max-w-xl mx-auto p-8">
        <h1 className="text-2xl font-semibold mb-4 text-white drop-shadow">
          Dropdown page with selected city: {value?.label ?? "—"}
        </h1> */}

        <Dropdown
          options={CITY_OPTIONS}
          value={value}
          onChange={setValue}
          placeholder="Choose a city…"
        />

        {/* <h2 className="mt-6 text-white/90 drop-shadow">
          Sunset key: {value?.value ?? "none"}
        </h2>
      </div> */}
    </div>
  );
}
