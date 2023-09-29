import React, { useState, useRef } from 'react'
import nlBg from '../Assets/Images/BG.png'
import { Toaster, toast } from 'react-hot-toast';

const Newsletter = () => {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

    const scriptURL = 'https://script.google.com/macros/s/AKfycbw2EYgABa9JHHyH1b1Ylrc-bxYtnhMGHgDzMPm7B-nXdQvfoZajvcxqhwdiwVINTkcp/exec';

    const handleSubmit = async (e) => {
        e.preventDefault();
        const msg = document.getElementById("msg");
        const clearForm = document.forms['submit-to-google-sheet'];

        if (email.trim() === '' || name.trim() === '') {
            // msg.innerHTML = 'Please fill out the form.';
            toast.error('Please fill out the form!')
            setTimeout(() => {
                msg.innerHTML = '';
            }, 3000);
        } else {
            try {
                const response = await fetch(scriptURL, {
                    method: 'POST',
                    body: new FormData(e.target),
                });

                if (response.ok) {
                    // msg.innerHTML = 'Subscribe successfully!';
                    toast.success('Subscribe successfully!')
                    setEmail('');
                    setName('');
                    setTimeout(() => {
                        msg.innerHTML = '';
                    }, 3000);
                    clearForm.reset();
                    // You can update the UI or perform other actions upon success.
                } else {
                    console.error('Error!', response);
                    // Handle errors here.
                }
            } catch (error) {
                console.error('Error!', error.message);
                // Handle network or other errors here.
            }
        }
    };


    return (
        <>
        <Toaster
  position="top-center"
  reverseOrder={false}/>
            <section id='newsletter' className='container' style={{
                background: `url(${nlBg.src})`,
                backgroundSize: "100% 100%",
                backgroundRepeat: 'no-repeat'
            }} >
                <div className="row" >

                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <div className="newsletterText">
                            <span className='nlTitle'>Newsletter</span>
                            <span className='nlText'>Stay up to date with our latest offers and our products.</span>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <form name='submit-to-google-sheet' onSubmit={handleSubmit}>
                            <div className="row inputFields">
                                <span className="col-sm-12 col-md-12 col-lg-12 input">
                                    <input type="text" name='Name' placeholder='Your Name' value={name}
                                        onChange={(e) => setName(e.target.value)} />
                                </span>
                                <span className="col-sm-12 col-md-12 col-lg-12 input">
                                    <input type="email" name='Email' placeholder='Your Email Address' value={email}
                                        onChange={(e) => setEmail(e.target.value)} />
                                </span>
                                <button type="submit" value="Send" className='subsBtn' >Subscribe</button>
                            </div>
                        </form>
                        <span id='msg'></span>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Newsletter
