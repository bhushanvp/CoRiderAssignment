import React from 'react'
import Header from './ChatScreenComponents/Header'
import Chats from './ChatScreenComponents/Chats'
import Tools from './ChatScreenComponents/Tools'

function ChatsScreen() {
  return (
    <div
      className="container"
      style={{
      backgroundColor: "#FAF9F4",
    }}>
      <Header />
      <Chats />
      <Tools />
    </div>
  )
}

export default ChatsScreen