import Sidebar from "../../components/Sidebar";
import { LineChart } from "../../components/Charts";

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

const LineCharts = () => {
    return (
        <div className="admin-container">
            <Sidebar />
            <main className="chart-container">
                <h1>Line Charts</h1>
                <section>
                    <LineChart
                        data={[
                            200, 444, 444, 556, 778, 455, 990, 1444, 256, 447,
                            1000, 1200,
                        ]}
                        label="Users"
                        backgroundColor={`rgba(30, 81, 123, 0.5)`}
                        borderColor={"rgba(30, 81, 123)"}
                        labels={months}
                    />
                    <h2>Active Users</h2>
                </section>
                <section>
                    <LineChart
                        data={[
                            40, 30, 76, 100, 143, 120, 41, 57, 140, 244, 55, 92,
                        ]}
                        label="Products"
                        backgroundColor={`rgba(211, 84, 0, 0.5)`}
                        borderColor={"rgba(211, 84, 0)"}
                        labels={months}
                    />
                    <h2>Total Products</h2>
                </section>
                <section>
                    <LineChart
                        data={[
                            24000, 14400, 24100, 34300, 90000, 20000, 25600,
                            44700, 99000, 144400, 100000, 120000,
                        ]}
                        label="Revenue"
                        backgroundColor={`rgba(46, 204, 113, 0.5)`}
                        borderColor={"rgba(46, 204, 113)"}
                        labels={months}
                    />
                    <h2>Total Revenue</h2>
                </section>
                <section>
                    <LineChart
                        data={[
                            9000, 12000, 12000, 9000, 6000, 5000, 12000, 10000,
                            9000, 15000, 9000, 5000,
                        ]}
                        label="Discount"
                        backgroundColor={`rgba(175, 65, 84, 0.5)`}
                        borderColor={"rgba(175, 65, 84)"}
                        labels={months}
                    />
                    <h2>Discount Allotted</h2>
                </section>
            </main>
        </div>
    );
};

export default LineCharts;
