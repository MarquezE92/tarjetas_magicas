import { themes } from "../../../theme";
import { BasicButton } from "../Button";
import { useTheme } from '../../../app/context/ThemeContext';
import { AgTextWithImg } from "../Ag/AgTextWithImg";

interface Props {
  closeModal: () => void;
}

const CardSantaInstructions = ({ closeModal }: Props) => {
  const imgSanta = "/assets/icons/santa2.svg";
  const micIcon = "/assets/icons/micIcon.svg";
  const pauseIcon = "/assets/icons/pauseIcon.svg";
  const stopIcon = "/assets/icons/stopIcon.svg";
  
  const { themeCustom } = useTheme();
  

  const styleCard = {
    maxWidth: "21em",
    height: "fit-content",// Corregí el typo en 'height'
    borderRadius: "20px",
    border: "none",
  };
  
  const styleImg = {
    width: "6.3em",
    height: "7em",
  };

  const icon = {
    color: '#000',
    height: 'fit-content'
  }

  return (
    <div className="card d-flex flex-column align-items-center px-3" style={styleCard}>
      <div className="d-flex flex-row justify-content-center w-100 mb-4 mt-4">
        <img src={imgSanta} style={styleImg} alt="img of polo north express" />
      </div>
     
      <AgTextWithImg
        customClass="text-left mb-3 px-2"
        color={'#000'}>1. Inicia la grabación de tu mensaje pulsando el botón <img src={micIcon} style={icon} alt="Mic Icon"/></AgTextWithImg>
      <AgTextWithImg
        customClass="text-left mb-3 px-2"
        color={'#000'}>2. Utiliza el botón <img src={pauseIcon} style={icon} alt="Pausa Icon"/> para hacer una pausa en tu grabación </AgTextWithImg>
      <AgTextWithImg
        customClass="text-left mb-3 px-2"
        color={'#000'}>3. Terminado de grabar tu mensaje pulsa el botón <img src={stopIcon} style={icon} alt="Pausa Icon"/></AgTextWithImg>
      <AgTextWithImg
        customClass="text-left mb-1 px-2"
        color={'#000'}>4. Una vez grabado el mensaje pulsa el botón de Generar mensaje</AgTextWithImg>
        
      <div className='w-75 mt-4 mb-2 d-flex justify-content-center'>
        <BasicButton
          bgColor={themes[themeCustom].colors.primaryOutline}
          customClass={"mb-3 w-100"}
          text={"Graba tu mensaje"}
          color={themes[themeCustom].colors.background}
          clickFunction={() => closeModal()}
        />
      </div>
    </div>
  );
};

export default CardSantaInstructions;
