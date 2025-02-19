import { FC, MouseEventHandler, useState } from 'react';
import { themes } from '../../../theme';
import { AgText } from '../Ag/AgText';
import { useTheme } from '../../../app/context/ThemeContext';

type Props = {
  text: string;
  color: string;
  bgColor?: string;
  customClass?: string;
  clickFunction: MouseEventHandler<HTMLButtonElement>;
};

/**
 * Component to show a basic button 
 * @param text - string for text
 * @param color - string to add the color for text
 * @param bgColor - string to add the background color
 * @param customClass - (optional)string to pass aditional style
 * @param clickFunction - function to run when the button is clicked.
 */

const BasicButton: FC<Props> = ({ text, color, bgColor, customClass, clickFunction }) => {

  const [isHovered, setIsHovered] = useState(false);

  const {themeCustom} = useTheme();



  const buttonStyle = {
    width: '17.25em',
    maxWidth: '17.25em',
    height: '2.37em',
    borderRadius: '1.25em',
    backgroundColor: isHovered ? themes[themeCustom].colors.primaryOutline : bgColor,
    border: `1px solid ${themes[themeCustom].colors.borderColor}`,
    transition: 'all 0.3s, color 0.3s',
  };

  return (
    <button
      className={`d-flex justify-content-center align-items-center fourStep ${customClass}`}
      style={buttonStyle}
      onClick={clickFunction}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AgText text={text} color={isHovered ? themes[themeCustom].colors.background : color} />
    </button>
  );
};

export { BasicButton };

