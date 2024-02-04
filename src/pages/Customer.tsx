import { ReactElement, useCallback, useState } from "react";
import Sidebar from "../components/Sidebar";
import { Column } from "react-table";
import TableHOC from "../components/TableHOC";
import { FaTrash } from "react-icons/fa";

const womenuser: string = "https://randomuser.me/api/portraits/women/64.jpg";
const manuser: string = "https://randomuser.me/api/portraits/men/0.jpg";

interface DataType {
  avatar: ReactElement;
  name: string;
  email: string;
  gender: string;
  role: string;
  action: ReactElement;
}

const columns: Column<DataType>[] = [
  {
    Header: "Avatar",
    accessor: "avatar",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "Gender",
    accessor: "gender",
  },
  {
    Header: "Role",
    accessor: "role",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];

const arr: DataType[] = [
  {
    avatar: (
      <img
        style={{ borderRadius: "50%" }}
        src={womenuser}
        alt="Uses"
      />
    ),
    name: "Ravina",
    email: "ravina@gmail.com",
    gender: "Female",
    role: "user",
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },
  {
    avatar: (
      <img
        style={{ borderRadius: "50%" }}
        src={manuser}
        alt="Uses"
      />
    ),
    name: "Shubham",
    email: "shubham@gmail.com",
    gender: "Male",
    role: "user",
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },
];

const Customer = () => {
  const [data] = useState<DataType[]>(arr);

  const Table = useCallback(
    () =>
      TableHOC<DataType>(
        columns,
        data,
        "dashboard-customerbox",
        "Customers",
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
};

export default Customer;
