import { useState, useEffect } from 'react'
import Axios from 'axios'
import api from '../config/api.json'


const Chat = () => {

    const [chat, setChat] = useState([])
    const [msg, setMsg] = useState('')

    useEffect(() => {
        const getChat = async () => {
            const chatLogs = await fetchChat()
            setChat(chatLogs)
        }

        getChat()
    })


    const fetchChat = async () => {
        const resp = await fetch(api.api_chat)
        const data = await resp.json()

        return data

    }

    const addLog = async (log) => {
        Axios.post(api.api_send, {message: msg})

        setChat([...chat, log.msg])
    }

    return (
        <div className="p-4 md:p-8 rounded border-2 border-red-600 md:w-3/4 h-3/4 bg-white my-24 mx-auto">
            <div className="container p-1 md:p-2 h-5/6 rounded md:border-2 border-red-500 shadow-lg overflow-x-scroll">
                {chat.map((logs) => {
                    return <p key={logs.id} className="p-2">{logs.message}<hr /></p>
                })}
            </div>
            
            <form className="mt-4" onSubmit={(e) => {e.preventDefault(); let key= chat.length + 1; if (msg.length > 0) addLog({key, msg}); setMsg('');}} >
                <input 
                    className=" w-3/4 md:w-4/5 rounded border-2 border-red-500 focus:border-red-700 p-2 shadow-lg" 
                    type="text" 
                    name="sendMsg" 
                    placeholder="Type your message"
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)} />
                <input type="submit" className="w-1/4 md:w-1/5 p-2" name="submit" value="submit" />
            </form>
        </div>
    )
}

export default Chat
