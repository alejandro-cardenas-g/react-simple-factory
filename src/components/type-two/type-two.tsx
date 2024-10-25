import { useState } from "react";
import { ITypeTwoComponent } from "../../interfaces";

export const TypeTwo: React.FC<ITypeTwoComponent> = ({ initValue }) => {
  const [counter, setCounter] = useState<number>(initValue);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <p>{counter}</p>
      <button onClick={() => setCounter((prev) => prev + 1)}>Increment</button>
    </div>
  );
};
