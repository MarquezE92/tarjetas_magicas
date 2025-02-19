import React from "react";
import { useTheme } from "../../../app/context/ThemeContext"
import { themes } from "../../../theme"

type Props = {
    customClass?: string
    color?: string
    children: React.ReactNode;
  }
  
  /**
 * Text Component | renders a component with a specific font size and line height and weight, and can have a custom class and text provided as properties.
   * @param customClass - to add extra classes
   * @param children - the content to be rendered inside the component
   * @param color - the color text
   * @component
   */
  const AgTextWithImg: React.FC<Props> = ({customClass, children, color}) => {

  const { themeCustom } = useTheme()
    /**
     * static css for the component
     */
  
  let fontFamily = themes[themeCustom].font ? themes[themeCustom].font?.fontFamily : 'Roboto'
    const css = {
      fontFamily,
      fontSize: '1em', //16px
      fontWeight: '400',
      color
    }
  
    return (
      <div className={` ${customClass}`} style={css}>
        {children}
      </div>
    )
  }
  
  export {AgTextWithImg}