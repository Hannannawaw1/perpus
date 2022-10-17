import "./App.css";
import Navbar from "./components/Navbar";
import BookLists from "./container/BookLists";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <BookLists></BookLists>
    </div>
  );
}

export default App;
