import { Button } from "./lib";

function App() {
  return (
    <div className="p-12" onClick={() => alert("hello")}>
      <Button className="bg-primary">click me</Button>
    </div>
  );
}

export default App;
