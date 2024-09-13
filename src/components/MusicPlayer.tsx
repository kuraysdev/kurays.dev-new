import React, { useState, useRef } from 'react';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { FiSkipBack, FiPlay, FiPause, FiSkipForward } from 'react-icons/fi';
import '../styles/components/MusicPlayer.scss';

const songs = [
    {
        title: 'Last Christmas - Сигнальные огни',
        src: './assets/music/track1.mp3'
    }
    // Добавьте здесь больше песен, если нужно
];

const MusicPlayer: React.FC = () => {
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const playerRef = useRef<AudioPlayer>(null);

    const handleClickPrevious = () => {
        setCurrentSongIndex((prevIndex) =>
            prevIndex === 0 ? songs.length - 1 : prevIndex - 1
        );
    };

    const handleClickNext = () => {
        setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
    };

    return (
        <div className="card music">
            <h3>{songs[currentSongIndex].title}</h3>
            <AudioPlayer
                ref={playerRef}
                src={songs[currentSongIndex].src}
                showJumpControls={false}
                layout="stacked-reverse"
                customProgressBarSection={[
                    RHAP_UI.CURRENT_TIME,
                    RHAP_UI.PROGRESS_BAR,
                    RHAP_UI.DURATION
                ]}
                customControlsSection={[
                    RHAP_UI.ADDITIONAL_CONTROLS,
                    RHAP_UI.MAIN_CONTROLS,
                    RHAP_UI.VOLUME_CONTROLS
                ]}
                autoPlayAfterSrcChange={false}
                onClickPrevious={handleClickPrevious}
                onClickNext={handleClickNext}
                customIcons={{
                    play: <FiPlay />,
                    pause: <FiPause />,
                    previous: <FiSkipBack />,
                    next: <FiSkipForward />,
                }}
            />
        </div>
    );
};

export default MusicPlayer;