import React from 'react'

interface ChatProps {
    id: string;
    message: string;
    sender: {
        image: string,
        is_kyc_verified: boolean,
        self: boolean,
        user_id: string,
    },
    time: string
}

function Chat({ chat }: { chat: ChatProps }) {
    const message = chat.message
    const id = chat.id
    const avatarUrl = chat.sender.image
    const self = chat.sender.self
  return (
    <div
        className="chat-container"
        key={id}
        style={{
            display: "flex",
            flexDirection: self ? "row-reverse" : "row",
            marginLeft: self ? 40 : 16,
            marginRight: self ? 20 : 40,
            marginTop: 20,
            gap: 8
        }}
    >
        {
            self ?
            null:
        <div
            className="chat-icon"
            style={{
                backgroundColor: "red",
                display: "flex",
                width: 24,
                height: 24,
                justifyContent: "center",
                alignItems: "center",
                flexShrink: 0,
                borderRadius: 999,
                background: "#FFF",
            }}
        >
            <img
                src={avatarUrl}
                style={{
                    width: 26,
                    height: 26,
                    flexShrink: 0,
                    borderRadius: 12,
                    background: `lightgray 50% / cover no-repeat`
                }}    
            />
        </div>
        }
        <div
            className="chat-content"
            style={{
                display: "flex",
                padding: 8,
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "0px 4px 8px 0px rgba(0, 0, 0, 0.08)",
                
                borderRadius: self ? "12px 12px 0px 12px" : "0px 12px 12px 12px",
                backgroundColor: self ? "#1C63D5" : "#FFF",
            }}
            >
            <p
                style={{
                    alignSelf: "stretch",
                    color: self ? "#FFF" : "#606060",
                    fontSize: 14,
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "normal",
                    padding: 0,
                    margin: 0
                }}
            >{message}</p>
        </div>
    </div>
  )
}

export default Chat