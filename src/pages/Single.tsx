import { useLayoutEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { product, user } from "../components/info/data";
import Info from "../components/info/Info";
import RenenueMoths from "../components/revenue-months/RenenueMoths";
import { transactions } from "../components/table-transactions/data";
import TableTransactions from "../components/table-transactions/TableTransactions";
import "../sass/pages/single.scss";

const Single = () => {
  const [data, setData] = useState(user);

  const location = useLocation();

  useLayoutEffect(() => {
    if (location.pathname.includes("products")) {
      setData(product);
    } else if (location.pathname.includes("users")) {
      setData(user);
    }
  }, [location]);

  return (
    <div className="page page--single">
      <div className="info-months">
        <Info data={data} />
        <RenenueMoths />
      </div>
      <div className="card transactions">
        <h2 className="transactions__heading">Latest Transactions</h2>
        <TableTransactions transactions={transactions} />
      </div>
    </div>
  );
};

export default Single;
