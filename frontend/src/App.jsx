import garbage from './assets/garbage.png'
import pencil2 from './assets/pencil2.png'
import pencil from './assets/pencil.png'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getMessages } from '../api'
import { messageDelete } from '../api'
import { useNavigate } from 'react-router-dom'

function App() {
  const [message, setMessage] = useState([])
  const navigate = useNavigate()

  const fetchMessage = async () => {
    try {
      const data = await getMessages()
      if (Array.isArray(data)) {
        setMessage(data)
      } else {
        setMessage([])
      }

      if (data.length === 0) {
        navigate('/no-messages')
      } else {
        navigate('/flow')
      }


    } catch (error) {

      console.error('there was an error when fetching message', error)
    }

  }

  const deleteMessage = async (id) => {

    await messageDelete(id)
    await fetchMessage()

  }

  const messageChange = (msg) => {

    navigate(`/edit/${msg}`, { state: { message: msg } })
  }

  useEffect(() => {
    fetchMessage()
  }, [])

  return (

    <>
      
      <section className="app-container">
        <div className='red-note-top'>
          <p>S</p>
        </div>
        <div className="red-box">
            <Link to="/messages">
              <img src={pencil2} alt="pencil" style={{ cursor: 'pointer', width: '100px' }} />
            </Link>
          </div>

        <section className='app-container-inner'>
          <div className="wrapper-text-message-area">
            {
              message.length > 0 ? (
                message.map((msg) => (
                  <article key={msg.createdAt} className="text-message-area">
                    <article className="date">
                      <p>{msg.createdAt}</p>
                    </article>
                    <article className="text-message">
                      <h3>{msg.text}</h3>
                      <img src={garbage} onClick={() => deleteMessage(msg.id)} alt="pencil" style={{ cursor: 'pointer', width: '20px' }} />
                      <div class="wrapper-img">
                        <img className='pencil-delete' src={pencil} onClick={() => messageChange(msg)} alt="pencil" style={{ cursor: 'pointer', width: '20px' }} />
                      </div>
                    
                      <article className="text-alias">
                      <div className="text-alias-wrapper">
                        <p>{msg.username}</p>
                      </div>

                    </article>
                    </article>
                    
                  </article>
                ))
              ) : (<p>Laddar meddelanden...</p>)
            }

          </div>
           </section>
      </section>
     

    </>
  )
}

export default App
