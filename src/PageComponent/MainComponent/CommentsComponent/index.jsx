import '../../../App.css';
import './CommentsStyle.css';

export const Comments = () => {
    return (
        <div className='Comments'>
            <div className='right-green'></div>
            <div className='right-thing'></div>
            <div className='left-thing'></div>
            <div className='left-ball'></div>
            <div className='left-cilindri'></div>
            <div className='left-wertilebi'></div>
            <div className='left-ball-thing'></div>
            <div className='left-thin-purple'></div>
            <div className='right-block'></div>
            <div className='right-circle-gold'></div>
            <div className='Comments-heading'>
                <div className='product-button'>
                    <p>Testimonials</p>
                </div>
                <h1>What Our Clients Have to Say</h1>
                <p>While you may think you are safe online, these real-life stories prove otherwise</p>
            </div>
            <div className='Comments-people'>
                <div className='Comment'>
                    <div className='info-tab'>
                        <div className='comment-pic' id='first-comment-pic'></div>
                        <div style={{display: 'flex', flexDirection: 'column', gap: '5px'}}>
                            <h1>Wade Warren</h1>
                            <p>Co-Founder of Superlink</p>
                            <div style={{display: 'flex', gap: '20px'}}>
                                <div className='facebook'></div>
                                <div className='twitter'></div>
                                <div className='instagram'></div>
                            </div>
                        </div>
                    </div>
                    <div className='text-tab'>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Erat donec eleifend <br />
                            vulputate mattis nunc justo morbi imperdiet. Et nisl ac eu <br />
                            tempus hendrerit. Non donec ut aenean placerat pulvinar quis. <br />
                        </p>
                    </div>
                </div>
                <div className='Comment'>
                    <div className='info-tab'>
                        <div className='comment-pic' id='second-comment-pic'></div>
                        <div style={{display: 'flex', flexDirection: 'column', gap: '5px'}}>
                            <h1>Wade Warren</h1>
                            <p>Co-Founder of Superlink</p>
                            <div style={{display: 'flex', gap: '20px'}}>
                                <div className='facebook'></div>
                                <div className='twitter'></div>
                                <div className='instagram'></div>
                            </div>
                        </div>
                    </div>
                    <div className='text-tab'>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Erat donec eleifend <br />
                            vulputate mattis nunc justo morbi imperdiet. Et nisl ac eu <br />
                            tempus hendrerit. Non donec ut aenean placerat pulvinar quis. <br />
                        </p>
                    </div>
                </div>
                <div className='Comment'>
                    <div className='info-tab'>
                        <div className='comment-pic' id='third-comment-pic'></div>
                        <div style={{display: 'flex', flexDirection: 'column', gap: '5px'}}>
                            <h1>Wade Warren</h1>
                            <p>Co-Founder of Superlink</p>
                            <div style={{display: 'flex', gap: '20px'}}>
                                <div className='facebook'></div>
                                <div className='twitter'></div>
                                <div className='instagram'></div>
                            </div>
                        </div>
                    </div>
                    <div className='text-tab'>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Erat donec eleifend <br />
                            vulputate mattis nunc justo morbi imperdiet. Et nisl ac eu <br />
                            tempus hendrerit. Non donec ut aenean placerat pulvinar quis. <br />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}