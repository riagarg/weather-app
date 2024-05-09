import "./App.css";
import Slider from "./components/Slider.js";
import SearchBar from "./components/Search.js";
import { useState } from "react";

function App() {
  const [city, setCity] = useState("San Francisco, CA");
  const [dateRange, setDateRange] = useState(0);

  return (
    <div
      style={{
        background: "linear-gradient(94.77deg, #E7F9FF 2.68%, #FFF8E4 95.69%)",
        flexFlow: "column",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          height: "411px",
          width: "911px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            fontWeight: "600",
            fontSize: "24px",
            lineHeight: "32px",
            color: "#111827",
            paddingBottom: "30px",
          }}
        >
          Weather in {city}
        </div>
        <Slider city={city} dateRange={dateRange} setDateRange={setDateRange} />
        <SearchBar city={city} setCity={setCity} setDateRange={setDateRange} />
      </div>
    </div>
  );
}

export default App;
