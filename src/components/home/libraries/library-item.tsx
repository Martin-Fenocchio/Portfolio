import React from "react";
import PubIcon from "../../../assets/icons/pub-dev.svg";

interface Props {
  title: string;
  image: string;
  description: React.ReactNode;
}

function LibraryItem(props: Props) {
  return (
    <div className="library-item">
      <div className="left">
        <h3>{props.title}</h3>
        {props.description}
        <button>
          Ver en Pub.Dev <img src={PubIcon} alt="pub-dev-icon" />
        </button>
      </div>
      <div className="right">
        <img src={props.image} alt={props.title} />
      </div>
    </div>
  );
}

export default LibraryItem;
