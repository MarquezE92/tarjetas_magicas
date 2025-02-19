import {FC} from 'react'
import { themes} from '../../../theme'

type Props = {
    cicleColor: string
}

/**
 * Component to show a cicle
 * @param cicleColor - (optional)string to add the font color
 */

const Cicle: FC<Props> = ({cicleColor=themes['default'].colors.primaryOutline}) => {
    const cicleStyle = {
        borderRadius: '50%',
        backgroundColor: cicleColor,
        width: '22px',
        height: '22px'
    }

  return (
    <div style={cicleStyle}></div>
  )
}

export {Cicle}
