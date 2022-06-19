import React from 'react'
import '../Styles/LeftMenu.css'
import { FaEllipsisH, FaSearch } from 'react-icons/fa'
import { SiMusicbrainz } from 'react-icons/si'

import { Menu } from './Menu.js'
import { MenuList } from './MenuList'
import { PlaylistMenu } from './PlaylistMenu'
import { TrackList } from './TrackList'

function LeftMenu() {
    return (
        <div className='leftMenu'>
            <div className="logoContainer">
                <i><SiMusicbrainz /></i>
                <h2>Sangगीत</h2>
                <i><FaEllipsisH /></i>
            </div>
            <div className="searchBox">
                <i className='searchIcon'><FaSearch /></i>
                <input type="text" placeholder='Search...' />
            </div>

            <div><Menu title={"Menu"} menuObject={MenuList} /></div>
            <PlaylistMenu />
            <TrackList />
        </div>

    )
}

export { LeftMenu }