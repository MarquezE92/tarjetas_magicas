import {
  FacebookShareButton,
  WhatsappShareButton,
  TwitterShareButton,
} from "react-share";
import { useTheme } from "../app/context/ThemeContext";
import { themes } from "../theme";

// This component renders the social networks

const SocialNet = () => {
  const { themeCustom } = useTheme();
  const shareUrl = `${window.location.href}`;

  const title = "Feliz Navidad";

  const faceImg = themes[themeCustom].images?.face
    ? themes[themeCustom].images?.face
    : themes["default"].images?.face;

  const whatsappImg = themes[themeCustom].images?.whatsapp
    ? themes[themeCustom].images?.whatsapp
    : themes["default"].images?.whatsapp;

  const xImg = themes[themeCustom].images?.x
    ? themes[themeCustom].images?.x
    : themes["default"].images?.x;

  return (
    <div className="d-flex my-2 w-100 d-flex justify-content-center gap-3 mb-3">
      {themeCustom !== "mcdonals" && (
        <FacebookShareButton url={shareUrl}>
          <img src={faceImg} alt="facebook icon" />
        </FacebookShareButton>
      )}
      <WhatsappShareButton url={shareUrl} title={title}>
        <img src={whatsappImg} alt="whatsapp icon" />
      </WhatsappShareButton>
      {themeCustom !== "mcdonals" && (
        <TwitterShareButton url={shareUrl} title={title}>
          <img src={xImg} alt="x icon" />
        </TwitterShareButton>
      )}
    </div>
  );
};

export default SocialNet;
