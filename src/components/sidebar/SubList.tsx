import { SubListType } from "./data";

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
            <a className="sidebar__link" href="#">
              {<Icon className="sidebar__icon" />} {text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubList;
