import {
  AgText,
  AgTextLabel,
  AgTextSmall,
} from "../../../layout/components/Ag";
import { BasicButton } from "../../../layout/components/Button";
import { themes } from "../../../theme";
import { CodeInput } from "../../../layout/components/Input";
import { useTheme } from "../../context/ThemeContext";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import "../../../index.css";
import CardSantaConfirmation from "../../../layout/components/Cards/CardSantaConfirmation";

//This page is the common between record and write options, it is the confirmation success and generate a code for client.


const SuccessConfirmationPage = () => {
    
  const { themeCustom } = useTheme();
  const [showModal, setShowModal] = useState(false);
  const [valueInput, setValueInput ] = useState("");

  const yayImage = themes[themeCustom].images?.yay
	? themes[themeCustom].images?.yay
    : themes['default'].images?.yay;
  

  const customIcon = themes[themeCustom].images?.customIcon 
    ? themes[themeCustom].images?.customIcon
    : null

  const styleImg = {
    width: "17em",
    height: "9em",
  };

  let user = JSON.parse(localStorage.getItem("user") || "{}");

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <div className="w-50 text-center mb-2">
        <AgText
          customClass="fw-bold"
          color={themes[themeCustom].colors.fontColor}
          text={"¡Mensaje guardado con éxito!"}
        />
      </div>
      <div className="d-flex flex-column w-100 mb-4">
          <img
            src={yayImage}
            style={styleImg}
            className="align-self-end justify-content-end"
            alt="img of polo north express "
          />
        </div>
      <div className="mt-4 mb-4 d-flex flex-column align-items-center">
        <AgTextSmall
          customClass="text-center mb-1 w-75"
          text={"Escribe el código que aparece abajo en tu Tarjeta Mágica."}
          color={themes[themeCustom].colors.fontColor}
        />
        <div className="px-3 mb-1 mt-2 w-75">
          <CodeInput valueInput={user.code} setValueInput={setValueInput} />
        </div>
        {/* <AgTextLabel
          text={"Código de la tarjeta"}
          color={themes[themeCustom].colors.fontColor}
        /> */}
      </div>

      <div className="mt-4">
        <BasicButton
            bgColor={themes[themeCustom].colors.backgroundButton}
          customClass={"mb-3"}
          text={"Finalizar"}
          color={themes[themeCustom].colors.primaryOutline}
          clickFunction={openModal}
        />
        {customIcon && (
          <div className="d-flex flex-column align-items-center mt-5">
            <img src={customIcon} className="w-50" alt="img of company" />
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
        <CardSantaConfirmation closeModal={closeModal}/>
      </Modal>
    </div>
  );
};

export default SuccessConfirmationPage;
