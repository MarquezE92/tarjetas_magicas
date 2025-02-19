
import { FC, MouseEventHandler, Dispatch, SetStateAction } from 'react';

type Props = {
  setIsHovered: Dispatch<SetStateAction<boolean>>;
  bgColor: string;
  icon?: string;
  colorIcon?: string;
  customClass?: string;
  clickFunction: MouseEventHandler<HTMLButtonElement>;
};

/**
 * Component to show a basic button 
 * @param icon - string with icon img
 * @param colorIcon - string to add the color for icon
 * @param setIsHovered - function to change the boolean and help to set the img
 * @param bgColor - string to add the background color
 * @param customClass - (optional)string to pass aditional style
 * @param clickFunction - function to run when the button is clicked.
 */

const ButtonWithIcon: FC<Props> = ({
  setIsHovered,
  bgColor,
  icon,
  colorIcon = 'dark',
  customClass,
  clickFunction
}) => {
  const buttonStyle = {
    borderRadius: '50%',
    width: '3.7em',
    height: '3.7em',
    backgroundColor: bgColor
  };

  return (
    <button
      style={buttonStyle}
      className={`border-0 d-flex justify-content-center align-items-center ${customClass}`}
      onClick={clickFunction}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={icon} alt="icon"></img>
    </button>
  );
};

export {ButtonWithIcon};
