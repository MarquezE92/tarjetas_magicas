import { useNavigate } from "react-router-dom";
import { AgText, AgTextLabel } from "../../../layout/components/Ag";
import { BasicButton } from "../../../layout/components/Button";
import { themes } from "../../../theme";
import { useTheme } from "../../context/ThemeContext";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";

//This section is the Error Page in the application flow

const ErrorPage = () => {
  let user = JSON.parse(localStorage.getItem("user") || "{}");
  const { themeCustom } = useTheme();
  const navigate = useNavigate();

  const handleContinuar = ()=> {
    if(user.name){
       navigate("/create/choose")
      } else {
       navigate("/create/new")
      }
  }

  const background = themes[themeCustom].backgroundImage
    ? themes[themeCustom].backgroundImage
    : "";

  const backgroundCss = {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  const awwImage = themes[themeCustom].images?.aww
    ? themes[themeCustom].images?.aww
    : themes["default"].images?.aww;

  const customIcon = themes[themeCustom].images?.customIcon
    ? themes[themeCustom].images?.customIcon
    : null;

  const styleImg = {
    width: "19em",
    height: "14em",
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
            customClass="fw-bold"
            color={themes[themeCustom].colors.fontColor}
            text={"¡Oh no! hubo un problema con tu saludo!"}
          />
        </div>
        <div className="d-flex flex-column w-100 mb-4">
          <img
            src={awwImage}
            style={styleImg}
            className="align-self-center"
            alt="img of polo north express "
          />
        </div>
        <div className="w-50 text-center mb-5">
          <AgTextLabel
            color={themes[themeCustom].colors.fontColor}
            text={"Intenta nuevamente en unos momentos"}
          />
        </div>
        <div
          className={
            customIcon ? "d-flex flex-column align-items-center" : "mt-2 mb-5"
          }
        >
          <BasicButton
            bgColor={themes[themeCustom].colors.backgroundButton}
            text={"Continuar"}
            color={themes[themeCustom].colors.primaryOutline}
            clickFunction={handleContinuar}
          />
          {customIcon && (
            <div className="d-flex flex-column align-items-center mt-4">
              <img src={customIcon} style={styleImgLogo} alt="img of company" />
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ErrorPage;
