import { useNavigate } from "react-router-dom";
import { WaveformWithSound } from "../../../components/WaveformWithSound";
import { AgText, AgTextLabel } from "../../../layout/components/Ag";
import { BasicButton } from "../../../layout/components/Button";
import { themes } from "../../../theme";
import axios from "axios";
// import { BASE_URL } from "../../../env";
import { useState } from "react";
import LoadingPage from "./LoadingPage";
import { useTheme } from "../../context/ThemeContext";
import { async } from "q";

//This page is the common between record and write options, you have a more change tu listen your message and decided if it is ready.


const ConfirmationPage = () => {
  let user = JSON.parse(localStorage.getItem("user") || "{}");
  const { themeCustom } = useTheme();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  //url-endpoints
  const url = `${process.env.REACT_APP_BASE_URL}api/audioentries/`;
  const urlReportConfirmed = `${process.env.REACT_APP_BASE_URL}api/audioentries/update-confirmed/${user.code}/`;
  const urlDeleteEntry = `${process.env.REACT_APP_BASE_URL}api/audioentries/delete-by-code/${user.code}/`;


  //icons dinamic
  const customIcon = themes[themeCustom].images?.customIcon
    ? themes[themeCustom].images?.customIcon
    : null;

  const confirmationImage = themes[themeCustom].images?.confirmation
    ? themes[themeCustom].images?.confirmation
    : themes["default"].images?.confirmation;

  const styleImg = {
    width: "15em",
    height: "8em",
  };

  const config = {
    headers: { "content-type": 'application/json', },
  };

  const markAsConfirmed = async()=> {
    try {
      const backResponse = await axios.request({
      url: urlReportConfirmed,
      method: "put",
      headers: config.headers,
    })
    }
    catch(error){
      console.log('error')
    }
    
  }
  const deleteEntry = async()=> {
    try{
      const backResponse = await axios.request({
      url: urlDeleteEntry,
      method: "delete",
      headers: config.headers,
    })
    }
    catch(error){
      console.log('error')
    }
    
  }

  const handleClick = async () => {
    try {
      setIsLoading(true);
      // Verificar si el usuario y el archivo de audio existen
      if (user.code) {
        markAsConfirmed()
        navigate("/create/yay");
      } else if (user !== null && user.audio_file !== undefined) {
        const audioBlob = await fetch(user.audio_file).then((response) =>
          response.blob()
        );

        // Crear FormData y agregar el Blob al mismo
        let data = new FormData();
        data.append("name", user.name);
        data.append("email", user.email);
        data.append("invoice", user.invoice);
        data.append("company", user.company);
        data.append("audio_file", audioBlob, "nombre_archivo.webm");

        const config = {
          headers: { "content-type": "multipart/form-data" },
        };

        // Realizar la solicitud usando axios.request con transformRequest: null
        const backResponse = await axios.request({
          url,
          method: "post",
          data,
          headers: config.headers,
        });

        user = { ...user, code: backResponse.data.code };
        localStorage.setItem("user", JSON.stringify(user));
        setIsLoading(false);
        navigate("/create/yay");
      } else {
        navigate("/aww");
      }
    } catch (error) {
      setIsLoading(false);
      navigate("/aww");
    }
  };

  const handleClean = () => {
    const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
    const { code, audio_file, message, ...user } = storedUser;
    localStorage.setItem("user", JSON.stringify(user));

    code && deleteEntry()
    navigate("/create/choose");
  };

  const styleImgLogo = {
    width: "7em",
    height: "3em",
  };

  return (
    <>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <div className="d-flex flex-column align-items-center">
          <div className="w-75 text-center mb-5">
            <AgText
              customClass="fw-bold"
              color={themes[themeCustom].colors.fontColor}
              text={"¡Tu mensaje está listo! Escúchalo aquí"}
            />
          </div>
          <div className="d-flex flex-column w-100">
            <img
              src={confirmationImage}
              style={styleImg}
              className="align-self-start justify-content-start"
              alt="img of polo north express "
            />
          </div>

          <div className="mt-4 mb-4">
            <AgTextLabel
              customClass="text-center mb-1"
              text={"Haz click en play para escucharlo"}
              //color={themes[themeCustom].colors.fontColor}
              color="transparent"
            />
            <div className="d-flex justify-content-center align-items-center w-100">
              <WaveformWithSound
                URLSalutation={
                  user.code
                    ? `${url}get-remote-audio?code=${user.code}`
                    : user.audio_file
                }
              />
            </div>
          </div>

          <div className="mt-4">
            <BasicButton
              customClass="mb-4"
              bgColor={themes[themeCustom].colors.backgroundButton}
              text={"Grabar de nuevo"}
              color={themes[themeCustom].colors.primaryOutline}
              clickFunction={handleClean}
            />
            <BasicButton
              bgColor={themes[themeCustom].colors.backgroundButton}
              customClass={"mb-3"}
              text={"Confirmar"}
              color={themes[themeCustom].colors.primaryOutline}
              clickFunction={handleClick}
            />

            {customIcon && (
              <div className="d-flex flex-column align-items-center mt-4">
                <img src={customIcon}style={styleImgLogo} alt="img of company" />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ConfirmationPage;
