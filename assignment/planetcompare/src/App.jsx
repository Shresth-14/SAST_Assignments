import { useState } from "react";
import ChartBox from "./ChartBox";
import planets from "./data/planets.json";
import "./index.css";

export default function App() {
  const [property, setProperty] = useState("gravity");

  const values = planets.map((p) => p[property]);
  const maxValue = Math.max(...values);
  const minValue = Math.min(...values);

  const highestPlanet = planets[values.indexOf(maxValue)];
  const lowestPlanet = planets[values.indexOf(minValue)];

  const getUnit = () => (property === "gravity" ? "m/s²" : "km");

  return (
    <div className="h-screen p-4 bg-[url('https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center text-white flex items-center justify-center overflow-hidden">
      <div className="w-full max-w-5xl space-y-4">
        ={" "}
        <div className="text-center">
          <h1 className="text-3xl font-bold drop-shadow-lg mb-2">
            Planet Comparison Tool
          </h1>
          <p className="text-white/80 text-sm">Explore our solar system</p>
        </div>
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/30">
          <div className="flex justify-center mb-4">
            <select
              value={property}
              onChange={(e) => setProperty(e.target.value)}
              className="px-6 py-2.5 bg-white/20 backdrop-blur-md border border-white/40 rounded-full text-white text-base font-medium hover:bg-white/30 transition-all cursor-pointer"
            >
              <option value="gravity" className="bg-gray-900">
                Gravity (m/s²)
              </option>
              <option value="diameter" className="bg-gray-900">
                Diameter (km)
              </option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="bg-emerald-500/20 backdrop-blur-sm p-4 rounded-xl border border-emerald-400/50 hover:scale-105 transition-transform">
              <div className="text-emerald-300 text-sm font-semibold mb-2">
                HIGHEST
              </div>
              <div className="text-xl font-bold">{highestPlanet.name}</div>
              <div className="text-emerald-200 text-base">
                {maxValue} {getUnit()}
              </div>
            </div>

            <div className="bg-red-500/20 backdrop-blur-sm p-4 rounded-xl border border-red-400/50 hover:scale-105 transition-transform">
              <div className="text-red-300 text-sm font-semibold mb-2">
                LOWEST
              </div>
              <div className="text-xl font-bold">{lowestPlanet.name}</div>
              <div className="text-red-200 text-base">
                {minValue} {getUnit()}
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <h2 className="text-center text-base font-semibold text-purple-300 mb-3">
              {property.charAt(0).toUpperCase() + property.slice(1)} Comparison
              Chart
            </h2>
            <div className="h-72 overflow-hidden">
              <ChartBox planets={planets} property={property} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
