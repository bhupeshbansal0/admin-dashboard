import { BarChart } from "../../components/Charts";
import Sidebar from "../../components/Sidebar";

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const BarCharts = () => {
    return (
        <div className="admin-container">
            <Sidebar />
            <main className="chart-container">
                <h1>Bar Charts</h1>
                <section>
                    <BarChart
                        data_1={[300, 144, 433, 655, 237, 755, 190]}
                        data_2={[200, 444, 333, 505, 327, 575, 910]}
                        title1="Products"
                        title2="Users"
                        bgColor1={`#37B5B6`}
                        bgColor2={"#FC6736"}
                    />
                    <h2>Top Selling Products and Top Customers</h2>
                </section>
                <section>
                    <BarChart
                        horizonal={true}
                        data_1={[
                            200, 444, 343, 556, 778, 455, 990, 444, 122, 334,
                            890, 909,
                        ]}
                        data_2={[]}
                        title1="Orders"
                        title2=""
                        bgColor1={`#37B5B6`}
                        bgColor2={"#FC6736"}
                        labels={months}
                    />
                    <h2>Orders throughout the year</h2>
                </section>
            </main>
        </div>
    );
};

export default BarCharts;
