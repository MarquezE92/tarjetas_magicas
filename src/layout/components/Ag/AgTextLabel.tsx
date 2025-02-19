import { useTheme } from "../../../app/context/ThemeContext"
import { themes } from "../../../theme"

type Props = {
    customClass?: string
    text: string
    color: string
  }
  
  /**
 * Text Component | renders a component with a specific font size and line height and weight, and can have a custom class and text provided as properties.
   * @param customClass - to add extra classes
   * @param text - the text content
   * @param color - the color text
   * @component
   */
  const AgTextLabel: React.FC<Props> = ({customClass, text, color}) => {
   
  const { themeCustom } = useTheme()
    /**
     * static css for the component
     */
  
  let fontFamily = themes[themeCustom].font ? themes[themeCustom].font?.fontFamily : 'Roboto'
    const css = {
      fontFamily,
      fontSize: '0.75em', //14px
      letterSpacing: themeCustom === "chiviri4ta" ? '-1px' : 'inherit',
      fontWeight: '400',
      color
    }
  
    return (
      <div className={` ${customClass}`} style={css}>
        {text}
      </div>
    )
  }
  
  export {AgTextLabel}