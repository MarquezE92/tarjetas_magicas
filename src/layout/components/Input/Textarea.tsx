import { FC, useState } from "react";
import { themes } from "../../../theme";
import { AgTextLabel } from "../Ag";
import { useTheme } from "../../../app/context/ThemeContext";


type Props = {
  placeholderInput: string;
  customClass?: string;
  cleanError?: Function;
};

/**
 * Component to show a input with label
 * @param placeholderInput - string to specific the input placeholder
 * @param customClass - (optional)string to pass aditional style
 */

const Textarea: FC<Props> = ({ placeholderInput, cleanError }) => {

  const { themeCustom } = useTheme()
    /**
     * static css for the component
     */
  
  let fontFamily = themes[themeCustom].font ? themes[themeCustom].font?.fontFamily : 'Roboto'

  const MAX_LENGTH = 350;
  //get user from local storage
  let user = JSON.parse(localStorage.getItem("user") || "{}");
  
  const [count, setCount] = useState(0)
  const [disabled, setDisabled] = useState(false)

  const handleChange = (e:any) => { 
  const { value } = e.target
  cleanError && cleanError(false)
    setCount(value.length)
    
    if (count >= MAX_LENGTH) {
      setDisabled(true)
    } else {
      setDisabled(false)
    }

  }


  const handleBlur = (e: any) => {
     user = { ...user, message: e.target.value }
    
    localStorage.setItem("user", JSON.stringify(user));

  };


  return (
    <div className="w-100">
      {/* <AgTextLabel customClass="text-center" color={themes[themeCustom].colors.fontColor} text={placeholderInput} /> */}
      
      <textarea
        className="form-control w-100 fw-bold text-start py-2"
        placeholder={placeholderInput}
        onBlur={(e: any) => handleBlur(e)}
        onChange={(e) => { handleChange(e) }}
        style={{
          fontFamily,
          height:"8em",
          maxHeight: "10em",
          fontSize: "1em",
          border: "none",
          outline: "none",
          borderRadius: "10px",
          backgroundColor: themes['default'].colors.inputBackground,
          color: "black",
        }}
      />
      {disabled ? <AgTextLabel customClass="text-center text-danger" color={themes[themeCustom].colors.fontColor} text="Has superado el limite de caracteres" /> : null }
      <AgTextLabel customClass={`text-end ${ disabled ? 'text-danger' : ''}`} color={themes[themeCustom].colors.fontColor} text={`${count} / ${MAX_LENGTH} caracteres`} />
    </div>
  );
};

export default Textarea;