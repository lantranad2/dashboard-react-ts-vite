import "../../sass/components/info.scss";
import { InfoData } from "./data";

interface InfoProps {
  data: InfoData;
}

const Info: React.FC<InfoProps> = ({ data }) => {
  return (
    <div className="card info">
      <button className="info__btn">Edit</button>
      <h2 className="info__subheading">Infomation</h2>
      <div className="info__content">
        <div className="info__image">
          <img
            src="https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=100"
            alt="Jane Doe"
          />
        </div>
        <div className="info__details">
          <h1 className="info__heading">{data.name}</h1>
          {Object.entries(data).map(([key, value]) => {
            if (key === "price") {
              return (
                <span className="info__detail">
                  <span className="info__detail-lead">
                    {`${key.charAt(0).toUpperCase()}${key.slice(1)}`}:{" "}
                  </span>
                  ${value}
                </span>
              );
            }
            if (key !== "name" && key !== "title") {
              return (
                <span className="info__detail">
                  <span className="info__detail-lead">
                    {`${key.charAt(0).toUpperCase()}${key.slice(1)}`}:{" "}
                  </span>
                  {value}
                </span>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Info;
