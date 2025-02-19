import { AgTextLabel } from "../../../layout/components/Ag";
import { themes } from "../../../theme";
import Lottie from "lottie-react";
import animationData from "../../../media/animations/frosti.json";
import { useTheme } from "../../context/ThemeContext";

//This section is the Loading Page in the application flow

const LoadingPage = () => {
  const { themeCustom } = useTheme();
  return (
    <div className="d-flex flex-column align-items-center">
      <div className="d-flex flex-column w-75">
        <div>
          <Lottie animationData={animationData} />
        </div>
      </div>
      <div className="w-50 text-center mb-5">
        <AgTextLabel
          color={themes[themeCustom].colors.fontColor}
          text={"Cargando..."}
        />
      </div>
    </div>
  );
};

export default LoadingPage;
