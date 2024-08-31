import '../../../App.css';
import './FormStyle.css';
import { useState } from 'react';

export const Form = () => {

    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    }

    return (
        <div className='Form'>
            <div className='form-right-green'></div>
            <div className='form-green-kid'></div>
            <div className='form-right-purple'></div>
            <div className='Form-Container'>
                <div className='Form-left-part'>
                    <div className='Form-Heading'>
                        <h1>Embark on a Digital <br /> Journey</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Erat donec eleifend <br />
                            vulputate mattis nunc justo morbi imperdiet. Et nisl ac eu tempus. <br />
                        </p>
                    </div>
                </div>
                <div className='Form-right-part'>
                    <div style={{display: 'flex', flexDirection: 'column', width: '100%'}}>
                        <label htmlFor="fullname">
                            <p>Full Name</p>
                        </label>
                        <br />
                        <input className='full-name'  type="text" name="firstname" id="fullname" />
                    </div>
                    <div style={{display: 'flex', gap: '20px'}}>
                        <div style={{display: 'flex', flexDirection: 'column', width: '50%'}}>
                            <label htmlFor="secondname">
                                <p>Full Name</p>
                            </label>
                            <br />
                            <input className='second-name' type='text' name='secondname' id='secondname' />
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', width: '50%'}}>
                            <label htmlFor="thirdname">
                                <p>Full Name</p>
                            </label>
                            <br />
                            <input className='third-name' type='text' name='thirdname' id='thirdname' />
                        </div>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <label htmlFor="fullname">
                            <p>Full Name</p>
                        </label>
                        <br />
                        <input className='full-name'  type="text" name="firstname" id="fullname" />
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <label htmlFor="textarea">
                            <p>Full Name</p>
                        </label>
                        <br />
                        <textarea className='text-area'  type="text" name="textarea" id="textarea"></textarea>
                    </div>
                    <div style={{display: 'flex', gap: '10px', width: '600px'}}>
                        <input className='checkbox' style={{display: 'none'}} type="checkbox" checked={isChecked} onChange={handleCheckboxChange}  name="" id="checkbox" />
                        <label htmlFor="checkbox" className={`checkbox ${isChecked ? 'checked' : ''}`}>
                            <span className='checkbox-icon'>{isChecked ? '✔️' : ''}</span>
                        </label>
                        <p style={{fontSize: '14px', lineHeight: '20px', width: '70%'}}>
                            I have read and accepted the terms and conditions specified in the Privacy Policy and <br />
                            do here by consent to the collecting, processing and/or disclosing of the personal <br />
                            data provided by me to fulfil the above-said purposes. <br />
                        </p>
                    </div>
                    <div className='form-contact-now'></div>
                </div>
            </div>
            <div className='form-pic'>
                <div className='form-triangle'></div>
            </div>
        </div>
    )
}