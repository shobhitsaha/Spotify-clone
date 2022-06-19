import React, { useEffect, useRef, useState } from 'react'
import { FaBackward, FaForward, FaHeart, FaPause, FaPlay, FaRegHeart, FaShare, FaStepBackward, FaStepForward } from 'react-icons/fa';
import { BsDownload } from 'react-icons/bs'
import '../Styles/MusicPlayer.css'

function MusicPlayer({ songItem, changeFavourite }) {

    const [isPlaying, setPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);

    const audioPlayer = useRef(); //for audio tag
    const progressBar = useRef(); //for progress bar
    const animationRef = useRef();


    useEffect(() => {
        //making sure we access duration only after audio is loaded 
        audioPlayer.current.onloadedmetadata = (e) => {
            const seconds = Math.floor(audioPlayer.current.duration);
            setDuration(seconds);
        }
    }, [])

    // Seconds to '03:40'
    const calulateTime = (sec) => {
        const minutes = Math.floor(sec / 60);
        const seconds = Math.floor(sec % 60);
        const returnMin = (minutes < 10 ? `0${minutes}` : `${minutes}`)
        const returnSec = (seconds < 10 ? `0${seconds}` : `${seconds}`)
        return returnMin + ":" + returnSec;
    }

    //PlayPause handler
    const changePLayPause = () => {
        if (!isPlaying) {
            audioPlayer.current.play();
            animationRef.current = requestAnimationFrame(whilePlaying);
        }
        else {
            audioPlayer.current.pause();
            cancelAnimationFrame(animationRef.current);
        }
        setPlaying(!isPlaying);
    }

    //Animation, memoized using callback so that is doesnt rerender unecessarily in use effect
    const whilePlaying = React.useCallback(() => {
        progressBar.current.value = audioPlayer.current.currentTime;
        progressBar.current.style.setProperty('--player-played', `${(progressBar.current.value / duration) * 100}%`);
        setCurrentTime(progressBar.current.value);
        animationRef.current = requestAnimationFrame(whilePlaying);
    }, [duration])

    //Directly play on clicking a song
    useEffect(() => {

        setPlaying(true);
        animationRef.current = requestAnimationFrame(whilePlaying);

        //Stopping auto play on first render
        audioPlayer.current.play().catch(() => {
            setPlaying(false);
            cancelAnimationFrame(animationRef.current);
        })
    }, [songItem, whilePlaying])

    //Change handling by Slider
    const changeProgress = () => {
        audioPlayer.current.currentTime = progressBar.current.value;
        progressBar.current.style.setProperty('--player-played', `${(progressBar.current.value / duration) * 100}%`);
        setCurrentTime(progressBar.current.value);
    }

    return (
        <div className='musicPlayer'>
            <div className="songImage">
                <img src={songItem.imgSrc} alt="" />
            </div>
            <div className="songAttributes">
                <audio src={songItem.song}
                    ref={audioPlayer} preload="metadata" />
                <div className='top'>
                    <div className="left">
                        <div className="favourite" onClick={() => changeFavourite(songItem.id)}>
                            {
                                songItem.favourite ?
                                    <i><FaHeart /></i> :
                                    <i><FaRegHeart /></i>
                            }
                        </div>
                        <div className="download">
                            <i><BsDownload /></i>
                        </div>
                    </div>
                    <div className="middle">
                        <div className="back">
                            <i><FaStepBackward /></i>
                            <i><FaBackward /></i>
                        </div>
                        <div className="playPause" onClick={() => changePLayPause()}>
                            {
                                isPlaying ?
                                    <i><FaPause /></i> :
                                    <i><FaPlay /></i>
                            }
                        </div>
                        <div className="forward">
                            <i><FaForward /></i>
                            <i><FaStepForward /></i>
                        </div>
                    </div>
                    <div className="right">
                        <i></i>
                        <i><FaShare /></i>
                    </div>
                </div>
                <div className="bottom">
                    <div className="currentTime">{calulateTime(currentTime)}</div>
                    <input type="range" max={duration} className='progressBar' ref={progressBar} onChange={changeProgress} />
                    <div className="duration">{calulateTime(duration)}</div>
                </div>
            </div>
        </div>
    )
}

export { MusicPlayer };