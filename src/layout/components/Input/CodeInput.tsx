import  { FC, useState } from "react";
import { themes } from "../../../theme";
import { useTheme } from "../../../app/context/ThemeContext";

interface Props {
  valueInput: string;
  setValueInput: (value: string) => void;
}

/**
 * Component used to customize input for code send
 */

const CodeInput:FC<Props> = ({ valueInput, setValueInput }) => {
  
  const { themeCustom } = useTheme();

  let fontFamily = themes[themeCustom].font ? themes[themeCustom].font?.fontFamily : 'Roboto'
  
  
  // const [valueInput, setValueInput ] = useState<string>(value ? value : "");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueInput(e.target.value);
  }

  return (
    <div className="w-100 ">
        <input
          className="form-control w-100 fw-bold text-center"
          type="text"
          value={valueInput}
        style={{
            fontFamily,
            fontSize: "1.5em",
            border: "none",
            outline: "none",
            borderRadius: "4px",
            backgroundColor: themes[themeCustom].colors.inputBackground,
            color: themes[themeCustom].colors.colorCode
          }}
          onChange={handleChange}
        />
    </div>
  );
};

export { CodeInput };
