import '../../../App.css';
import './ProductStyle.css';

export const Product = () => {
    return (
        <div className='Product'>
            <div className='container'>
                <div className='product-button'>
                    <p>Our Product</p>
                </div>
                <h1>Our Range of Crypto Product</h1>
            </div>
            <div className='product-container'>
                <div className='box' id='box-1'></div>
                <div className='box' id='box-2'></div>
                <div className='box' id='box-3'></div>
            </div>
        </div>
    )
}