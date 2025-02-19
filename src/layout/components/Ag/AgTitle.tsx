import { useTheme } from "../../../app/context/ThemeContext"
import { themes } from "../../../theme"

type Props = {
    customClass?: string
    text: string
  }
  
  /**
   * Text Component | renders a component with a specific font size and line height and weight, and can have a custom class and text provided as properties.
   * @param customClass - to add extra classes
   * @param text - the text content
   * @component
   */
  const AgTitle: React.FC<Props> = ({customClass, text}) => {
  
  const { themeCustom } = useTheme()
    /**
     * static css for the component
     */
  
  let fontFamily = themes[themeCustom].font ? themes[themeCustom].font?.fontFamily : 'Roboto'
    const css = {
      fontFamily,
      fontSize: '1.85em', //30px
      letterSpacing: themeCustom === "chiviri4ta" ? '-1px' : 'inherit',
      fontWeight: '400',
    }
  
    return (
      <div className={` ${customClass}`} style={css}>
        {text}
      </div>
    )
  }
  
  export {AgTitle}