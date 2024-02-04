import { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar";

const formatTime = (timeInMS: number) => {
    //60000ms = 1 min
    const mins = Math.floor(timeInMS / 6000);
    const sec = Math.floor((timeInMS % 6000) / 100);
    const ms = Math.floor(timeInMS % 100);

    const minsFormatted: string = mins.toString().padStart(2, "0");
    const secFormatted: string = sec.toString().padStart(2, "0");
    const msFormatted: string = ms.toString().padStart(2, "0");

    return `${minsFormatted}:${secFormatted}:${msFormatted}`;
};

const Stopwatch = () => {
    const [time, setTime] = useState<number>(0);
    const [isRunning, setIsRunning] = useState<boolean>(false);

    useEffect(() => {
        let interval: number;

        if (isRunning)
            interval = setInterval(() => {
                setTime((prev) => prev + 1);
            }, 10);

        return () => {
            clearInterval(interval);
        };
    }, [isRunning]);

    return (
        <div className="admin-container">
            <Sidebar />
            <main className="app-container">
                <h1>Stopwatch</h1>
                <section>
                    <div className="stopwatch">
                        <h2>{formatTime(time)}</h2>
                        <button onClick={() => setIsRunning((prev) => !prev)}>
                            {isRunning ? "Stop" : "Start"}
                        </button>
                        <button
                            onClick={() => {
                                setIsRunning(false);
                                setTime(0);
                            }}
                        >
                            Reset
                        </button>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Stopwatch;
