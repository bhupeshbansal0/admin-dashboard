import { ReactElement, useCallback, useState } from "react";
import Sidebar from "../components/Sidebar";
import TableHOC from "../components/TableHOC";
import { Column } from "react-table";
import { Link } from "react-router-dom";
import shoePng from "../assets/puma-shoes.png";
import macbookPng from "../assets/macbook.png";
import { FaPlus } from "react-icons/fa";

interface DataType {
    photo: ReactElement;
    name: string;
    price: number;
    stock: number;
    action: ReactElement;
}

const columns: Column<DataType>[] = [
    {
        Header: "Photo",
        accessor: "photo",
    },
    {
        Header: "Name",
        accessor: "name",
    },
    {
        Header: "Price",
        accessor: "price",
    },
    {
        Header: "Stock",
        accessor: "stock",
    },
    {
        Header: "Action",
        accessor: "action",
    },
];

const arr: DataType[] = [
    {
        photo: <img src={shoePng} alt="Shoes" />,
        name: "Puma Shoes Air Jordan Cook Nigga 2023",
        price: 690,
        stock: 3,
        action: <Link to="/admin/product/asdasf">Manage</Link>
    },
    {
        photo: <img src={macbookPng} alt="Macbook" />,
        name: "Macbook",
        price: 1100,
        stock: 15,
        action: <Link to="/admin/product/sfdvsbs">Manage</Link>
    },
];
const Products = () => {
    const [data] = useState<DataType[]>(arr);
    const Table = useCallback(() => TableHOC<DataType>(columns, data, "dashboard-productbox", "Products", true)(), [data]);

    return (
        <div className="admin-container">
            <Sidebar />
            <main>{Table()}</main>
            <Link to="/admin/product/new" className="create-product-btn">
                <FaPlus />
            </Link>
        </div>
    );
};

export default Products;
