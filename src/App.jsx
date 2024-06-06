import BubbleSort from "./components/bubbelsort";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import Sorting from "./components/sorting";

const App = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="sorting" element={<Sorting />}>
                    <Route path="bubble-sort" element={<BubbleSort />} />
                    <Route path="merge-sort" element={<BubbleSort />} />
                </Route>
            </Route>
        </Routes>
    </BrowserRouter>
);

export default App;
