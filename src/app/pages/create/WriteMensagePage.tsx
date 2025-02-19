import axios from "axios";
import { useState} from "react";
import { useNavigate } from "react-router-dom";
import {AgTextSmall } from "../../../layout/components/Ag";
import { BasicButton } from "../../../layout/components/Button";
import Textarea from "../../../layout/components/Input/Textarea";
import { themes } from "../../../theme";
import { useTheme } from "../../context/ThemeContext";
import LoadingPage from "./LoadingPage";
import Modal from "react-bootstrap/Modal";
import CardSantaInstructionsMessage from "../../../layout/components/Cards/CardSantaInstructionsMessage";

//this page is the next if you click on write options

const WriteMesagePage = () => {
  const { themeCustom } = useTheme();
  const navigate = useNavigate();
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false);
  const url = `${process.env.REACT_APP_BASE_URL}api/audioentries/`;
  const [showModal, setShowModal] = useState(true);



  const customIcon = themes[themeCustom].images?.customIcon
    ? themes[themeCustom].images?.customIcon
    : null;

  const writeSanta = themes[themeCustom].images?.writeSanta
    ? themes[themeCustom].images?.writeSanta
    : themes["default"].images?.writeSanta;

    const styleImg = {
      width: "21.5",
      height: "9.4em",
    };
    const styleImgLogo = {
      width: "7em",
      height: "3em",
    };

  let user = JSON.parse(localStorage.getItem("user") || "{}");

  const closeModal = () => {
    setShowModal(false);
  };


  const handleClick = async () => {
    setError(false)
    setLoading(true);
   
    let user = JSON.parse(localStorage.getItem("user") || "{}");
    if (!user.message || user.message.trim() === "") {
      setLoading(false);
      setError(true)
      return;
    }
    try {
      const config = {
        header: {
          "content-type": "application/json",
        },
      };

      const backResponse = await axios.request({
        url,
        method: "post",
        data: user,
        headers: config.header,
      });

      user = {
        ...user,
        code: backResponse.data.code,
        audio_file: backResponse.data.audio_url,
      };
      localStorage.setItem("user", JSON.stringify(user));

      const urlDeleteEntry = `${process.env.REACT_APP_BASE_URL}api/audioentries/delete-by-code/${user.code}/`;
      const deleteEntry = async()=> {
        try{
          const backResponse = await axios.request({
          url: urlDeleteEntry,
          method: "delete",
          headers: config.header,
        })
        }
        catch(error){
          console.log('error')
        }
        
      }

      if (user.audio_file) {
        navigate("/create/confirm");
        setLoading(false);
      } else {
        deleteEntry()
      }
    } catch (error) {
      setLoading(false);
      navigate("/aww");
    }
  };

  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : (
        <div className="d-flex flex-column align-items-center">
          <div className="d-flex flex-column w-100 mt-2 mb-5">
            <img
              src={writeSanta}
              style={styleImg}
              className="align-self-end"
              alt="img of polo north express "
            />
          </div>
          <div className="w-75 text-center">
            <AgTextSmall
              color={themes[themeCustom].colors.fontColor}
              text={"Escribe el mensaje que quieres que Santa le envíe a tu persona especial."}
            />
          </div>
          <div className="w-75 d-flex justify-content-center mt-4 mb-2">
            <Textarea placeholderInput={"Escribe tu mensaje a continuación"} cleanError={setError} />
          </div>
          {error && (
        <div className="d-flex align-items-start mb-4">
          <span className="small alert alert-warning" >
            Debes escribir un mensaje
          </span>
        </div>
      )}
          <div
            className={`${
              customIcon ? "d-flex flex-column align-items-center mt-3" : "mt-5 mb-3"
            }`}
          >
            <BasicButton
               bgColor={themes[themeCustom].colors.backgroundButton}
              text={"Generar mensaje"}
              color={themes[themeCustom].colors.primaryOutline}
              clickFunction={handleClick}
            />
           {customIcon && (
          <div className="d-flex flex-column align-items-center mt-5">
            <img src={customIcon} style={styleImgLogo} alt="img of company" />
          </div>
        )}
          </div>
              {/* Modal */}
          <Modal
            show={showModal}
            onHide={closeModal}
            centered
            backdrop="static"
            dialogClassName="modal-adapter"
          >
            <CardSantaInstructionsMessage closeModal={closeModal}/>
          </Modal>
        </div>
      )}
    </>
  );
};

export default WriteMesagePage;
