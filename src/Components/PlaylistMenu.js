import React from 'react'
import { FaPlus } from "react-icons/fa"
import { BsMusicNoteList, BsTrash } from 'react-icons/bs'
import { PlayList } from './Playlist'

function PlaylistMenu() {

    return (
        <div className="playListContainer">
            <div className="nameContainer">
                <p>PlayList</p>
                <i><FaPlus /></i>
            </div>
            <div className="playListScroll">
                {
                    PlayList && PlayList.map((p) => {
                        return (
                            <div key={p.id} className="playlist">
                                <i><BsMusicNoteList /></i>
                                <p>{p.name}</p>
                                <i className="trash"><BsTrash /></i>
                            </div>)
                    })
                }
            </div>
        </div>
    )
}

export { PlaylistMenu }