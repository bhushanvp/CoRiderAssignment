import React, { useState } from 'react'
import paper_clip from "../../../icons/paperclip.png"
import send from "../../../icons/send.png"
import camera from "../../../icons/camera.png"
import video from "../../../icons/video.png"
import document from "../../../icons/document.png"

function Tools() {
    const [ displayTools, setDisplayTools ] = useState(false)

  return (
    <div
        style={{
            display: "flex",
            position: "fixed",
            bottom: 0,
            width: "100%",
            backgroundColor: "white",
            zIndex: 1,
            padding: "8px 16px",
            alignItems: "center",
            background: "#FAF9F4",
        }}
    >
        <div
            className="tools"
            style={{
                display: "flex",
                padding: "11px 12px",
                gap: 16,
                background: "#FFF",
                borderWidth: 0,
                alignSelf: "flex-start",
                width: "85%",
                alignContent: "center"
            }}
        >
            <input
                type="text"
                name="message"
                id="message"
                style={{
                display: "flex",
                    borderWidth: 0,
                    alignSelf: "flex-end",
                    width: "80%"
                }}
                placeholder='Reply to @Rohit Yadav'
            />
            <img
                src={paper_clip}
                alt=""
                className="icon"
                onClick={()=>{
                    setDisplayTools(!displayTools)
                }}
                style={{
                    display: "flex",
                    alignSelf: "flex-end",
                }}    
            />
            <img
                src={send}
                alt=""
                className="icon"
                style={{
                    display: "flex",

                    alignSelf: "flex-end",
                }}
            />
        </div>

        {
            displayTools ?

        <div
            className="insert-options"
            style={{
                display: "inline-flex",
                padding: "12px 16px",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 999,
                background: "var(--colours-brand-primary, #008000)",
                boxShadow: "0px -1px 8px 0px rgba(0, 0, 0, 0.05)",
                position: "fixed",
                bottom: 60,
                right: 16,
                gap: 12
            }}
        >
            <div
                className="notch"
                style={{
                    width: 0,
                    height: 0,
                    position: 'absolute',
                    right: '48px',
                    bottom: '-6px', // Changed 'bottom' to 'top' to flip it
                    borderLeft: '8px solid transparent',
                    borderRight: '8px solid transparent',
                    borderTop: '8px solid var(--colours-brand-primary, #008000)',
                }}
            >
            </div>
            <img
                src={camera}
                alt=""
                className="tool-icon"
            />
            <img
                src={video}
                alt=""
                className="tool-icon"
            />
            <img
                src={document}
                alt=""
                className="tool-icon"
            />
        </div>:
        null
        }
    </div>
  )
}

export default Tools