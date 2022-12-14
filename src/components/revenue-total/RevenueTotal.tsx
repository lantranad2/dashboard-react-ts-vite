import { CircularProgressbar } from "react-circular-progressbar";
import UpIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import DownIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "react-circular-progressbar/dist/styles.css";
import "../../sass/components/revenue-total.scss";
import { RevenueTotalType } from "./data";

interface RevenueTotalProps {
  data: RevenueTotalType;
}

const RevenueTotal: React.FC<RevenueTotalProps> = ({ data }) => {
  const { percent, totalsales, target, lastweek, lastmonth } = data;

  const targetInfoClass = target > 0 ? "up" : "down";
  const targetMoney = target > 0 ? `$${target}k` : `$${target * -1}k`;

  const weekInfoClass = lastweek > 0 ? "up" : "down";
  const weekMoney = lastweek > 0 ? `$${lastweek}k` : `$${lastweek * -1}k`;

  const monthInfoClass = lastmonth > 0 ? "up" : "down";
  const monthMoney = lastmonth > 0 ? `$${lastmonth}k` : `$${lastmonth * -1}k`;

  return (
    <div className="card revenue__total">
      <div className="header">
        <h2 className="header__heading">Total Revenue</h2>
        <MoreVertIcon className="header__icon" />
      </div>
      <div className="details">
        <CircularProgressbar value={percent} text={`${percent}%`} />
        <span className="details__heading">Total sales made today</span>
        <span className="details__totalsales">${totalsales}</span>
        <span className="details__subheading">
          Previous transctions processing. Last payments may not be included.
        </span>
        <div className="details__transactions">
          <div className="details__target">
            <span className="details__title">Target</span>
            <div className={`details__info details__info--${targetInfoClass}`}>
              {target > 0 ? (
                <UpIcon className="details__icon-up" />
              ) : (
                <DownIcon className="details__icon-down" />
              )}
              <span className="details__money">{targetMoney}</span>
            </div>
          </div>
          <div className="details__week">
            <span className="details__title">Last Week</span>
            <div className={`details__info details__info--${weekInfoClass}`}>
              {lastweek > 0 ? (
                <UpIcon className="details__icon-up" />
              ) : (
                <DownIcon className="details__icon-down" />
              )}
              <span className="details__money">{weekMoney}</span>
            </div>
          </div>
          <div className="details__month">
            <span className="details__title">Last Month</span>
            <div className={`details__info details__info--${monthInfoClass}`}>
              {lastmonth > 0 ? (
                <UpIcon className="details__icon-up" />
              ) : (
                <DownIcon className="details__icon-down" />
              )}
              <span className="details__money">{monthMoney}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevenueTotal;
