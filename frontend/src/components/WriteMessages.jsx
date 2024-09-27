import { useState } from 'react'
import { postMessage } from '../../api.js'
import { useNavigate } from 'react-router-dom'

function WriteMessages({ fetchMessage }) {
    const [text, setText] = useState('')
    const [username, setUsername] = useState('')
    const navigate = useNavigate()

    const handletext = (e) => {
        setText(e.target.value)
    }

    const handleUsername = (e) => {
        setUsername(e.target.value)
    }

    const handlePostMessage = (e) => {
        e.preventDefault()

        postMessage(text, username)

            .then(() => {
                fetchMessage()
                setText('')
                setUsername('')
                navigate('/flow')
            })
            .catch(error => console.log('Could not post your message', error))

    }
    return (
        <>
            <section className='app-container'>
                <div className='red-note-top'>
                    <p>S</p>
                </div>
                <section className='app-container-inner'>
                    <div className='wrapper-message-write-window'>
                    
                        <form>
                            <textarea
                                value={text}
                                onChange={handletext}
                                placeholder="skriv ditt meddelande här"
                                className='message-write-window'
                            
                            
                            />
                            <input onChange={handleUsername} className='username-input' type="text" id="username" placeholder='AnvändarNamn' />
                            <button onClick={handlePostMessage} className="submit-btn">Publicera</button>
                        </form>

                    </div>

                   </section>
            </section>
        </>
    )
}

export default WriteMessages
