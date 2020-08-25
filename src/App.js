import React from "react";

import MyImage from "./components/MyImage";
// import localImg from "./assets/home-tri.png"; // Local image to try

export default function App() {
  return (
    <div className="App">
      <h1>Slayte challenge part 1.1</h1>
      <MyImage
        src="https://mukund.uk/img/logo.ff91f444.png"
        height={400}
        width={500}
        alt="My img"
      />
    </div>
  );
}
