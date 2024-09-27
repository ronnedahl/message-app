import { useState, useEffect } from 'react'
import { useNavigate, useParams, useLocation } from 'react-router-dom'
import { changeMessage } from '../../api.js';

function EditMessage() {
    const { id } = useParams()
    const location = useLocation()
    const { message } = location.state || {}
    const navigate = useNavigate()

    console.log('Recieved message', message)

    const [text, setText] = useState(message ? message.text : '')
    const [username, setUsername] = useState(message ? message.username : '')
    
    useEffect(() => {
        if (!message) {
            console.error('no message received')
            navigate('/flow')
        }

    }, [message, navigate])

    const handleChangetext = (e) => {
        setText(e.target.value)
    }

    const handleChangeUsername = (e) => {
       
        setUsername(e.target.value)
    }

    const handleUpdateMessage = async (e) => {
        e.preventDefault()
        try {
            await changeMessage(id, text, username)
            navigate('/flow')

        } catch (error) {
            console.error('could not update message', error)
        }

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
                                onChange={handleChangetext}
                                placeholder="Ändra ditt meddelande här"
                                className='message-write-window'
                            />
                            
                            <input
                             value={username}
                             onChange={handleChangeUsername} 
                             className='username-input' 
                             type="text" 
                             id="username" 
                             placeholder='AnvändarNamn' 
                             autoComplete='new-password'
                             />
                            
                            <button onClick={handleUpdateMessage} className="submit-btn">Ändra</button>
                        </form>

                    </div>
                   </section>
            </section>
        </>
    )
}

export default EditMessage
