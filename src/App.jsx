import { useRive } from "@rive-app/react-canvas";
import "./App.css";

function App() {
  const { rive, RiveComponent } = useRive({
    src: "/example.riv",
    autoplay: true,
    stateMachines: "State Machine 1",
  });

  return (
    <div className="App">
      {/* <h1>Rive Animation Integration</h1> */}
      <div
        style={{
          width: "100%",
          height: "100vh",
          maxWidth: "400px",
          aspectRatio: "1",
          margin: "0 auto",
        }}
      >
        <RiveComponent />
      </div>
      <div style={{ marginTop: "20px" }}>
        <button
          onClick={() => rive && rive.play()}
          style={{ marginRight: "10px" }}
        >
          Play
        </button>
        <button onClick={() => rive && rive.pause()}>Pause</button>
      </div>
    </div>
  );
}

export default App;
