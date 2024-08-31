import '../../../App.css';
import './MarketStyle.css';

export const Market = () => {
    return (
        <div className='Market'>
            <div className='Market-component'>
                <h1>$2000m+ <br /> <span className='span'>Market Capitalization</span></h1>
            </div>
            <div className="gap">
                <div className='line'></div>
            </div>
            <div className='Market-component'>
                <h1>40% - 50% <br /> <span className='span'>Bitcoin Market Dominance</span></h1>
            </div>
            <div className="gap">
                <div className='line'></div>
            </div>
            <div className='Market-component'>
                <h1>100m+ <br /> <span className='span'>User Worlwide</span></h1>
            </div>
            <div className="gap">
                <div className='line'></div> 
            </div>
            <div className='Market-component'>
                <h1>10,000 <br /> <span className='span'>Different Cryptocurrencies</span></h1>
            </div>
        </div>
    )
}