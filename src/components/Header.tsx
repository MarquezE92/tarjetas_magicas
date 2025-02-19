
import LittleCord from "./LittleCord";
import { useLocation, useNavigate } from "react-router-dom";
import { ButtonWithIcon } from "../layout/components/Button";
import { useTheme } from "../app/context/ThemeContext";
import { themes } from "../theme";


/**
 *  Header component
 * This component has a little cord, img and line
 * @returns 
 */
const Header = () => {
  
  const { themeCustom } = useTheme()

  const title = themes[themeCustom].images?.title
    ? themes[themeCustom].images?.title
    : themes['default'].images?.title;

  const arrow = themes[themeCustom].images?.arrow
    ? themes[themeCustom].images?.arrow
    : themes['default'].images?.arrow;
  /**
   * This array contains the routes that should have a back button
   */
  const shouldHaveBack = ["newType", "write", "record"];
  const { pathname } = useLocation();
  const showBack = shouldHaveBack.includes(pathname.split("/")[2]);

  const navigate = useNavigate();

  const styleImg = {
    width: "14em",
    height: "2em",
  };

  return (
    <div className="d-flex flex-column align-items-center w-100">
      <LittleCord />

      <div className={`mt-5 d-flex w-100 align-items-center justify-content-center`}>
        {showBack && (
          <ButtonWithIcon
            bgColor="transparent"
            clickFunction={() => navigate(-1)}
            icon={arrow}
            setIsHovered={() => {}}
        />
        )}
        <img
          src={title}
          alt="title of app"
          style={styleImg}
          className={`${showBack && 'm-auto'}`}
        />
      </div>
      <hr className="w-100" />
    </div>
  );
};

export default Header;
