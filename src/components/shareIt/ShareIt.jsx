

import React, { useState } from 'react';
import { X, Facebook, Twitter, Linkedin, Copy, Check, MessageCircle } from 'lucide-react'; // Using MessageCircle as a placeholder for WhatsApp

// Main App component to display the modal
export default function ShareIt({handleShare}) {
  return (
    <div>
      <ShareModal eventUrl="https://www.eventify.com/s/sound-of-chi" handleShare={handleShare} />
    </div>
  );
}

// Share Modal Component
function ShareModal({ eventUrl, handleShare }) {
  // State to track if the URL has been copied
  const [copied, setCopied] = useState(false);

  // Function to copy the URL to the clipboard
  const handleCopy = () => {
    navigator.clipboard.writeText(eventUrl)
      .then(() => {
        setCopied(true);
        // Reset the copied state after 2 seconds
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(err => {
        console.error('Failed to copy text: ', err);
        // Handle error (e.g., show an error message)
      });
  };

  // Social media icon data
  const socialPlatforms = [
    { name: 'Facebook', icon: Facebook, color: 'text-blue-600', href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(eventUrl)}` },
    { name: 'Twitter', icon: Twitter, color: 'text-black', href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(eventUrl)}` }, // Twitter/X icon
    { name: 'WhatsApp', icon: MessageCircle, color: 'text-green-500', href: `https://wa.me/?text=${encodeURIComponent(eventUrl)}` }, // Placeholder for WhatsApp
    { name: 'LinkedIn', icon: Linkedin, color: 'text-blue-700', href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(eventUrl)}` },
  ];

  return (
    // Main container for the modal/card
    <div className="bg-white rounded-lg shadow-lg w-full max-w-sm overflow-hidden">
      {/* Header Section */}
      <div className="flex justify-between items-center p-4 border-b border-gray-200">
        <h2 className="text-md font-medium text-gray-700">Share with friends</h2> {/* Titre: Partager avec des amis */}
        <button onClick={handleShare} className="text-gray-400 hover:text-gray-600">
          <X size={20} /> {/* Icône de fermeture */}
        </button>
      </div>
 
      {/* Content Section */}
      <div className="p-5">
        {/* Social Media Icons */}
        <div className="flex justify-start items-center space-x-4 mb-5">
          {socialPlatforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.href}
              target="_blank" // Open in new tab
              rel="noopener noreferrer" // Security best practice
              className={`${platform.color} hover:opacity-80 transition-opacity`}
              aria-label={`Partager sur ${platform.name}`} // Share on {platform.name}
            >
              <platform.icon size={24} strokeWidth={1.5} />
            </a>
          ))}
        </div>

        {/* Event URL Section */}
        <div>
          <label htmlFor="eventUrl" className="block text-xs font-medium text-gray-500 mb-1">
            Event URL {/* URL de l'événement */}
          </label>
          <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
            <input
              id="eventUrl"
              type="text"
              readOnly // Make input read-only
              value={eventUrl}
              className="flex-grow p-2 text-sm text-gray-700 bg-gray-50 focus:outline-none" // Basic styling, remove focus ring
            />
            <button
              onClick={handleCopy}
              className={`p-2 ${copied ? 'text-green-600' : 'text-gray-600'} hover:bg-gray-100 transition-colors`}
              aria-label={copied ? "URL copiée" : "Copier l'URL"} // URL copied / Copy URL
            >
              {copied ? <Check size={18} /> : <Copy size={18} />} {/* Show Check icon when copied */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
