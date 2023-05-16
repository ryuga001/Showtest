import Cards from "./component/Cards";
import { Route, Routes } from "react-router-dom";
import Detail from "./component/Detail";
import Form from "./component/Form";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Cards fetchUrl="https://api.tvmaze.com/search/shows?q=all" />} />
        <Route path="/:id" element={<Detail />} />
      </Routes >
    </>

  );
}

export default App;
