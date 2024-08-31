import './HeaderStyle.css';
import '../../App.css';

export const Header = () => {
    return (
        <header>
            <div className='side-pic-parent'>
                <div className='side-pic'></div>
                <div className='side-pic-2'></div>
            </div>
            <div className='side-pic-right'>
                <div className='vector-smart'></div>
                <div className='layer-1'></div>
            </div>
            <div className='Header'>
                <div className='Header-container'>
                    <div className='header'>
                        <div className='logo-parent'>
                            <div className='logo'></div>
                        </div>
                        <nav className='header-nav'>
                            <ul>
                                <li className="nav-item" id='home'>Home</li>
                                <li className="nav-item" id='product'>Product</li>
                                <li className="nav-item" id='services'>Services</li>
                                <li className="nav-item" id='why-us'>Why Us</li>
                                <li className="nav-item" id='resources'>Resources</li>
                                <li className="nav-item" id='about-me'>About</li>
                            </ul>
                        </nav>
                        <div className='contact-btn'></div>
                    </div>
                    <div className='header-main'>
                        <div className="header-main-text">
                            <h1>Unlocking The <br />  Future of Finance</h1>
                            <p>In a digital age driven by innovation, cryptocurrency has emerged as <br />
                               a revolutionary force that is reshaping the way we perceive and <br />
                               interact with money. At [Your Crypto Platform], we are your gateway <br />
                               to this exciting world of decentralized finance, empowering you to <br />
                               explore, invest, and transact with confidence.</p>
                              <div className='header-main-text-buttons'>
                                    <div className='button' id="contact-us"></div>
                                    <div className='button' id="learn-more"></div>
                              </div>
                        </div>
                        <div className='header-main-pic'>
                            <div className='ball'></div>
                            <div className='black-box'></div>
                            <div className='pic'></div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}