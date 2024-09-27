import React from 'react'
import pencil from '../assets/pencil.png'
import { Link } from 'react-router-dom'
import pencil2 from '../assets/pencil2.png'
function RemovedMessages() {

        return (

        <section className='app-container'>
            <div className='red-note-top'>
                <p>S</p>
            </div>
            <section className='message-container-inner-show'>
            <div className='text-wrapper-show'>
            <article className='center-text'>
                <h1>Du har inga meddelanden att visa</h1>
            </article>
            </div>

            <div className='vector-wrapper'>
                <div className='vector-1'>

                    <svg width="411" height="138" viewBox="0 0 411 138" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M172.397 35.7157C249.456 7.75761 374.639 16.3857 427.598 24.1945L489 154H-64V0C-17.3091 23.5544 95.3377 63.6738 172.397 35.7157Z" fill="#00B2FF" fill-opacity="0.8" />
                    </svg>
                </div>
                <div className='vector-2'>
                    <svg width="411" height="146" viewBox="0 0 411 146" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M196.45 37.5711C120.645 8.1606 -2.50034 17.2369 -54.5975 25.4514L-115 162H429V0C383.069 24.7781 272.256 66.9815 196.45 37.5711Z" fill="#00B2FF" fill-opacity="0.8" />
                    </svg>

                </div>

                <div className='vector-3'>
                    <svg width="411" height="138" viewBox="0 0 411 138" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M330.55 37.5711C223.809 8.1606 50.4094 17.2369 -22.948 25.4514L-108 162H658V0C593.325 24.7781 437.29 66.9815 330.55 37.5711Z" fill="white" fill-opacity="0.2" />
                    </svg>

                </div>
            </div>
            <div className="red-box">
            <Link to="/messages">
            <img src={pencil2} alt="pencil" style={{cursor: 'pointer',width: '100px'}} />
            </Link>
            </div>
            </section>
        </section>

    )
}

export default RemovedMessages
