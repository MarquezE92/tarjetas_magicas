import { AgText, AgTextLabel, AgTextSmall } from "../../../layout/components/Ag";
import { BasicButton } from "../../../layout/components/Button";
import { themes } from "../../../theme";
import { CodeInput } from "../../../layout/components/Input";
import { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import { useNavigate } from 'react-router-dom';
//This page is the first in the application flow, when the final client recibe the message


const WelcomeSantaMess = () => {
 
const [valueInput, setValueInput ] = useState("");
const { themeCustom } = useTheme();
const navigate = useNavigate()

 

  const imageSanta = themes[themeCustom].images?.welcome
    ? themes[themeCustom].images?.welcome
    : themes['default'].images?.welcome;
  
  const customIcon = themes[themeCustom].images?.customIcon
    ? themes[themeCustom].images?.customIcon
    : null
  
// "/assets/icons/santa2.svg";
  const styleImg = {
    width: "15em",
    height: "10em",
  };

  const getMessageResponse = () =>{
    navigate(`/greeting/${valueInput}`)
  }


  return (
    <div className="d-flex flex-column align-items-center">
      <div className="w-75 text-center mb-5">
        <AgText
          customClass="fw-bold"
          color={themes[themeCustom].colors.fontColor}
          text={"¡Bienvenido!"}
        />
      </div>
      <div className="d-flex flex-column w-100 mb-3">
        <img
          src={imageSanta}
          style={styleImg}
          className="align-self-end justify-content-end"
          alt="img of polo north express "
        />
      </div>

      <div className="mt-4 mb-4 d-flex flex-column align-items-center">
        <AgTextSmall
          customClass="text-center mb-1 w-75 px-1"
          text={"Escribe el código que se encuentra en tu Tarjeta Mágica"}
          color={themes[themeCustom].colors.fontColor}
        />
        <div className="px-3 mb-1 mt-2 w-75">
          <CodeInput valueInput={valueInput} setValueInput={setValueInput}/>
        </div>

        {/* <AgTextLabel
          text={"Código de la etiqueta"}
          color={themes[themeCustom].colors.fontColor}
        /> */}
      </div>

        <div className="mt-4">
          <BasicButton
            bgColor={themes[themeCustom].colors.backgroundButton}
            customClass={"mb-3"}
            text={"Confirmar"}
            color={themes[themeCustom].colors.primaryOutline}
            clickFunction={getMessageResponse}
          />
          {customIcon &&
            <div className="d-flex flex-column align-items-center mt-5">
              <img src={customIcon} className="w-50" alt="img of company" />
            </div>
          }
        </div>
     
    </div>
  );
};

export default WelcomeSantaMess;
