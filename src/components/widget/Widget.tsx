import { Link } from "react-router-dom";
import { WidgetType } from "./data";
import UpIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import DownIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import "../../sass/components/widget.scss";

interface WidgetProps {
  data: WidgetType;
}

const Widget: React.FC<WidgetProps> = ({ data }) => {
  const { title, percent, number, link, Icon, currency } = data;
  const widgetTitle = title.toLowerCase();
  const widgetNumber = currency ? `${currency} ${number}` : `${number}`;
  const widgetPercent = (percent > 0 ? percent : -1 * percent) + "%";
  const widgetPercentClass = percent > 0 ? "up" : "down";

  return (
    <div className={`card widget widget--${widgetTitle}`}>
      <div className="widget__left">
        <span className="widget__title">{widgetTitle}</span>
        <span className="widget__number">{widgetNumber}</span>
        <Link className="widget__link" to="/">
          {link}
        </Link>
      </div>
      <div className="widget__right">
        <div className={`widget__${widgetPercentClass}`}>
          {percent > 0 ? (
            <UpIcon className="widget__icon-up" />
          ) : (
            <DownIcon className="widget__icon-down" />
          )}
          <span className="widget__percent">{widgetPercent}</span>
        </div>
        <Icon className={`widget__icon widget__icon--${widgetTitle}`} />
      </div>
    </div>
  );
};

export default Widget;
