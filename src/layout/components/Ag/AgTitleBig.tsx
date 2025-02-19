import { useTheme } from "../../../app/context/ThemeContext"


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
  const AgTitleBig: React.FC<Props> = ({customClass, text}) => {

    /**
     * static css for the component
     */
     const { themeCustom } = useTheme()
    const css = {
      fontSize: '2.25em', //36px
      fontWeight: '400',
      lineHeight: '42px',
      letterSpacing: themeCustom === "chiviri4ta" ? '-1px' : 'inherit',
      fontFamily: 'Abril Fatface, sans-serif'
    }
  
    return (
      <div className={` ${customClass}`} style={css}>
        {text}
      </div>
    )
  }
  
  export {AgTitleBig}