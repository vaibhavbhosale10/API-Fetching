import React, { useEffect, useState } from "react";
import axios from "axios";
import "./news.css";
const NewsAPI = () => {
  const [newsdata, setNewsData] = useState([]);

  const Fetchnews = async () => {
    try {
      const response = await axios.get(
        "http://content.guardianapis.com/search?api-key=test&q=modi&show-fields=thumbnail"
      );
      setNewsData(response.data.response.results);
      console.log("response", response.data.response.results);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    Fetchnews();
  }, []);

  if (newsdata.length > 0) {
    return (
      <div className="news-container" style={{ marginLeft: "120px" }}>
        {newsdata.map((news) => (
          <div className="news-card" key={news.id}>
            <img
              src={news.fields.thumbnail}
              alt={news.webTitle}
              className="news-image"
            />
            <div className="news-content">
              <p className="section">Section: {news.sectionName}</p>
              <h2 className="title">{news.webTitle}</h2>
              <p className="date">
                Published: {new Date(news.webPublicationDate).toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  } else {
    return <>Loading...</>;
  }
};

export default NewsAPI;
