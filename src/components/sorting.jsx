import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

const Sorting = () => {
    const [array, setArray] = useState([]);
    const [input, setInput] = useState("");
    const [generateOption, setGenerateOption] = useState("0");
    const minLength = 3,
        maxLength = 13;

    const updateArray = (array) => {
        setArray(array);
        setInput(array.join(","));
    };

    const handleBlur = () => {
        if (generateOption === "0") return;
        const sortedArray = sortArray([...array], generateOption);
        updateArray(sortedArray);
    };

    const generateArray = () => {
        const length =
            Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
        const newArray = Array.from({ length }, () =>
            Math.floor(Math.random() * 500),
        );
        const sortedArray = sortArray(newArray, generateOption);
        updateArray(sortedArray);
    };

    const sortArray = (arr, option) => {
        let sortedArray = [...arr];
        if (option === "0") {
            sortedArray.sort(() => Math.random() - 0.5);
        } else if (option === "1") {
            sortedArray.sort((a, b) => a - b);
        } else {
            sortedArray.sort((a, b) => b - a);
        }
        return sortedArray;
    };

    const onChangeGenerateOption = (e) => {
        const newOption = e.target.value;
        const sortedArray = sortArray([...array], newOption);
        setGenerateOption(newOption);
        updateArray(sortedArray);
    };

    const convertInputToArrayString = (input) => {
        input = input.replace(/\s/g, "");
        input = input.replace(/\d{4}/g, "");
        input = input.replace(/\s\s/g, " ");
        input = input.replace(/\s,/g, ",");
        input = input.replace(/,,/g, ",");
        input = input.replace(/[^0-9,\s]/g, "");
        return input.split(",").join(", ").trim();
    };

    const convertArrayStringToArray = (input) => {
        return input
            .split(",")
            .filter((v) => v !== "")
            .map((v) => +v);
    };

    const handleChange = (e) => {
        const inputAsStr = convertInputToArrayString(e.target.value);
        setInput(inputAsStr);
        const inputAsArray = convertArrayStringToArray(inputAsStr);
        setArray(inputAsArray);
    };

    useEffect(() => {
        generateArray();
    }, []);

    return (
        <div>
            <div>
                <Outlet context={array} />
            </div>

            <form
                className="bg-red-200 p-3"
                onBlur={handleBlur}
                onSubmit={(e) => e.preventDefault()}
            >
                <button
                    onClick={generateArray}
                    className="rounded-3xl bg-blue-600 p-2 capitalize text-white"
                >
                    generate
                </button>
                <select
                    onChange={onChangeGenerateOption}
                    value={generateOption}
                >
                    <option value="0">random</option>
                    <option value="1">ascending</option>
                    <option value="-1">descending</option>
                </select>
                <input
                    className={`w-full placeholder:capitalize ${input === "" ? "outline outline-red-600" : ""}`}
                    placeholder="number to sort (comma separate - max 3 digits)"
                    value={input}
                    onChange={handleChange}
                />
            </form>
        </div>
    );
};

export default Sorting;
