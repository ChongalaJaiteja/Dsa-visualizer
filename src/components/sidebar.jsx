import { stack as Menu } from "react-burger-menu";
import { useEffect, useState } from "react";
import AccordionUsage from "./accordion";
import { useLocation } from "react-router-dom";

const SideBar = () => {
    const location = useLocation();
    const sideBarItems = [
        {
            category: "sorting",
            items: [
                "Bubble Sort",
                "Merge Sort",
                "Quick Sort",
                "Selection Sort",
                "Insertion Sort",
                "Heap Sort",
            ],
        },
        {
            category: "searching",
            items: ["Linear Search", "Binary Search"],
        },
    ];

    var styles = {
        bmBurgerBars: {
            background: "#373a47",
        },
        bmBurgerBarsHover: {
            background: "#a90000",
        },
        bmCrossButton: {
            height: "24px",
            width: "24px",
        },
        bmCross: {
            background: "#bdc3c7",
        },
        bmMenuWrap: {
            position: "fixed",
            height: "100%",
            left: "0",
            top: "0",
        },
        bmMenu: {
            background: "#373a47",
            padding: "1.7em 0.8em 0",
            fontSize: "1.15em",
            overflow: "hidden",
        },
        bmMorphShape: {
            fill: "#373a47",
        },
        bmItemList: {
            color: "white",
            padding: "0.8em",
        },
        bmItem: {
            display: "inline-block",
        },
        bmOverlay: {
            background: "rgba(0, 0, 0, 0.3)",
            top: "0",
            left: "0",
        },
    };

    const [menuOpenState, setMenuOpenState] = useState(false);
    useEffect(() => {
        setMenuOpenState(false);
    }, [location]);

    return (
        <Menu
            styles={styles}
            burgerButtonClassName="relative w-6 h-5 sm:w-7 sm:h-6 md:w-8"
            isOpen={menuOpenState}
            onStateChange={(newState) => setMenuOpenState(newState.isOpen)}
        >
            <div className="h-full w-full space-y-2">
                <h1 className="xs:text-lg mb-5 text-center text-sm font-bold  capitalize  text-primary  md:text-xl lg:text-2xl">
                    sudoku board
                </h1>
                <ul className="h-[84%] space-y-3 sm:space-y-1">
                    {sideBarItems.map(({ category, items }, index) => (
                        <li key={index}>
                            <AccordionUsage title={category} items={items} />
                        </li>
                    ))}
                </ul>
                <p className="xs:text-sm text-xs  font-medium md:text-base lg:text-lg">
                    Copyright &copy; {new Date().getFullYear()} Jai teja. All
                    rights reserved.
                </p>
            </div>
        </Menu>
    );
};

export default SideBar;
