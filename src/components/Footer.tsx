import React from 'react'
import LittleCord from './LittleCord';
import { AgText } from '../layout/components/Ag';
import { useTheme } from '../app/context/ThemeContext';
import { themes } from '../theme';

const Footer = () => {
      const {themeCustom} = useTheme();
      const corazon = "/assets/icons/rojocarmin.svg";

      const styleImg = {
            width: "3em",
            height: "2.5em",
          };
        
     return (
      
        <div className="mb-2 text-center w-100">
             <LittleCord />
             <div className='d-flex justify-content-center align-items-center'>
             <AgText
                    color={themes[themeCustom].colors.fontColor}
                    text={"Hecho con"} />
                    <img src={corazon} alt="corazon" style={styleImg} />
             </div>
               
        </div>
  )
 }

 export default Footer;
