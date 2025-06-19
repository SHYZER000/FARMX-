// pages/waitlist.tsx
"use client";
import { useState } from 'react'
import Head from 'next/head'
import "./airdrop.css"
import Layout from './layout';

export default function Waitlist() {
  const [popupVisible, setPopupVisible] = useState(false)
  const [popupMessage, setPopupMessage] = useState('')
  const [showImage, setShowImage] = useState(false)

  const handleSubmit = async () => {
    const input = document.getElementById('walletInput') as HTMLInputElement
    const wallet = input?.value

    if (!wallet || wallet.length < 10) {
      showPopup("Please enter a valid wallet address.")
      return
    }

    showPopup("Finding spot for you")

    try {
      const res = await fetch('https://farmx-z67o.vercel.app/APIs/pre_register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ wallet_address: wallet })
      })

      const result = await res.json()

      if (result.code === 2008) {
        setShowImage(true)
        showPopup("🎉 Airdrop registered successfully!")
      } else if (result.code === 2009) {
        showPopup("⚠️ Already registered for Airdrop")
      } else {
        showPopup("⚠️ " + result.message)
      }
    } catch {
      showPopup("Something went wrong. Please try again.")
    }
  }

  const showPopup = (message: string) => {
    setPopupMessage(message)
    setPopupVisible(true)
  }

  const closePopup = () => {
    setPopupVisible(false)
    setShowImage(false)
  }

  return (
   <Layout>
      <Head>
        <title>FARMX</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div id="main-container">
        <nav>
          <h1 id="logo-text">FARMX</h1>
          <div id="docs">
            <img src="https://i.ibb.co/jv4fkkZj/Slice-3-1-1.png" alt="Docs" />
            <p>Docs</p>
          </div>
        </nav>

        <section>
          <div id="farmx-logo">
            <img
              src="https://i.ibb.co/27P9ZrS3/986a0d92-e618-45dd-86f1-c5de31e2bb2c-1.png"
              alt="FARMX Logo"
            />
          </div>

          <div id="input-box">
            <img
              id="first-well"
              className="well"
              src="https://i.ibb.co/vxHwSt72/Well-48x48.gif"
              alt="Well"
            />
            <input id="walletInput" placeholder="ENTER WALLET ADDRESS" />
            <img
              id="second-well"
              className="well"
              src="https://i.ibb.co/vxHwSt72/Well-48x48.gif"
              alt="Well"
            />
          </div>

          <div id="announcement">
            <h1>Enter somnia wallet address to get free land airdrop</h1>
            <img
              src="https://i.ibb.co/MDQD8ySQ/Wooden-Crate-2-48x48.gif"
              alt="Crate"
            />
          </div>

          <button id="submitbtn" onClick={handleSubmit}>
            SUBMIT
          </button>
        </section>

        <div id="trees">
          <div id="follow-us">
            <h1>Follow Us :</h1>
            <a href="https://x.com/farmx2007" target="_blank" rel="noopener noreferrer">
              <img src="https://i.ibb.co/4Z0JbmZr/Slice-2-2-1.png" alt="X" />
            </a>
          </div>
        </div>
      </div>

      {popupVisible && (
        <div id="popup">
          <div id="popup-content">
            <p id="popup-message">
              <span id="message">{popupMessage}</span>
              {showImage && (
                <img
                  id="ij"
                  width={50}
                  height={50}
                  src="https://i.ibb.co/cG0nfrs/Slice-5-2.png"
                  alt="Claimed"
                />
              )}
            </p>
            <button onClick={closePopup}>OK</button>
          </div>
        </div>
      )}
    </Layout>
  )
}
