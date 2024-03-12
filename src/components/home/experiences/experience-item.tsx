import React from "react";
import CalendarIcon from "../../../assets/icons/calendar.svg";

interface Props {
  title: string;
  company: string;
  date: string;
  url: string;
  description: React.ReactNode;
}

function ExperienceItem(props: Props) {
  return (
    <article className="max-w-content m-auto mb-12 experience-item">
      <div className="left flex flex-col items-center gap-4">
        <div className="calendar">
          <img src={CalendarIcon} alt="calendar-icon" />
        </div>
        <div className="yellow-line" />
      </div>
      <div className="right pb-2">
        <h3 className="text-green font-bold">
          {props.title} <span className="separator px-1 text-white">-</span>{" "}
          <span className="company text-yellow ">{props.company}</span>
        </h3>
        <h6 className="text-darkGreen">{props.date}</h6>
        {props.description}
        <a
          href={props.url}
          target="BLANK"
          className="text-yellow font-bold mt-4 block"
        >
          {props.url}
        </a>
      </div>
    </article>
  );
}

export default ExperienceItem;
