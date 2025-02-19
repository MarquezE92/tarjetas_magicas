import React, { useCallback, useRef, useMemo, useState } from "react";
import { WaveSurfer, WaveForm } from "wavesurfer-react";
import { themes } from "../theme";
import { useTheme } from "../app/context/ThemeContext";


interface Props {
  URLSalutation: string;
}

const WaveformWithSound: React.FC<Props> = ({ URLSalutation }: Props) => {

  const { themeCustom } = useTheme();
  const [isPlay, setIsPlay]= useState<boolean>(false);
  const plugins = useMemo(() => {
    return [
    
    ];
  }, []);

  const wavesurferRef = useRef<WaveSurfer | null>(null);

  const  playIcon = themes[themeCustom].images?.play
	? themes[themeCustom].images?.play
    : themes['default'].images?.play;

  const pauseIcon = themes[themeCustom].images?.pause
    ? themes[themeCustom].images?.pause
      : themes['default'].images?.pause;

  const handleWSMount = useCallback((waveSurfer: WaveSurfer | null) => {
    if (waveSurfer) {
      wavesurferRef.current = waveSurfer; 
      wavesurferRef.current.load(URLSalutation);
      
      if (window) {
        (window as any).surferidze = wavesurferRef.current;
      }
    }
  }, [URLSalutation]);

  const play = useCallback(() => {
    if (wavesurferRef.current) {
      setIsPlay(true)
      wavesurferRef.current.play();
    }
  }, []);
  const pause = useCallback(() => {
    if (wavesurferRef.current) {
      setIsPlay(false)
      wavesurferRef.current.pause();
    }
  }, []);

  return (
    <div className={'row w-100 align-items-center'} style={{width:'100%'}}>
      <div className="col-3" onClick={isPlay ? pause : play}
        style={{
          width:' 40px',
          height: '40px',
          border: `1px solid ${themes[themeCustom].colors.colorRecod}` ,
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
      }}>
        <img src={ isPlay ? pauseIcon : playIcon } alt=''/>   
      </div>
      <div className="col-9">
        
      <WaveSurfer plugins={plugins} onMount={handleWSMount}>
        <WaveForm
          id="waveform"
          fillParent={true}
          barWidth={4}
          progressColor={themes[themeCustom].colors.colorRecod}
          barRadius={4}
          cursorColor={'transparent'}
          hideScrollbar={true}
        />
      </WaveSurfer>
      </div>
    </div>
  );
};

export { WaveformWithSound };

