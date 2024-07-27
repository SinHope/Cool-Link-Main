'use client'

import React from 'react';
import Image from 'next/image';

import wsicon from '@/images/logos/whatsappicon.png'

export function WhatsAppButton() {
  const phoneNumber = '6586844625'; // Replace with your WhatsApp number
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
      <div onClick={handleClick} style={{ cursor: 'pointer' }}>
        <Image src={wsicon} alt="WhatsApp Icon" width={300} height={300} className="hover:scale-110 duration-300"/>
      </div>
  );
}
