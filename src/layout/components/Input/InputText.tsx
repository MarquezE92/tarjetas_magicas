import { FC } from "react";
import { AgTextLabel } from "../Ag";

import { themes } from '../../../theme';
import { useTheme } from "../../../app/context/ThemeContext";


type Props = {
  typeInput: string;
  placeholderInput: string;
  name: string;
  customClass?: string;
  handleInput?: any
};

/**
 * Component to show a input with label
 * @param typeInput - string to specific the input type
 * @param placeholderInput - string to specific the input placeholder
 * @param name - string to specific the input name
 * @param customClass - (optional)string to pass aditional style
 * @param handleInput - (optional)function to handle the input
 */

const InputText: FC<Props> = ({
  typeInput,
  placeholderInput,
  customClass,
  name,
  handleInput
}) => {

  const { themeCustom } = useTheme()

  let fontFamily = themes[themeCustom].font ? themes[themeCustom].font?.fontFamily : 'Roboto'
  
  const handleChange = (event: React.FocusEvent<HTMLInputElement>) => { 

    handleInput(event)  
  }

  return (
    <div className="w-100">
      <AgTextLabel color={themes[themeCustom].colors.fontColor} text={placeholderInput} customClass={customClass}/>
      <input
        className="form-control w-100 fw-bold text-start mt-1 py-2"
        type={typeInput}
        name={name}
        onBlur={(event) => handleChange(event)}
        style={{
          fontFamily,
          fontSize: "1em",
          border: "none",
          outline: "none",
          borderRadius: "10px",
          backgroundColor: themes[themeCustom].colors.inputBackground,
          color: themes[themeCustom].colors.fontColor,
        }}
      />
    </div>
  );
};

export default InputText;
