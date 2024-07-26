'use client'

import React from 'react';
import Image from 'next/image';

import wsicon from '@/images/logos/whatsappicon.png'

export function WhatsAppButton() {
  const phoneNumber = '1234567890'; // Replace with your WhatsApp number
  const message = 'Hello! I would like to know more about your services.'; // Default message

  const handleClick = () => {
    // URL-encode the message
    const encodedMessage = encodeURIComponent(message);
    // Construct the WhatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    // Open the WhatsApp chat
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="whatsapp-button"
      style={{
        backgroundColor: 'transparent',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        padding: '10px 20px',
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
      }}
    >
      {/* Replace this with your WhatsApp icon image */}
      <Image src={wsicon} alt="WhatsApp" width={48} height={48} />
    </button>
  );
}
