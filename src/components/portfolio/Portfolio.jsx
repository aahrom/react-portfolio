import React, { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import { workPortfolio, personalPortfolio, allPortfolio } from "../../data.js";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function Portfolio() {
  const [selected, setSelected] = useState("all");
  const [data, setData] = useState([]);

  const list = [
    {
      id: "all",
      title: "All Projects"
    },
    {
      id: "work",
      title: "Work Projects"
    },
    {
      id: "personal",
      title: "Personal Projects"
    }
  ];

  useEffect(() => {
    switch (selected) {
      case "work":
        setData(workPortfolio);
        break;
      case "personal":
        setData(personalPortfolio);
        break;
      case "all":
        setData(allPortfolio);
        break;
      default:
        setData(workPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <Card style={{ width: "330px", height: "360px", margin: "20px" }}>
            <Card.Body>
              <Card.Title>{d.title}</Card.Title>
              <Card.Text style={{ overflow: "hidden" }}>
                {d.description}
                <br />
                <span className="tools">Tools used: {d.tools}</span>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button variant="primary" style={{ width: "100%" }}>
                Learn More
              </Button>
            </Card.Footer>
          </Card>
        ))}
      </div>
    </div>
  );
}
