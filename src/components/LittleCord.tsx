
import { useTheme } from '../app/context/ThemeContext';
import { themes } from '../theme';

// This component renders the little cord

const LittleCord = () => {
  const { themeCustom } = useTheme();

  let urlBackground = themes[themeCustom].littleCord  ? themes[themeCustom].littleCord : themes.default.littleCord;

  let url = themeCustom === 'mcdonals' ? 'none' :  `url(${urlBackground})`

  const containerStyle = {
    width: '100%', 
    height: '0.9em',
    backgroundImage: url, 
    backgroundRepeat: 'repeat-x', 
  };

  return (
    <div className='d-flex mt-2' style={containerStyle}>
    </div>
  );
};

export default LittleCord;