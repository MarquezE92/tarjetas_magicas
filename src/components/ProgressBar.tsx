import { useEffect, useState } from "react";
import { useTheme } from "../app/context/ThemeContext";

const ProgressBar: React.FC<{ time: number; maxTime?: number }> = ({ time, maxTime = 30 }) => {

  const { themeCustom } = useTheme();
  
  const [barColor, setBarColor] = useState<string>('#198754');
  const [showText, setShowText] = useState<boolean>(false);

  useEffect(() => {
    if (themeCustom == "mcdonals") {
      setBarColor('#ffffff'); 
    } else {
      if (time === 0) setShowText(true);
      if (time <= maxTime * 0.7) setBarColor('#ffc107');
      if (time <= maxTime * 0.5) setBarColor('#dc3545');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [time, themeCustom]);

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {showText ? (
        <p style={{ fontSize: '24px' }}>Se acabó el tiempo</p>
      ) : (
        <div 
          style={{
            width: `${(time / maxTime) * 250}px`,
            height: '10px',
            backgroundColor: barColor,
                          transition: 'width 1s ease-in-out',
            borderRadius: '10px',
          }}
        ></div>
      )}
    </div>
  );
};

export  {ProgressBar};