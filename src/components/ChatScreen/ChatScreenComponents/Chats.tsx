import React, { useEffect, useRef, useState } from 'react'
import DOMPurify from 'dompurify';
import Chat from './Chat';

function Chats() {
    
    const [ chats, setChats ] = useState([])
    const chatsContainerRef = useRef<HTMLDivElement>(null);

    const getChats = async (page = 0) => {
        try {
            const response = await fetch(`https://qa.corider.in/assignment/chat?page=${page}`)
            
            const chatsData = await response.json()
            
            if (chatsData.chats?.length) {
                const chats = chatsData.chats
                setChats(chats)
            } else {
                return []
            }

        } catch (err) {
            console.log(err);
            return err
        }
    }

    useEffect(()=>{
        getChats()
    }, [])

    useEffect(() => {
        // Scroll to the bottom of the chat container when chats change
        if (chatsContainerRef.current) {
          chatsContainerRef.current.scrollTop = chatsContainerRef.current.scrollHeight;
        }
    }, [chats]);

  return (
    <div
        className='chats-body'
        style={{
            display: "flex",
            marginTop: 155,
            paddingBottom: 78,
            flexDirection: 'column', // Change this to column to stack chats vertically
            height: '100%', // You may want to set a fixed height for the chat container
            overflowY: 'auto', // Add vertical scrollbar when needed
        }}
    >
        <div className="chats">
            {
                chats ?
                chats.map((chat, i)=>{
                    return (
                        <Chat chat={chat} key={i} />
                    )
                }) :
                null
            }
        </div>
    </div>
  )
}

export default Chats