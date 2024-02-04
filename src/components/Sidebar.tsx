import { useEffect, useState } from "react";
import { IconType } from "react-icons";
import { AiFillFileText } from "react-icons/ai";
import {
    FaChartBar,
    FaChartLine,
    FaChartPie,
    FaGamepad,
    FaStopwatch,
} from "react-icons/fa";
import { HiMenuAlt1 } from "react-icons/hi";
import { IoIosPeople } from "react-icons/io";
import {
    RiCoupon3Fill,
    RiDashboardFill,
    RiShoppingBag3Fill,
} from "react-icons/ri";
import { Link, Location, useLocation } from "react-router-dom";

interface LiProps {
    url: string;
    text: string;
    Icon: IconType;
    location?: Location;
}

const Menus: { heading: string; value: LiProps[] }[] = [
    {
        heading: "Dashboard",
        value: [
            {
                url: "/admin/dashboard",
                text: "Dashboard",
                Icon: RiDashboardFill,
            },
            {
                url: "/admin/product",
                text: "Products",
                Icon: RiShoppingBag3Fill,
            },
            {
                url: "/admin/customer",
                text: "Customers",
                Icon: IoIosPeople,
            },
            {
                url: "/admin/transaction",
                text: "Transactions",
                Icon: AiFillFileText,
            },
        ],
    },
    {
        heading: "Charts",
        value: [
            {
                url: "/admin/chart/bar",
                text: "Bar",
                Icon: FaChartBar,
            },
            {
                url: "/admin/chart/pie",
                text: "Pie",
                Icon: FaChartPie,
            },
            {
                url: "/admin/chart/line",
                text: "Line",
                Icon: FaChartLine,
            },
        ],
    },
    {
        heading: "Apps",
        value: [
            {
                url: "/admin/app/stopwatch",
                text: "Stopwatch",
                Icon: FaStopwatch,
            },
            {
                url: "/admin/app/coupons",
                text: "Coupons",
                Icon: RiCoupon3Fill,
            },
            {
                url: "/admin/app/toss",
                text: "Toss",
                Icon: FaGamepad,
            },
        ],
    },
];

const Sidebar = () => {
    const location = useLocation();

    const [showModal, setShowModal] = useState<boolean>(false);
    const [phoneActive, setPhoneActive] = useState<boolean>(
        window.innerWidth < 1100
    );

    const resizeHandler = () => {
        setPhoneActive(window.innerWidth < 1100);
    };

    useEffect(() => {
        window.addEventListener("resize", resizeHandler);

        return () => {
            window.removeEventListener("resize", resizeHandler);
        };
    }, []);

    return (
        <>
            {phoneActive && (
                <button
                    id="hamburgerButton"
                    onClick={() => setShowModal(true)}
                >
                    <HiMenuAlt1 />
                </button>
            )}
            <aside
                style={
                    phoneActive
                        ? {
                              width: "20rem",
                              height: "100vh",
                              position: "fixed",
                              top: 0,
                              left: showModal ? "0" : "-20rem",
                              transition: "all 0.5s",

                              borderTopRightRadius: "15px",
                              borderBottomRightRadius: "15px",
                              border: "1px solid rgb(0, 0, 0, 0.525)",
                          }
                        : {}
                }
            >
                <h2>LOGO.</h2>
                {Menus.map((menu, index) => (
                    <SideMenu
                        key={index}
                        location={location}
                        heading={menu.heading}
                        items={menu.value}
                    />
                ))}
                {phoneActive && (
                    <button
                        id="close-sidebar"
                        onClick={() => {
                            setShowModal(false);
                        }}
                    >
                        Close
                    </button>
                )}
            </aside>
        </>
    );
};

const Li = ({ url, text, Icon, location }: LiProps) => (
    <li
        style={{
            backgroundColor: location?.pathname.includes(url)
                ? "rgba(1, 155, 255, 0.1)"
                : "#eee",
        }}
    >
        <Link
            to={url}
            style={{
                color: location?.pathname.includes(url)
                    ? "rgb0(0, 155, 255)"
                    : "black",
            }}
        >
            <Icon /> {text}
        </Link>
    </li>
);

const SideMenu = ({
    location,
    heading,
    items,
}: {
    location: Location;
    heading: string;
    items: LiProps[];
}) => (
    <div>
        <h5>{heading}</h5>
        <ul>
            {items.map((item, index) => (
                <Li
                    key={index}
                    url={item.url}
                    text={item.text}
                    Icon={item.Icon}
                    location={location}
                />
            ))}
        </ul>
    </div>
);

export default Sidebar;
