import axios from "axios";

const API_URL = 'https://3yvo0ppq9f.execute-api.eu-north-1.amazonaws.com/api/message'

export const getMessages = () => {
    return axios.get(`${API_URL}`)
        .then(response => {
            console.log('Response from API', response)
            if (response.data && response.data.data) {
                return response.data.data
            } else {
                return []
            }
        })
        .catch(error => {
            console.log('There was an error trying to get the message', error)
            return []
        })
}

export const postMessage = (text, username) => {
    return axios.post(`${API_URL}`, {
        text: text,
        username: username
    })
        .then(response => response.data)
        .catch(error => {
            console.error('Error posting message:', error)
            throw error
        })
}

export const messageDelete = (id) => {
    return axios.delete(`https://3yvo0ppq9f.execute-api.eu-north-1.amazonaws.com/api/message/${id}`)
        .then(response => response.data)
        .catch(error => {
            console.error('Error deleting messages', error)
        })
}

export const changeMessage = (id, text, username) => {
    return axios.put(`https://3yvo0ppq9f.execute-api.eu-north-1.amazonaws.com/api/message/${id}`, {
        text: text,
        username: username
    })
        .then(response => response.data)
        .catch(error => {
            console.error('Error trying to change message', error)
        })
}