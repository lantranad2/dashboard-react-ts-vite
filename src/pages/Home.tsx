import RevenueTotal from "../components/revenue-total/RevenueTotal";
import { users, orders, earnings, balance } from "../components/widget/data";
import Widget from "../components/widget/Widget";
import "../sass/pages/home.scss";
import { totalRevenue } from "../components/revenue-total/data";

const Home = () => {
  return (
    <div className="page page--home">
      <div className="widgets">
        <Widget data={users} />
        <Widget data={orders} />
        <Widget data={earnings} />
        <Widget data={balance} />
      </div>
      <div className="revenue">
        <RevenueTotal data={totalRevenue} />
        <div className="revenue__last-months">chart</div>
      </div>
      <div className="transactions">table</div>
    </div>
  );
};

export default Home;
