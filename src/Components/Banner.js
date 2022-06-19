import React from 'react'
import BannerImg from '../img/Banner.jpg'
import { FaEllipsisH, FaHeadphones, FaCheck } from 'react-icons/fa'


function Banner() {
    return (
        <div className="banner">
            <img src={BannerImg} alt='Music is your Escape' className='bannerImg' />
            <div className="content">
                <div className="bannerTitle">
                    <p>Home <span>/Popular Artist</span></p>
                    <i>
                        <FaEllipsisH />
                    </i>
                </div>

                <div className="artist">
                    <div className="left">
                        <div className="artistName">
                            <h2>A-Ha</h2>
                        </div>
                        <p><i><FaHeadphones /></i> 11,184,1811 <span>Monthly Listeners</span></p>
                    </div>
                    <div className="right">
                        <a href="#">Play</a>
                        <a href="#">
                            <i><FaCheck /></i>
                            Following
                        </a>
                    </div>
                </div>
            </div>
            <div className="bottomLayer"></div>
        </div>
    )
}

export { Banner };