import React, { useState } from "react";
import { AgTextSmall } from "../Ag/index";
import { ButtonWithIcon } from "../Button";
import { Cicle } from "../Button/Cicle";


type CardProps = {
  title: string;
  cicleColor: string;
  backgroundColorCard?: string;
  subtitle: string;
};

/**
 * This Component create a Card Recording with text, icon, and circle.
 *
 * @param title - string with the title
 * @param subtitle - string with the subtitletitle
 * @param backgroundColorCard - string with color for background color
 * @param cicleColor - string with color for circle
 */

const CardRecording: React.FC<CardProps> = ({
  title,
  backgroundColorCard,
  subtitle,
  cicleColor,
}) => {

  const [isHovered, setIsHovered] = useState(false);

  const icon = "/assets/icons/microfone.svg";
  const iconHover = "/assets/icons/microphoneFill.svg"
  

  const cardStyle = {
    borderRadius: "0.75em",
    backgroundColor: backgroundColorCard,
  };

  const smallCardStyle = {
    borderRadius: "0.75em",
    backgroundColor: "white",
  };

  return (
    <div
      className="card d-flex justify-content-between w-100 mx-4 mb-4 flex-column flex-column align-items-center px-2 py-3 m-0"
      style={cardStyle}
    >
      <div
        className="card d-flex flex-column align-items-start w-100 py-2 px-3 mb-5"
        style={smallCardStyle}
      >
        <div className="d-flex flex-row justify-content-between w-100">
          <AgTextSmall text={title} customClass="fw-bold" />
          <Cicle cicleColor={cicleColor} />
        </div>

        <AgTextSmall text={subtitle} />
      </div>

      <ButtonWithIcon
      setIsHovered={setIsHovered}
        bgColor="white"
        icon={isHovered ? iconHover : icon}
        clickFunction={() => console.log("grabando")}
      />
    </div>
  );
};

export { CardRecording };
