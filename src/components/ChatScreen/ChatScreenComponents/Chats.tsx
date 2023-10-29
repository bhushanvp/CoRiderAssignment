import React, { useEffect, useRef, useState } from 'react'
import DOMPurify from 'dompurify';
import Chat from './Chat';

function Chats() {
    
    const [chats, setChats] = useState<Array<any>>([]);
    const chatsRef = useRef("")
    const chatEndRef = useRef<HTMLDivElement | null>(null); // Specify the type of the ref
    // const [ page, setPage ] = useState(0)
    const pageRef = useRef(0)
    const [ isLoading, setIsLoading ] = useState(false)

    const getChats = async () => {
        try {
            const response = await fetch(`https://qa.corider.in/assignment/chat?page=${pageRef.current}`)
            const chatsData = await response.json()
            
            if (chatsData.chats?.length) {
                const oldChats = JSON.parse(chatsRef.current || "[]");
                const newChats = chatsData.chats.concat(oldChats)
                chatsRef.current = JSON.stringify(newChats);
                setChats(newChats);
                pageRef.current += 1;
              } else {
                return [];
              }

        } catch (err) {
            console.log(err);
            return err
        }
        setIsLoading(false)
    }

    useEffect(() => {
      getChats();

      window.addEventListener('scroll', ()=>{
        if (window.scrollY === 0) {
            setIsLoading(true)
            setTimeout(() => {
                getChats()
            }, 2000);
        }
      })

      return ()=>{
        window.removeEventListener('scroll', getChats);
      }
    }, []);

    useEffect(() => {
        if (pageRef.current<3) {
            scrollToChatEnd();
        }
    }, [chats]);

    const scrollToChatEnd = () => {
      if (chatEndRef.current) {
        chatEndRef.current.scrollIntoView();
      }
    };

  return (
    <div
        className='chats-body'
        style={{
            display: "flex",
            marginTop: 155,
            paddingBottom: 78,
            flexDirection: 'column',
            height: '100%',
            overflowY: 'auto',
        }}
    >
    <div
        className="loading-container"
        style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
        }}
    >
      <div
        className="loading-spinner"
        style={{
            border: "4px solid rgba(255, 255, 255, 0.3)",
            borderTop: "4px solid #007bff",
            borderRadius: "50%",
            width: 50,
            height: 50,
            animation: "spin 1s linear infinite",
        }}
    ></div>
      <p>Loading...</p>
    </div>
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
            <div ref={chatEndRef} />
        </div>
    </div>
  )
}

export default Chats