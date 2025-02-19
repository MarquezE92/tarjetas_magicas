import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import { AgText, AgTextLabel } from "../../../layout/components/Ag";
import { BasicButton } from "../../../layout/components/Button";
import { themes } from "../../../theme";
import { useTheme } from "../../context/ThemeContext";
import { useNavigate } from "react-router-dom";

//This section is the Error Page in the application flow

const ErrorPage404 = () => {
  const { themeCustom } = useTheme();

  const background = themes[themeCustom].backgroundImage
    ? themes[themeCustom].backgroundImage
    : "";

  const backgroundCss = {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  const icon = themes[themeCustom].images?.customIcon
    ? themes[themeCustom].images?.customIcon
    : null;

  const imageError404 = themes[themeCustom].images?.error404
    ? themes[themeCustom].images?.error404
    : themes["default"].images?.error404;

  const navigate = useNavigate();

  const styleImg = {
    width: "19em",
    height: "12em",
  };

  const styleImgLogo = {
    width: "7em",
    height: "3em",
  };

  return (
    <div
      className="app-container d-flex flex-column justify-content-between"
      style={backgroundCss}
    >
      <Header />
      <div className="d-flex flex-column align-items-center">
        <div className="w-75 text-center mb-5">
          <AgText
            color={themes[themeCustom].colors.fontColor}
            text={"La página que buscas no existe"}
          />
        </div>
        <div className="d-flex flex-column w-100 mb-5">
          <img
            src={imageError404}
            style={styleImg}
            className="align-self-center"
            alt="img of light "
          />
        </div>
        <div className="w-50 text-center mb-5">
          <AgTextLabel
            color={themes[themeCustom].colors.fontColor}
            text={"Verifica el link e intenta de nuevo"}
          />
        </div>

        <div
          className={`${
            icon ? "d-flex flex-column align-items-center" : "mt-2 mb-5"
          } `}
        >
          <BasicButton
            bgColor={themes[themeCustom].colors.backgroundButton}
            text={"Continuar"}
            color={themes[themeCustom].colors.primaryOutline}
            clickFunction={() => navigate("/greeting")}
          />
          {icon && (
            <div className="d-flex flex-column align-items-center mt-5">
              <img src={icon} style={styleImgLogo} alt="img of company" />
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ErrorPage404;
