import React, { useState, useEffect } from 'react'
import { FaHeadphones, FaHeart, FaRegClock, FaRegHeart } from 'react-icons/fa'
import { Songs } from './Songs'
import { MusicPlayer } from './MusicPlayer.js'

function AudioList() {
    const [songs, setSongs] = useState(Songs);
    const [song, setSong] = useState(songs[0]);

    useEffect(() => {
        const allSongs = document
            .querySelector(".songsContainer")
            .querySelectorAll(".songs");

        function changeMenuActive(x) {
            allSongs.forEach(songs => songs.classList.remove("active"));
            this.classList.add("active")
        }

        allSongs.forEach(songs => songs.addEventListener('click', changeMenuActive))
    }, [])

    const changeFavourite = (id) => {

        let newSongs = Songs.map(song => {
            if (song.id === id) {
                song.favourite = !song.favourite;
            }
            return song;
        });
        setSongs(newSongs);
    }

    const setMainSong = (song) => {
        setSong(song);
    }


    return (
        <div className='audioList'>
            <div className="title">
                <h2 className="title">
                    The List <span>{`${songs.length} Songs`}</span>
                </h2>
            </div>
            <div className="songsContainer">

                {
                    songs && songs.map((song, index) => (
                        <div className="songs" key={song?.id} onClick={() => setMainSong(song)}>
                            <div className="count">{`# ${index + 1}`}</div>
                            <div className="song">
                                <div className="imgBox">
                                    <img src={song?.imgSrc} alt="" />
                                </div>
                                <div className="section">
                                    <p className="songName">
                                        {song?.songName}
                                        <span className="spanArtist">{song?.artist}</span>
                                    </p>
                                    <div className="hits">
                                        <p className="hit">
                                            <i><FaHeadphones /></i>
                                            95,490,102
                                        </p>

                                        <p className="duration">
                                            <i><FaRegClock /></i>
                                            {'3:04'}
                                        </p>

                                        <div className="favourite" onClick={() => changeFavourite(song?.id)}>
                                            {
                                                song?.favourite ?
                                                    <i><FaHeart /></i> :
                                                    <i><FaRegHeart /></i>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <MusicPlayer songItem={song} changeFavourite={changeFavourite} />
        </div>
    )
}

export { AudioList }