import { useState } from "react";
import { ITypeThreeComponent } from "../../interfaces";

type WorkingMode = ITypeThreeComponent["mode"];

export const TypeThree: React.FC<ITypeThreeComponent> = ({ mode }) => {
  const [workingMode, setWorkingMode] = useState<WorkingMode>(mode);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <p>
        working mode: <span>{workingMode}</span>
      </p>
      <button onClick={() => setWorkingMode("active")}>Activate</button>
      <button onClick={() => setWorkingMode("inactive")}>Deactivate</button>
      <button onClick={() => setWorkingMode("pending")}>Mark as pending</button>
    </div>
  );
};
