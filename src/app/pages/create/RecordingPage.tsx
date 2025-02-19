import { useState } from "react";
import WaveWithRecord from "../../../components/WaveWithRecord";
import { AgText, AgTextSmall } from "../../../layout/components/Ag";
import { BasicButton } from "../../../layout/components/Button";
import { themes } from "../../../theme";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import Modal from "react-bootstrap/Modal";
import CardSantaInstructions from "../../../layout/components/Cards/CardSantaInstructions";

//this page is the next if you click on record options

const RecordingPage = () => {
  const navigate = useNavigate();
  const { themeCustom } = useTheme();
  const [hasBeenRecorded, setHasBeenRecorded] = useState<boolean>(false);
  const [showModal, setShowModal] = useState(true);

  const customIcon = themes[themeCustom].images?.customIcon
    ? themes[themeCustom].images?.customIcon
    : null;

  const handleClick = () => {
    if (hasBeenRecorded) {
      navigate("/create/confirm");
    }
  };
  
  const closeModal = () => {
    setShowModal(false);
  };

  const styleImgLogo = {
    width: "7em",
    height: "3em",
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <div className="w-75 text-center mb-5">
        <AgText
          customClass="fw-bold"
          color={themes[themeCustom].colors.fontColor}
          text={"¡Graba tu mensaje!"}
        />
        <AgTextSmall
          color={themes[themeCustom].colors.fontColor}
          text={`Tienes ${30} segundos`}
        />
      </div>
      <div className="w-100 d-flex justify-content-center mt-5 mb-5">
        <WaveWithRecord setHasBeenRecorded={setHasBeenRecorded} />
      </div>

      <div
        className={`${
          customIcon
            ? "d-flex flex-column align-items-center mt-3"
            : "mt-5 mb-3"
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
        <CardSantaInstructions closeModal={closeModal}/>
      </Modal>
    </div>
  );
};

export default RecordingPage;
