import '../../../App.css';
import './NewsStyle.css';

export const News = () => {
    return (
        <div className='News'>
            <div className='tefshi'></div>
            <div className='silver-wre'></div>
            <div className='News-Header'>
                <div className='product-button'>
                    <p style={{fontSize: '18px'}}>Our Resources</p>
                </div>
                <h1>Latest News & Blog</h1>
            </div>
            <div className='News-Main'>
                <div className='news-main-header-media'>
                    <div className='News-Main-Heading'>
                        <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
                            <p>Security | 10 min read</p>
                            <h1 style={{fontSize: '40px'}}>Loream ipsum dolor sit amet <br /> consectetur. Pretium amet facilisis</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur. Erat donec eleifend <br />
                                vulputate mattis nunc justo morbi imperdiet. Et nisl ac eu <br />
                                tempus hendrerit. Non donec ut aenean placerat pulvinar quis. <br />
                            </p>
                        </div>
                        <p style={{color: '	#808080'}}>August 4, 2023</p>
                    </div>
                    <div className='News-Main-pic'>
                        <div className='News-Main-pic-blur'></div>
                    </div>
                </div>
                <div className='News-Cards'>
                    <div className="news-card" id='news-card-1'>
                        <div style={{display: 'flex', flexDirection: 'column', gap: '30px'}}>
                            <div className='news-card-pic' id='news-card-pic-1'></div>
                            <div style={{paddingLeft: '40px', display: 'flex', flexDirection: 'column', gap: '20px'}}>
                                <p>Security | 10 min read</p>
                                <h1 style={{fontSize: '32px'}}>Loream ipsum dolor sit <br /> amet consectetur. <br /> Pretium amet facilisis</h1>
                            </div>
                        </div>
                        <p style={{marginLeft: '40px', color: '#808080'}}>August 4, 2023</p>
                    </div>
                    <div className="news-card" id='news-card-2'>
                        <div style={{display: 'flex', flexDirection: 'column', gap: '30px'}}>
                            <div className='news-card-pic' id='news-card-pic-2'></div>
                            <div style={{paddingLeft: '40px', display: 'flex', flexDirection: 'column', gap: '20px'}}>
                                <p>Security | 10 min read</p>
                                <h1 style={{fontSize: '32px'}}>Loream ipsum dolor sit <br /> amet consectetur. <br /> Pretium amet facilisis</h1>
                            </div>
                        </div>
                        <p style={{marginLeft: '40px', color: '#808080'}}>August 4, 2023</p>
                    </div>
                    <div className="news-card" id='news-card-3'>
                        <div style={{display: 'flex', flexDirection: 'column', gap: '30px'}}>
                            <div className='news-card-pic' id='news-card-pic-3'></div>
                            <div style={{paddingLeft: '40px', display: 'flex', flexDirection: 'column', gap: '20px'}}>
                                <p>Security | 10 min read</p>
                                <h1 style={{fontSize: '32px'}}>Loream ipsum dolor sit <br /> amet consectetur. <br /> Pretium amet facilisis</h1>
                            </div>
                        </div>
                        <p style={{marginLeft: '40px', color: '#808080'}}>August 4, 2023</p>
                    </div>
                </div>
            </div>
        </div>
    )
}