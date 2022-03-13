import "./App.css";
import News from "./components/app/News";
import Header from "./components/layout/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<News key="general" catagory="general"></News>}
          />
          <Route
            path="/general"
            element={<News key="general" catagory="general"></News>}
          />
          <Route
            path="/business"
            element={<News key="business" catagory="business"></News>}
          />
          <Route
            path="/entertainment"
            element={<News key="entertainment" catagory="entertainment"></News>}
          />
          <Route
            path="/health"
            element={<News key="health" catagory="health"></News>}
          />
          <Route
            path="/science"
            element={<News key="science" catagory="science"></News>}
          />
          <Route
            path="/sports"
            element={<News key="sports" catagory="sports"></News>}
          />
          <Route
            path="/technology"
            element={<News key="technology" catagory="technology"></News>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
