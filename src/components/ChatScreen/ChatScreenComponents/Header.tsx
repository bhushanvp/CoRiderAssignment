import React, { useState } from 'react'
import left_arrow from "../../../icons/arrow-left.png"
import edit from "../../../icons/edit.png"
import menu_icon from "../../../icons/dots-vertical.png"
import members from "../../../icons/members.png"
import call from "../../../icons/call.png"
import report from "../../../icons/report.png"


function Header() {
  return (
    <header
      style={{
        display: "flex",
        flexDirection: "column",
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 20,
        paddingBottom: 20,
        borderBottom: "solid",
        borderBottomWidth: 1,
        borderColor: "#E5E5E0",

        position: "fixed", // Add this line
        top: 0, // You can adjust the top value as needed
        width: "90%", // Ensures it spans the full width
        backgroundColor: "white", // Set your desired background color
        zIndex: 1, // Add this line to keep it on top
      }}
    >
      <HeaderTop />
      <HeaderBottom />
    </header>
  )
}

export default Header

function HeaderTop() {
  return <div className="header-top-nav"
    style={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
    }}
  >
    <div className="header-top-left"
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "row",
        alignItems: "center"
      }}
    >
      <img
        src={left_arrow}
        style={{
          margin: 20,
        }} />
      <div
        className='page-title-container'
        style={{}}
      >
        <h1
          className='page-title-text'
          style={{
            fontSize: 24
          }}
        >{"Trip 1"}</h1>
      </div>
    </div>

    <div
      className="header-top-right"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <img
        src={edit}
        style={{
          margin: 10,
        }} />
    </div>
  </div>
}

function HeaderBottom() {

    const [ editSelected, setEditSelected ] = useState(false)

  return <>
  <div
    className="header-bottom-info"
    style={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
    }}
  >
    <div className="header-bottom-left"
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "row",
        alignSelf: "flex-start",
      }}
    >
      <div className="chat-info"
        style={{
          flexDirection: "column",
          marginLeft: 20,
        }}
      >
        <div
          className="chat-from-container"
          style={{
            padding: 5
          }}
        >
          <p
            style={{
              fontSize: 18,
              color: "#606060",
              margin: 0
            }}
          >
            From <span
              className="chat-from-text"
              style={{
                fontWeight: "700",
                color: "#141E0D"
              }}
            >{"IGI Airport, T3"}</span>
          </p>
        </div>
        <div
          className="chat-to-container"
          style={{
            padding: 5
          }}
        >
          <p
            style={{
              fontSize: 18,
              color: "#606060",
              margin: 0
            }}
          >
            To <span
              className="chat-to-text"
              style={{
                fontWeight: "700",
                color: "#141E0D"
              }}
            >{"Sector 28"}</span>
          </p>
        </div>
      </div>
    </div>

    <div
      className="header-bottom-right"
      style={{
        display: "flex",
        alignItems: "center",
        marginRight: 10,
      }}
      onClick={() => {
        setEditSelected(!editSelected)
      }}
    >
      <img
        src={menu_icon} />
    </div>
  </div>

    <div
        className="dropdown"
        style={{
            display: editSelected ? "flex" : "none",
            width: 170,
            flexDirection: "column",
            alignItems: "flex-start",
            borderRadius: 8,
            position: "fixed",
            alignSelf: "flex-end",
            marginRight: 15,
            boxShadow: '0px 4px 8px 0px rgba(0, 0, 0, 0.12)',
            top: 150,
            backgroundColor: "#FFFFFF"
        }}  
    >
        <div
            className="dropdown-option"
            style={{
                display: "flex",
                height: 48,
                paddingTop: 3,
                paddingBottom: 3,
                paddingLeft: 12,
                paddingRight: 12,
                alignItems: "center",
                gap: 12,
                border: "solid",
                borderColor: "#E5E5E0",
                alignSelf: "stretch",

                borderWidth: 1,
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
            }}
        >
            <img src={members} alt="M" />
            <p>Members</p>
        </div>

        <div
            className="dropdown-option"
            style={{
                display: "flex",
                height: 48,
                paddingTop: 3,
                paddingBottom: 3,
                paddingLeft: 12,
                paddingRight: 12,
                alignItems: "center",
                gap: 12,
                alignSelf: "stretch",
                border: "solid",
                borderColor: "#E5E5E0",

                borderLeftWidth: 1,
                borderRightWidth: 1,
            }}
        >
            <img src={call} alt="C" />
            <p>Share Number</p>
        </div>

        <div
            className="dropdown-option"
            style={{
                display: "flex",
                height: 48,
                paddingTop: 3,
                paddingBottom: 3,
                paddingLeft: 12,
                paddingRight: 12,
                alignItems: "center",
                gap: 12,
                border: "solid",
                borderColor: "#E5E5E0",
                alignSelf: "stretch",

                borderWidth: 1,
                borderBottomLeftRadius: 8,
                borderBottomRightRadius: 8,
            }}
        >
            <img src={report} alt="R" />
            <p>Report</p>
        </div>
    </div>
  </>
}
