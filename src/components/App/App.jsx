import { useEffect, useRef, useState } from "react";
import { newsList } from "../../utils/constance";
import { Novetly } from "../Novetly/Novetly";
import "./app.css";

function App() {
  const [countNews, setCountNews] = useState(10);
  const wrapper = useRef(null);

  const scrollHandler = (e) => {
    const { target } = e;
    if (wrapper) {
      if (target.scrollWidth - target.scrollLeft - 260 <= target.offsetWidth) {
        setCountNews((prev) => prev + 1);
      }
    }
  };

  useEffect(() => {
    const { current } = wrapper;
    current.addEventListener("scroll", scrollHandler);
    return () => {
      if (countNews.length === newsList.length) {
        current.removeEventListener("scroll", scrollHandler);
      }
    };
  });

  return (
    <div className="app">
      <h1 className="center-align">News</h1>
      <div className="app__wrapper" ref={wrapper}>
        {newsList.slice(0, countNews).map((item) => (
          <Novetly novetly={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
