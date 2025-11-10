"use client"

import Script from "next/script"

declare global {
  interface Window {
    VoiceChatbot: {
      init: (config: {
        chatbotId: string;
        position: string;
        apiUrl: string;
      }) => void;
    };
  }
}

export function VoiceChatbotScript() {
  return (
    <>
      <div id="voice-chatbot"></div>
      
      <Script 
        src="https://voice4-all.vercel.app/widget.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (window.VoiceChatbot) {
            window.VoiceChatbot.init({
              chatbotId: '3d89e76a-9d33-44e5-bd53-7d6f59fd6fcd',
              position: 'bottom-right',
              apiUrl: 'https://voice4-all.vercel.app'
            });
          }
        }}
      />
    </>
  )
}