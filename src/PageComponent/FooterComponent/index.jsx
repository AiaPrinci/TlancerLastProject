import React from 'react';
import '../../App.css';
import './FooterStyle.css';

export const Footer = () => {
    return (
        <div className='Footer'>
            <div className='footer-left-purple'></div>
            <div className='footer-left-purple-thing'></div>
            <div className='Footer-container'>
                <div className='Footer-left-container'>
                    <div style={{display: 'flex', flexDirection: 'column', gap: '40px'}}>
                        <div className='footer-logo'></div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Erat donec eleifend <br />
                            vulputate mattis nunc justo morbi imperdiet. Et nisl ac eu <br />
                            tempus hendrerit. Non donec ut aenean placerat pulvinar quis. <br />
                        </p>
                    </div>
                    <div className='footer-socials-container'>
                        <div className="footer-socials" id="social-1"></div>
                        <div className="footer-socials" id="social-2"></div>
                        <div className="footer-socials" id="social-3"></div>
                    </div>
                </div>
                <div className='Footer-right-container'>
                    <div className="Footer-list">
                        <h1>Navigation</h1>
                        <p>About us</p>
                        <p>What we do</p>
                        <p>News</p>
                        <p>Projects</p>
                        <p>FAQ</p>
                        <p>Offices</p>
                    </div>
                    <div className="Footer-list">
                        <h1>Resources</h1>
                        <p>About us</p>
                        <p>What we do</p>
                        <p>News</p>
                        <p>Projects</p>
                        <p>FAQ</p>
                        <p>Offices</p>
                    </div>
                    <div className="Footer-list">
                        <h1>Contact Info</h1>
                        <p>
                            828 Timbercrest Road, <br />
                            Healy City, AK 99743
                        </p>
                        <p>Telephone : + (012) 345 6789</p>
                        <p>Fax : + (012) 345 6789</p>
                        <p>Email : contact@cyfer.com</p>
                    </div>
                </div>
            </div>
            <p>Copyright ©2023 Dotcreativemarket., Ltd. All right reserved</p>
        </div>
    )
}