import { useEffect } from "react";
import "./App.css";
import { useState } from "react";

function App() {
  const [code, setCode] = useState();
  const fetchData = async () => {
    try {
      console.log("calling");
      const response = await fetch(
        "https://localhost:7185/WeatherForecast/callback",
        {
          method: "POST",
          headers: {
            accept: "*/*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            code: code,
          }),
        }
      );
      const data = response.json();
      console.log(data);
    } catch (error) {
      console.log(error, "oh noooooooooooooooooooo");
    }
  };
  return (
    <div className="flex flex-col items-center justify-center h-dvh bg-blue-400 gap-10">
      <h1 className="text-4xl text-red-500 font-bold">Azure Ad Mugaiz</h1>
      <div className="flex flex-col gap-3">
        <label className="text-white" htmlFor="codeInput">
          Copy above code and paste it into input field.
        </label>
        <input
          id="codeInput"
          type="text"
          className="rounded-lg py-2 text-lg px-2"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <button onClick={() => fetchData()} className="border p-3 rounded-lg">
          Submit
        </button>
      </div>
    </div>
  );
}

export default App;
