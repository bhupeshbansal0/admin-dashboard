import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ChartData,
    ChartOptions,
    ArcElement,
    PointElement,
    LineElement,
    Filler,
} from "chart.js";
import { Bar, Doughnut, Line, Pie } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    PointElement,
    LineElement,
    Filler
);

const months = ["January", "February", "March", "April", "May", "June", "July"];

interface BarChartProps {
    horizonal?: boolean;
    data_1: number[];
    data_2: number[];
    title1: string;
    title2: string;
    bgColor1: string;
    bgColor2: string;
    labels?: string[];
}

export const BarChart = ({
    horizonal = false,
    data_1 = [],
    data_2 = [],
    title1,
    title2,
    bgColor1,
    bgColor2,
    labels = months,
}: BarChartProps) => {
    const BarOptions: ChartOptions<"bar"> = {
        indexAxis: horizonal ? ("y" as const) : "x",
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: false,
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    display: false,
                },
            },
            x: {
                grid: {
                    display: false,
                },
            },
        },
    };

    const BarData: ChartData<"bar", number[], string> = {
        labels,
        datasets: [
            {
                label: title1,
                data: data_1,
                backgroundColor: bgColor1,
                barThickness: "flex",
                barPercentage: 1,
                categoryPercentage: 0.4,
            },
            {
                label: title2,
                data: data_2,
                backgroundColor: bgColor2,
                barThickness: "flex",
                barPercentage: 1,
                categoryPercentage: 0.5,
            },
        ],
    };

    return (
        <Bar
            width={horizonal ? "200%" : ""}
            options={BarOptions}
            data={BarData}
        />
    );
};

interface DoughnutChartProps {
    labels: string[];
    data: number[];
    bgColor: string[];
    cutout?: number | string;
    legends?: boolean;
    offset?: number[];
}

export const DoughnutChart = ({
    labels,
    data,
    bgColor,
    cutout,
    legends = true,
    offset,
}: DoughnutChartProps) => {
    const DoughnutData: ChartData<"doughnut", number[], string> = {
        labels,
        datasets: [
            {
                data,
                backgroundColor: bgColor,
                borderWidth: 0,
                offset,
            },
        ],
    };

    const DoughnutOptions: ChartOptions<"doughnut"> = {
        responsive: true,
        plugins: {
            legend: {
                display: legends,
                position: "bottom",
                labels: {
                    padding: 40,
                },
            },
        },
        cutout,
    };

    return (
        <Doughnut
            data={DoughnutData}
            options={DoughnutOptions}
        />
    );
};

interface PieChartProps {
    labels: string[];
    data: number[];
    bgColor: string[];
    offset?: number[];
}

export const PieChart = ({ labels, data, bgColor, offset }: PieChartProps) => {
    const PieData: ChartData<"pie", number[], string> = {
        labels,
        datasets: [
            {
                data,
                backgroundColor: bgColor,
                borderWidth: 1,
                offset,
            },
        ],
    };

    const PieOptions: ChartOptions<"pie"> = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
                position: "bottom",
                labels: {
                    padding: 40,
                },
            },
        },
    };

    return (
        <Pie
            data={PieData}
            options={PieOptions}
        />
    );
};

interface LineChartProps {
    data: number[];
    label: string;
    backgroundColor: string;
    borderColor: string;
    labels?: string[];
}

export const LineChart = ({
    data,
    label,
    backgroundColor,
    borderColor,
    labels = months,
}: LineChartProps) => {
    const LineOptions: ChartOptions<"line"> = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: false,
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    display: false,
                },
            },
            x: {
                grid: {
                    display: false,
                },
            },
        },
    };

    const LineData: ChartData<"line", number[], string> = {
        labels,
        datasets: [{ fill: true, label, data, backgroundColor, borderColor }],
    };

    return (
        <Line
            options={LineOptions}
            data={LineData}
        />
    );
};
