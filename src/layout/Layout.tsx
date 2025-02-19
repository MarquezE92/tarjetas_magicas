import { Outlet } from "react-router-dom";
import { useTheme } from "../app/context/ThemeContext";
import Header from "../components/Header";
import { themes } from "../theme";
import Footer from "../components/Footer";

export const Layout = () => {
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

  return (
    <div
      className="app-container d-flex flex-column justify-content-between"
      style={backgroundCss}
    >
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
