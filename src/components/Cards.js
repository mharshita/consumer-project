import CustomCard from "ui-library/dist/CustomCard.js";
import data from "../data.json";
import "../styles/Cards.css";

const Cards = () => {
  return (
    <div className="container">
      {data.map((content) => (
        <CustomCard
          header={content.header}
          content={content.content}
          footer={content.footer}
          variant={content.variant}
          key={content.id}
        />
      ))}
    </div>
  );
};

export default Cards;
