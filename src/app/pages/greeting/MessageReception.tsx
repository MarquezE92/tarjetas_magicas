import { AgText, AgTextLabel, AgTextSmall } from "../../../layout/components/Ag";
import SocialNet from "../../../components/SocialNet";
import { themes } from "../../../theme";
import { useNavigate, useParams } from "react-router-dom";
import { WaveformWithSound } from "../../../components/WaveformWithSound";
import { useTheme } from "../../context/ThemeContext";
import axios from "axios";
import { useEffect, useState } from "react";
import LoadingPage from "../create/LoadingPage";
import { log } from "console";

//This page is the last page of the second flow where the end client receives the message.

const MessageReception = () => {
  const { themeCustom } = useTheme();
  const { code } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({name:"", audio_url: "", code:""})
  const navigate = useNavigate()
 
  const url = `${process.env.REACT_APP_BASE_URL}api/audioentries/get-by-code/${code}/`;
  const urlReportListened = `${process.env.REACT_APP_BASE_URL}api/audioentries/update-listened/${code}/`;

const imagePoloNorth = themes[themeCustom].images?.welcome2
	? themes[themeCustom].images?.welcome2
	: themes['default'].images?.welcome2;

const customIcon = themes[themeCustom].images?.customIcon
  ? themes[themeCustom].images?.customIcon
  : null;


  const config = {
    headers: { "content-type": 'application/json', },
  };

  const markAsListened = async()=> {
    try {
      const backResponse = await axios.request({
      url: urlReportListened,
      method: "put",
      headers: config.headers,
    })
    }
    catch(error) {
      console.log('Error al intentar marcar como escuchado.')
    }
  }

  const getMessage = async() =>{
    try {
      setIsLoading(true);
      const backResponse = await axios.request({
        url,
        method: "get",
        headers: config.headers,
      })
      setData(backResponse.data)
      setIsLoading(false);
      markAsListened();
    }catch (error:any) {
      navigate('/404', { replace: true, state: { root: true } });
    }
  }
    useEffect(() => {
      getMessage();
    }, [])
    
 
  const styleImg = {
    width: "17em",
    height: "9em",
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
          text={`¡Te han enviado un mensaje!`}
        />
      </div>
      <div className="d-flex flex-column w-100 mb-4">
        <img
          src={imagePoloNorth}
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
        {data.audio_url && (
            <WaveformWithSound URLSalutation={ data.audio_url.startsWith('https://listen-your-gift.') ?  data.audio_url : `${process.env.REACT_APP_BASE_URL}api/audioentries/get-remote-audio?code=${data.code}`} />
          )}
        </div>
      </div>

      <div className="w-75 text-center mb-2">
        <AgTextSmall
          color={themes[themeCustom].colors.fontColor}
          text={"Comparte este saludo con tus amigos"}
        />
      </div>
      <SocialNet />
      {customIcon && (
          <div className="d-flex flex-column align-items-center mt-2">
            <img src={customIcon} style={styleImgLogo} alt="img of company" />
          </div>
        )}
    </div>)
}
    </>
  );
};

export default MessageReception;
