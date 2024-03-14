import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Redirect() {
    const location = useLocation();
    const navigate = useNavigate();

    const [sent, setSent] = useState(
       (prev)=>{
        return(
            location.state ? prev=location.state.isSent : ''
        )
       }
    );

    useEffect(() => {
        document.title = `Thank you | SkinNaturals`;

        if (sent) {
            setTimeout(() => {
                navigate('/');
            }, 2000);
        } else {
            navigate('/');
        }
    })

    return (
        <>
            <div className='d-flex justify-content-center my-5 py-5'>
                <div className='text-center'>
                    <h1 className='fs-2'>Thank You!</h1>
                    <p>Your message has been sent. Our team will contact you in the shortest amount of time. <br />

                        <Link to='/' tabIndex={0} target='_self'>Click here</Link> if you've not been redirected to the hompage.

                    </p>
                </div>
            </div>

        </>
    )
};

export default Redirect;