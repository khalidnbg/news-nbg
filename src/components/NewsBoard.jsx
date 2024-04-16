import { useEffect } from "react";
import { useState } from "react";
import NewsItem from "./NewsItem";
import "./NewsItems.css";
import { countries, categories } from "../options";
import Loader from "./Loader";

// eslint-disable-next-line react/prop-types
const NewsBoard = ({ category, country }) => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Add loading state
  const countryName = countries[country] || "Unknown Country";
  const categoryName = categories[category] || "Unknown Category";

  useEffect(() => {
    setIsLoading(true); // Set loading to true when fetching data
    let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${
      import.meta.env.VITE_API_KEY
    }`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.articles) {
          // Check if data.articles is not undefined
          setArticles(data.articles);
        } else {
          setArticles([]); // Set articles to an empty array if data.articles is undefined
        }
        setIsLoading(false); // Set loading to false after fetching data
      });
  }, [category, country]);

  return (
    <div>
      <div
        className="greet"
        style={{
          margin: "50px 0px",
          fontSize: "60px",
          color: "#c4c7c5",
          padding: "20px",
          fontWeight: "bold",
          textAlign: "center",
        }}>
        <p>
          <span>
            Unveiling Perspectives: {categoryName} Updates from {countryName}{" "}
            and Beyond!
          </span>
        </p>
      </div>
      {isLoading ? ( // Display loading animation if isLoading is true
        <Loader />
      ) : (
        <div className="d-flex flex-wrap justify-content-center">
          {articles.map((news, index) => {
            return (
              <NewsItem
                key={index}
                title={news.title}
                description={news.description}
                src={news.urlToImage}
                url={news.url}
                author={news.author}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default NewsBoard;
