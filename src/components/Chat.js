import { useState, useEffect } from 'react'

const Chat = () => {

    const [chat, setChat] = useState([])
    const [msg, setMsg] = useState('')

    useEffect(() => {
        const getChat = async () => {
            const chatLogs = await fetchChat()
            setChat(chatLogs)
        }

        getChat()
    }, [])

    const fetchChat = async () => {
        const resp = await fetch('http://localhost:5000/chat')
        const data = await resp.json()

        return data
    }

    const addLog = async (log) => {
        const resp = await fetch('http://localhost:5000/chat', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(log),
        })
        console.log(log)
        const data = await resp.json()

        setChat([...chat, data])
    }

    return (
        <div className="p-8 rounded border-2 border-red-600 w-3/4 h-3/4 bg-white my-24 mx-auto">
            <div id="chat" className="container p-2 h-5/6 rounded border-2 border-red-500 shadow-lg overflow-x-scroll">
                {chat.map((logs) => {
                    return <p key={logs.key} className="p-2">{logs.msg}<hr /></p>
                })}
            </div>
            
            <form className="mt-4" onSubmit={(e) => {e.preventDefault(); let key= chat.length + 1; addLog({key, msg}); setMsg('');}} >
                <input 
                    className="w-4/5 rounded border-2 border-red-500 focus:border-red-700 p-2 shadow-lg" 
                    type="text" 
                    name="sendMsg" 
                    placeholder="Type your message"
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)} />
                <input type="submit" className="w-1/5 p-2" name="submit" value="submit" />
            </form>
        </div>
    )
}

export default Chat
