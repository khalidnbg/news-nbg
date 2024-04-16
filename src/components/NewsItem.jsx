import "../components/NewsItems.css";

// eslint-disable-next-line react/prop-types
const NewsItem = ({ title, description, src, url, author }) => {
  return (
    <div className="card">
      <img
        src={
          src
            ? src
            : "https://www.albertadoctors.org/images/ama-master/feature/Stock%20photos/News.jpg"
        }
      />
      <div className="card-body">
        <h2 style={{ fontSize: "15px" }}>{title}</h2>
        <p>
          {description
            ? // eslint-disable-next-line react/prop-types
              description.slice(0, 20) + "..."
            : "Comprehensive up-to-date news coverage, aggregated from sources all over the world by Nbg News."}
        </p>
        <div className="info">
          <h5 className="m-0">{author ? author : "No Author"}</h5>
          <a
            style={{
              textDecoration: "none",
              fontWeight: "bold",
              margin: "0",
              fontSize: "12px",
            }}
            href={url}
            className="ml-auto button">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
