import Register from "./components/RegisterSection";
import {Routes,Route} from "react-router-dom";
function App() {
  return (
    <>
    <h1>Hello world</h1>
      <Routes>
        <Route path="/register" element={<Register />}/>
      </Routes>
    </>
  );
}

export default App;
