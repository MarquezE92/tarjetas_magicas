import { useEffect, useState } from "react";
import { AudioRecorder, useAudioRecorder } from "react-audio-voice-recorder";
import { ProgressBar } from "./ProgressBar";
import { AgTextSmall } from "../layout/components/Ag";
import { useTheme } from "../app/context/ThemeContext";
import { themes } from "../theme";
import './styleMic.css'

interface Props {
  setHasBeenRecorded: (hasBeenRecorded: boolean) => void;
}

export default function WaveWithRecord({ setHasBeenRecorded }: Props) {
  const MAX_TIME = 30;
  const { themeCustom } = useTheme();
  const recorderControls = useAudioRecorder();

  const [audioTime, setAudioTime] = useState<number>(MAX_TIME + 1);

  const [timeSensitiveClass, setTimeSensitiveClass] = useState<string>("");

  const colorTimeSensitive = () => {
    if (audioTime > MAX_TIME * 0.7) setTimeSensitiveClass(themes[themeCustom].colors.progreSucess);
    if (audioTime <= MAX_TIME * 0.7) setTimeSensitiveClass(themes[themeCustom].colors.progreWarning);
    if (audioTime <= MAX_TIME * 0.5) setTimeSensitiveClass(themes[themeCustom].colors.progreDanger);
  };

  let user = JSON.parse(localStorage.getItem("user") || "{}");

  const addAudioElement = (blob: Blob) => {
    const url = URL.createObjectURL(blob);
    const audio = document.createElement("audio");
    audio.src = url;
    audio.controls = true;
    setHasBeenRecorded(true);

    if (user !== null && url !== undefined) {
      user = { ...user, audio_file: url };
      localStorage.setItem("user", JSON.stringify(user));
    }
  };

  const handleTime = () => {
    setAudioTime(audioTime - 1);
    colorTimeSensitive();

    if (recorderControls.recordingTime === MAX_TIME) {
      recorderControls.stopRecording();
      setAudioTime(0);
    }
  };

  useEffect(() => {
    handleTime();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [recorderControls.recordingTime]);



  return (
    <div className="d-flex align-items-center flex-column gap-2 w-100">
      <AudioRecorder
        onRecordingComplete={(blob: Blob) => addAudioElement(blob)}
        audioTrackConstraints={{
          noiseSuppression: true,
          echoCancellation: true,
        }}
        downloadFileExtension="wav"
        showVisualizer={true}
        recorderControls={recorderControls}
        downloadOnSavePress={false}
        classes={{AudioRecorderStartSaveClass: 'recorderStyle', AudioRecorderClass: 'recorderContainer', AudioRecorderPauseResumeClass: 'pauseStop', AudioRecorderDiscardClass:'discard'}}
      />
      <ProgressBar time={audioTime} maxTime={MAX_TIME} />
      <AgTextSmall
        customClass={timeSensitiveClass}
        text={`Tiempo: ${audioTime < 0 ? 0 : audioTime} segundos`}
      />
    </div>
  );
}
