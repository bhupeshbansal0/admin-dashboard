import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loader from "./components/Loader";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Products = lazy(() => import("./pages/Products"));
const Customer = lazy(() => import("./pages/Customer"));
const Transaction = lazy(() => import("./pages/Transaction"));
const NewProduct = lazy(() => import("./pages/management/NewProduct"));
const ProductManagement = lazy(
    () => import("./pages/management/ProductManagement")
);
const TransactionManagement = lazy(
    () => import("./pages/management/TransactionManagement")
);
const BarCharts = lazy(() => import("./pages/charts/BarCharts"));
const LineCharts = lazy(() => import("./pages/charts/LineCharts"));
const PieCharts = lazy(() => import("./pages/charts/PieCharts"));

const Stopwatch = lazy(() => import("./pages/apps/Stopwatch"));
const Toss = lazy(() => import("./pages/apps/Toss"));
const Coupon = lazy(() => import("./pages/apps/Coupon"));

const App = () => {
    return (
        <Router>
            <Suspense fallback={<Loader />}>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Link
                                to={"/admin/dashboard"}
                                style={{
                                    cursor: "pointer",
                                    display: "flex",
                                    justifyContent: "center",
                                }}
                            >
                                Visit Dashboard
                            </Link>
                        }
                    />
                    <Route
                        path="/admin/dashboard"
                        element={<Dashboard />}
                    />
                    <Route
                        path="/admin/product"
                        element={<Products />}
                    />
                    <Route
                        path="/admin/customer"
                        element={<Customer />}
                    />
                    <Route
                        path="/admin/transaction"
                        element={<Transaction />}
                    />

                    <Route
                        path="/admin/product/new"
                        element={<NewProduct />}
                    />
                    <Route
                        path="/admin/product/:id"
                        element={<ProductManagement />}
                    />
                    <Route
                        path="/admin/transaction/:id"
                        element={<TransactionManagement />}
                    />

                    <Route
                        path="/admin/chart/bar"
                        element={<BarCharts />}
                    />
                    <Route
                        path="/admin/chart/line"
                        element={<LineCharts />}
                    />
                    <Route
                        path="/admin/chart/pie"
                        element={<PieCharts />}
                    />

                    <Route
                        path="/admin/app/stopwatch"
                        element={<Stopwatch />}
                    />
                    <Route
                        path="/admin/app/coupons"
                        element={<Coupon />}
                    />
                    <Route
                        path="/admin/app/toss"
                        element={<Toss />}
                    />
                </Routes>
            </Suspense>
        </Router>
    );
};

export default App;
