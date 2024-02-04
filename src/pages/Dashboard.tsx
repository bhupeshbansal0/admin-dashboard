import { BsSearch } from "react-icons/bs";
import Sidebar from "../components/Sidebar";
import { FaRegBell } from "react-icons/fa";
import userImg from "../assets/userImg.png";
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";
import data from "../assets/data.json";
import { BarChart, DoughnutChart } from "../components/Charts";
import { BiMaleFemale } from "react-icons/bi";
import DashboardTable from "../components/DashboardTable";

const WidgetItems: WidgetItemProps[] = [
  {
    heading: "Revenue",
    value: 3400000,
    percent: 55,
    color: "#492E87",
    amount: true,
  },
  {
    heading: "Users",
    value: 400,
    percent: -15,
    color: "orange",
  },
  {
    heading: "Transactions",
    value: 23000,
    percent: 70,
    color: "#43766C",
  },
  {
    heading: "Products",
    value: 1000,
    percent: 30,
    color: "#FC6736",
  },
];

const Dashboard = () => {
  return (
    <div className="admin-container">
      <Sidebar />
      <main className="dashboard">
        <div className="bar">
          <BsSearch />
          <input
            type="text"
            placeholder="Search for data, users, docs"
          />
          <FaRegBell />
          <img
            src={userImg}
            alt="User"
          />
        </div>
        <section className="widget-container">
          {WidgetItems.map((Widget, index) => (
            <WidgetItem
              key={index}
              percent={Widget.percent}
              amount={Widget.amount}
              value={Widget.value}
              heading={Widget.heading}
              color={Widget.color}
            />
          ))}
        </section>
        <section className="graph-container">
          <div className="revenue-chart">
            <h2>Revenue and Transaction</h2>
            <BarChart
              // horizonal={true}
              data_1={[300, 144, 433, 655, 237, 755, 190]}
              data_2={[200, 444, 333, 505, 327, 575, 910]}
              title1="Revenue"
              title2="Transaction"
              bgColor1="rgb(0, 115, 255)"
              bgColor2="rgba(53, 162, 235, 0.8)"
            />
          </div>
          <div className="dashboard-categories">
            <h2>Inventory</h2>
            <div>
              {data.categories.map((category, index) => (
                <CategoryItem
                  key={index}
                  heading={category.heading}
                  value={category.value}
                  color={`hsl(${category.value * 5} ${category.value
                    }%, 50%)`}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="transaction-container">
          <div className="gender-chart">
            <h2>Gender Ratio</h2>
            <DoughnutChart
              labels={["Female", "Male"]}
              data={[12, 19]}
              bgColor={[
                "hsl(340, 82%, 56%)",
                "rgba(53, 162, 235, 0.8)",
              ]}
              cutout={90}
              legends={true}
            />
            <p>
              <BiMaleFemale />
            </p>
          </div>

          <DashboardTable data={data.transactions} />
        </section>
      </main>
    </div>
  );
};

interface WidgetItemProps {
  heading: string;
  value: number;
  percent: number;
  color: string;
  amount?: boolean;
}

const WidgetItem = ({
  heading,
  value,
  percent,
  color,
  amount = false,
}: WidgetItemProps) => (
  <article className="widget">
    <div className="widget-info">
      <p>{heading}</p>
      <h4>{amount ? `$${value}` : value}</h4>
      {percent > 0 ? (
        <span className="green">
          <HiTrendingUp /> +{percent}%
        </span>
      ) : (
        <span className="red">
          <HiTrendingDown /> {percent}%
        </span>
      )}
    </div>
    <div
      className="widget-circle"
      style={{
        background: `conic-gradient(
        ${color} ${(Math.abs(percent) / 100) * 360}deg,
        whitesmoke 0
      )`,
      }}
    >
      <span style={{ color }}>{percent}%</span>
    </div>
  </article>
);

interface CategoryItemProps {
  color: string;
  value: number;
  heading: string;
}

const CategoryItem = ({ color, value, heading }: CategoryItemProps) => (
  <div className="category-item">
    <h5>{heading}</h5>
    <div>
      <div style={{ backgroundColor: color, width: `${value}%` }}></div>
    </div>
    <span>{value}%</span>
  </div>
);

export default Dashboard;
