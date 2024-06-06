import React, { useState, useEffect } from "react";

const BubbleSort = () => {
    const [array, setArray] = useState([]);
    const [isSorting, setIsSorting] = useState(false);
    const [comparing, setComparing] = useState([-1, -1]);
    const [swapping, setSwapping] = useState([-1, -1]);

    useEffect(() => {
        resetArray();
    }, []);

    const resetArray = () => {
        const newArr = Array.from({ length: 20 }, () =>
            Math.floor(Math.random() * 100),
        );
        setArray(newArr);
        setComparing([-1, -1]);
        setSwapping([-1, -1]);
    };

    const bubbleSort = async () => {
        setIsSorting(true);
        let arr = array.slice();
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length - i - 1; j++) {
                setComparing([j, j + 1]);
                await new Promise((resolve) => setTimeout(resolve, 300)); // Delay for comparison animation
                if (arr[j] > arr[j + 1]) {
                    setSwapping([j, j + 1]);
                    await new Promise((resolve) => setTimeout(resolve, 1000)); // Delay for swap animation
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                    setArray([...arr]);
                    setSwapping([-1, -1]);
                }
            }
        }
        setComparing([-1, -1]);
        setIsSorting(false);
    };

    return (
        <div className="visualizer flex flex-col items-center p-4">
            <div className="array-container relative mb-4 flex h-64 flex-wrap items-end justify-center">
                {array.map((value, idx) => (
                    <div
                        key={idx}
                        className={`array-cell m-1 text-center text-white ${
                            comparing.includes(idx)
                                ? "bg-yellow-500"
                                : "bg-blue-500"
                        } ${
                            swapping.includes(idx)
                                ? "transform transition-transform duration-1000"
                                : ""
                        }`}
                        style={{
                            height: "2rem",
                            width: "2rem",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            position: "absolute",
                            transform:
                                swapping.includes(idx) &&
                                (idx === swapping[0]
                                    ? "translateY(-3rem)"
                                    : "translateY(3rem)"),
                            transition:
                                swapping.includes(idx) &&
                                (idx === swapping[0]
                                    ? "transform 1s ease-out"
                                    : "transform 1s ease-in"),
                            left: `${idx * 2.5}rem`,
                            bottom: "0rem",
                        }}
                    >
                        {value}
                    </div>
                ))}
            </div>
            <div className="flex space-x-2">
                <button
                    className="btn-reset rounded bg-gray-300 px-4 py-2 font-bold text-gray-800 hover:bg-gray-400"
                    onClick={resetArray}
                    disabled={isSorting}
                >
                    Reset Array
                </button>
                <button
                    className="btn-sort rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
                    onClick={bubbleSort}
                    disabled={isSorting}
                >
                    Start Bubble Sort
                </button>
            </div>
        </div>
    );
};

export default BubbleSort;
