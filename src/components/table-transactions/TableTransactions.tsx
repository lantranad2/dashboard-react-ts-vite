import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import "../../sass/components/table-transactions.scss";
import { Transaction } from "./data";

interface TableTransactionsProps {
  transactions: Transaction[];
}

const TableTransactions: React.FC<TableTransactionsProps> = ({
  transactions,
}) => {
  return (
    <TableContainer className="table-transactions">
      <Table>
        <TableHead className="header">
          <TableRow>
            <TableCell className="header__cell id">ID</TableCell>
            <TableCell className="header__cell">Product</TableCell>
            <TableCell className="header__cell customer">Customer</TableCell>
            <TableCell className="header__cell date">Date</TableCell>
            <TableCell className="header__cell">Amount</TableCell>
            <TableCell className="header__cell payment">
              Payment Menthod
            </TableCell>
            <TableCell className="header__cell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody className="body">
          {transactions.map((t) => (
            <TableRow key={t.id}>
              <TableCell className="body__cell id">{t.id}</TableCell>
              <TableCell className="body__cell">
                <div className="product">
                  <img src={t.product.img} alt={t.product.name} />
                  <span>{t.product.name}</span>
                </div>
              </TableCell>
              <TableCell className="body__cell customer">
                {t.customer}
              </TableCell>
              <TableCell className="body__cell date">
                {t.date.toLocaleDateString("en", {
                  day: "numeric",
                  month: "short",
                })}
              </TableCell>
              <TableCell className="body__cell">{t.amount}</TableCell>
              <TableCell className="body__cell payment">{t.payment}</TableCell>
              <TableCell className="body__cell">
                <span className={`status ${t.status.toLowerCase()}`}>
                  {t.status}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableTransactions;
