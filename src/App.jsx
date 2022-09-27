import Previewer from "./Components/Previewer";
function App() {
  return (
    <div className="App">
      <Previewer />
      <h3
        style={{ textDecoration: "none", textAlign: "center", color: "black" }}
      >
        Made by &nbsp;
        <a
          href="https://github.com/mrsonmez"
          style={{ color: "white", textDecoration: "none" }}
        >
          mrsonmez
        </a>
      </h3>
    </div>
  );
}

export default App;
