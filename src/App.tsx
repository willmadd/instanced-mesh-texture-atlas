import "./App.css";
import Scene from "./_components/Scene";
import { ThreeProvider } from "./_context/ThreeContext";
// ThreeProvider
const App: React.FC = () => (
  <ThreeProvider>
    <Scene />
  </ThreeProvider>
);

export default App;
