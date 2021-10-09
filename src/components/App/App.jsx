import { useEffect, useState } from "react";
import { newsList } from "../../utils/constance";
import { Novetly } from "../Novetly/Novetly";
import "./app.css";

function App() {
  const [renderNewsList, setRenderNewsList] = useState([]);

  const generateInitialList = (list) => {
    let initialList = [];

    for (let i = 0; i < 10; i++) {
      initialList.push(list[i]);
      setRenderNewsList(initialList);
    }
  };

  useEffect(() => {
    generateInitialList(newsList);
  }, []);

  console.log(renderNewsList);

  return (
    <div className="app">
      <h1 className="center-align">News</h1>
      <div className="app__wrapper">
        {renderNewsList.map((item) => (
          <Novetly novetly={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
