import RevenueTotal from "../components/revenue-total/RevenueTotal";
import { users, orders, earnings, balance } from "../components/widget/data";
import Widget from "../components/widget/Widget";
import "../sass/pages/home.scss";
import { totalRevenue } from "../components/revenue-total/data";
import RenenueMoths from "../components/revenue-months/RenenueMoths";
import TableTransactions from "../components/table-transactions/TableTransactions";
import { transactions } from "../components/table-transactions/data";

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
        <RenenueMoths />
      </div>
      <div className="card transactions">
        <h2 className="transactions__heading">Latest Transactions</h2>
        {/* <TableTransactions transactions={transactions} /> */}
      </div>
    </div>
  );
};

export default Home;
