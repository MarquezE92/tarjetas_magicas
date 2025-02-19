import { themes } from "../../../theme";
import { BasicButton } from "../Button";
import { useTheme } from '../../../app/context/ThemeContext';
import { AgTextSmall, AgText } from "../Ag";

interface Props {
  closeModal: () => void;
}

const CardSantaInstructionsMessage = ({ closeModal }: Props) => {
  const imgSanta = "/assets/icons/santa2.svg";
   
  const { themeCustom } = useTheme();
  

  const styleCard = {
    maxWidth: "21em",
    height: "fit-content", // Corregí el typo en 'height'
    borderRadius: "20px",
    border: "none",
  };
  
  const styleImg = {
    width: "6.3em",
    height: "7em",
  };


  return (
    <div className="card d-flex flex-column align-items-center px-3" style={styleCard}>
      <div className="d-flex flex-row justify-content-center w-100 mb-4 mt-4">
        <img src={imgSanta} style={styleImg} alt="img of polo north express" />
      </div>
     
      <AgText
        customClass="text-left mb-3 px-2"
        color={'#000'}
        text="Tips para un buen mensaje:"
      />
      <AgTextSmall
        customClass="text-left mb-3 px-2"
        color={'#000'}
        text="1. Dejar de 3 a 4 espacios en blanco entre cada oración."
      />
      <AgTextSmall
        customClass="text-left mb-3 px-2"
        color={'#000'}
        text="2. Colocar comas para generar pausas."
      />
      <AgTextSmall
        customClass="text-left mb-3 px-2"
        color={'#000'}
        text="3. Escribir anio en lugar de año, ninio en lugar de niño, ninia en lugar de niña, carinio en lugar de cariño."
      />
        
      <div className='mt-4 mb-2 d-flex justify-content-center w-100'>
        <BasicButton
          bgColor={themes[themeCustom].colors.primaryOutline}
          customClass={"mb-3 w-100"}
          text={"Escribe tu mensaje"}
          color={themes[themeCustom].colors.background}
          clickFunction={() => closeModal()}
        />
      </div>
    </div>
  );
};

export default CardSantaInstructionsMessage;
