import Header from "./Header";
import SegmentedNav from "./SegmentedNav";
import Aside from "./Aside";
import "./App.css";

function App() {
  return (
    <>
      <div className="full-page">
        <div>
          <Aside />
        </div>
        <div className="main-content">
          <Header />
          <SegmentedNav />
        </div>
      </div>
    </>
  );
}

export default App;
