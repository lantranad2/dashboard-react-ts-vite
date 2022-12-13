import { SubListType } from "./data";
import { Link } from "react-router-dom";

interface SubListProps {
  data: SubListType;
}

const SubList: React.FC<SubListProps> = ({ data }) => {
  return (
    <div className="sidebar__sublist">
      <span className="sidebar__sublist-title">{data.title}</span>
      <ul className="sidebar__sublist-list">
        {data.items.map(({ id, Icon, text }) => (
          <li className="sidebar__item" key={id}>
            <Link
              className="sidebar__link"
              to={text.toLowerCase().split(" ").join("-")}
            >
              {<Icon className="sidebar__icon" />} {text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubList;
