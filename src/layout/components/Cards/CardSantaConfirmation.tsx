import { themes } from "../../../theme";
import { AgTextSmall } from "../Ag";
import { BasicButton } from "../Button";
import { useTheme } from '../../../app/context/ThemeContext';

interface Props {
  closeModal: () => void;
}

const CardSantaConfirmation = ({ closeModal }: Props) => {
  const imgSanta = "/assets/icons/santa2.svg";
  
  const { themeCustom } = useTheme();

  const styleCard = {
    width: "17em",
    height: "fit-content", // Corregí el typo en 'height'
    borderRadius: "20px",
    border: "none",
  };
  
  const styleImg = {
    width: "6.3em",
    height: "7em",
  };

  return (
    <div className="card d-flex flex-column align-items-center" style={styleCard}>
      <div className="d-flex flex-row justify-content-center w-100 mb-4 mt-4">
        <img src={imgSanta} style={styleImg} alt="img of polo north express" />
      </div>
      <AgTextSmall
        customClass="text-center mb-3 px-2 "
        text={"¡No olvides escribir el código en tu Tarjeta Mágica!"}
        color={themes[themeCustom].colors.modalTextColor}
      />
      <div className='w-75 mt-4 mb-2 d-flex justify-content-center'>
        <BasicButton
          bgColor={themes[themeCustom].colors.primaryOutline}
          customClass={"mb-3 w-75"}
          text={"Confirmar"}
          color={themes[themeCustom].colors.background}
          clickFunction={() => closeModal()}
        />
      </div>
    </div>
  );
};

export default CardSantaConfirmation;
