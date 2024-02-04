import { ReactElement, useCallback, useState } from "react";
import Sidebar from "../components/Sidebar"
import { Column } from "react-table";
import TableHOC from "../components/TableHOC";
import { Link } from "react-router-dom";

interface DataType {
  user: string;
  amount: number;
  discount: number;
  quality: number;
  status: ReactElement;
  action: ReactElement;
}

const columns: Column<DataType>[] = [
  {
    Header: "User",
    accessor: "user",
  },
  {
    Header: "Amount",
    accessor: "amount",
  },
  {
    Header: "Discount",
    accessor: "discount",
  },
  {
    Header: "Quality",
    accessor: "quality",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];

const arr: DataType[] = [
  {
    user:"Charley",
    amount:4500,
    discount:400,
    quality:2,
    status: <span className="red">Processing</span>,
    action: <Link to="/admin/transaction/asdasf">Manage</Link>
  },
  {
    user: "Anjali",
    amount: 3000,
    discount: 500,
    quality: 5,
    status: <span className="green">Shipped</span>,
    action: <Link to="/admin/transaction/asdasf">Manage</Link>
  },
  {
    user: "Robin",
    amount: 57000,
    discount: 5000,
    quality: 4,
    status: <span className="purple">Delivered</span>,
    action: <Link to="/admin/transaction/asdasf">Manage</Link>
  },
  {
    user: "Monika",
    amount: 32000,
    discount: 4700,
    quality: 3,
    status: <span className="red">Processing</span>,
    action: <Link to="/admin/transaction/asdasf">Manage</Link>
  },
];


const Transaction = () => {

  const [data] = useState<DataType[]>(arr);

  const Table = useCallback(
    () =>
      TableHOC<DataType>(
        columns,
        data,
        "dashboard-transactionbox",
        "Transactions",
        true
      )(),
    [data]
  );
  return (
    <div className="admin-container">
      <Sidebar />
      <main>{Table()}</main>
    </div>
  );
}

export default Transaction