import { FactoryCreator } from "./components/factory-creator";
import { factoryTypesSchema } from "./schemas";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        alignItems: "center",
        width: "100%",
      }}
    >
      {factoryTypesSchema.map(({ key, ...props }) => (
        <FactoryCreator key={key} {...props} />
      ))}
    </div>
  );
}

export default App;
