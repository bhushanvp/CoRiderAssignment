import React, { useState } from 'react'
import paper_clip from "../../../icons/paperclip.png"
import send from "../../../icons/send.png"
import camera from "../../../icons/camera.png"
import video from "../../../icons/video.png"
import document from "../../../icons/document.png"

function Tools() {
    const [displayTools, setDisplayTools] = useState(false)

    return (
        <div
            style={{
                display: "flex",
                position: "fixed",
                width: "100%",
                zIndex: 1,
                alignItems: "center",
                background: "#FAF9F4",
                bottom: 0,
                paddingTop: 8,
                paddingBottom: 8,
            }}
        >
            <div
                className="send-tools"
                style={{
                    display: "flex",
                    padding: "11px 12px",
                    alignItems: "center",
                    gap: 16,
                    flex: "1 0 0",
                    borderRadius: 8,
                    background: "#FFF",
                    marginLeft: 16,
                    marginRight: 16,
                }}
            >
                <input
                    type="text"
                    style={{
                        marginLeft: 12,
                        display: "flex",
                        alignSelf: "flex-start",
                        flex: 1,
                        border: 0
                    }}
                    placeholder='Reply to @Rohit Yadav'
                />
                <div
                    className="send-tools"
                    style={{
                        display: "flex",
                        alignSelf: "flex-end",
                        gap: 16
                    }}
                >
                    <img
                        src={paper_clip}
                        alt="I"
                        className="icon"
                        onClick={()=>{
                            setDisplayTools(!displayTools)
                        }}
                    />
                    <img
                        src={send}
                        alt="S"
                        className="icon"
                    />
                </div>
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
                            bottom: 55,
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
                                right: 50,
                                bottom: '-15%', // Changed 'bottom' to 'top' to flip it
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
                    </div> :
                    null
            }
        </div>
    )
}

export default Tools