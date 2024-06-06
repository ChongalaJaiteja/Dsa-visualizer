import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const AccordionUsage = ({ title, items }) => {
    const generateLinkPath = (title, item) => {
        const formattedTitle = title.toLowerCase();
        const formattedItem = item.split(" ").join("-").toLowerCase();
        return `${formattedTitle}/${formattedItem}`;
    };
    return (
        <div>
            <Accordion className="accordion">
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    className="accordion-summary"
                >
                    {title}
                </AccordionSummary>
                <AccordionDetails className="accordion-details">
                    <ul>
                        {items.map((item, index) => (
                            <li key={index}>
                                <Link to={generateLinkPath(title, item)}>
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </AccordionDetails>
            </Accordion>
        </div>
    );
};

export default AccordionUsage;
