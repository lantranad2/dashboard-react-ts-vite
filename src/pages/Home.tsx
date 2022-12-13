import { users, orders, earnings, balance } from "../components/widget/data";
import Widget from "../components/widget/Widget";
import "../sass/pages/home.scss";

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
        <div className="revenue__total">progress</div>
        <div className="revenue__last-months">chart</div>
      </div>
      <div className="transactions">table</div>
    </div>
  );
};

export default Home;
