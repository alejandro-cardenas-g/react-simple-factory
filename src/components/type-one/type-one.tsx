import React, { useState } from "react";
import { ITypeOneComponent } from "../../interfaces";

export const TypeOne: React.FC<ITypeOneComponent> = ({ color, text }) => {
  const [colorToShow, setColorToShow] = useState<string>(color);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <p style={{ color: colorToShow }}>{text}</p>
      <button onClick={() => setColorToShow("red")}>Red</button>
      <button onClick={() => setColorToShow("green")}>Green</button>
      <button onClick={() => setColorToShow("blue")}>Blue</button>
    </div>
  );
};
