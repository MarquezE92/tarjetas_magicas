import { AgText } from "../../../layout/components/Ag";
import { BasicButton } from "../../../layout/components/Button";
import { themes } from "../../../theme";

import { useNavigate } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

//This page is the second in the application flow

const OptionsPages = () => {
  const { themeCustom } = useTheme();

  const customIcon = themes[themeCustom].images?.customIcon
  ? themes[themeCustom].images?.customIcon
  : null;


  const chooseImage = themes[themeCustom].images?.choose
    ? themes[themeCustom].images?.choose
    : themes["default"].images?.choose;

  const chooseImageStar = themes[themeCustom].images?.star
    ? themes[themeCustom].images?.star
    : themes["default"].images?.star;

  const navigate = useNavigate();

  const styleImg = {
    width: "21.5",
    height: "9.4em",
  };

  const styleImgLogo = {
    width: "7em",
    height: "3em",
  };

  const styleImgStar = {
    width: "2.6em",
    height: "2.6em",
  };

  return (
    <div className="d-flex flex-column align-items-center">
      {/* <div className="w-75 text-center mb-5">
        <AgText
          color={themes[themeCustom].colors.fontColor}
          text={"¿Cómo quieres enviar tu saludo?"}
        />
      </div> */}
      <div className="w-75 text-center mb-5">
        <img
          src={chooseImageStar}
          style={styleImgStar}
          className="align-self-end"
          alt="img of polo north express "
        />
      </div>

      <div className="mt-4">
        <BasicButton
          customClass="mb-4"
          bgColor={themes[themeCustom].colors.backgroundButton}
          text={"Mensaje de Santa"}
          color={themes[themeCustom].colors.primaryOutline}
          clickFunction={() => navigate("/create/write")}
        />
        <BasicButton
          bgColor={themes[themeCustom].colors.backgroundButton}
          customClass={"mb-5"}
          text={"Mensaje personal"}
          color={themes[themeCustom].colors.primaryOutline}
          clickFunction={() => navigate("/create/record")}
        />
      </div>
      <div className="d-flex flex-column w-100 mt-5 mb-4">
        <img
          src={chooseImage}
          style={styleImg}
          className="align-self-end"
          alt="img of polo north express "
        />
      </div>
        {customIcon && (
          <div className="d-flex flex-column align-items-center mt-5">
            <img src={customIcon} style={styleImgLogo} alt="img of company" />
          </div>
        )}
      </div>
 
  );
};

export default OptionsPages;
