import React from 'react'
import { BsFillVolumeUpFill, BsMusicNoteList } from 'react-icons/bs'
import { FaDesktop } from 'react-icons/fa'
import track from '../img/track-blue.jpg'

function TrackList() {
    return (
        <div className='trackList'>
            <div className="top">
                <img src={track} alt="" />
                <p>
                    Sample Name
                    <span>Artist Name</span>
                </p>
            </div>
            <div className="bottom">
                <i><BsFillVolumeUpFill /></i>
                <input type="range" />
                <i><BsMusicNoteList /></i>
                <i><FaDesktop /></i>
            </div>
        </div>
    )
}

export { TrackList }