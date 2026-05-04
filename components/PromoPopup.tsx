'use client';

import React, { useState } from 'react';

interface PromoPopupProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  buttonText: string;
  emailPlaceholder?: string;
  closeLabel?: string;
  onClose: () => void;
  onSubmit: (email: string) => void;
}

export default function PromoPopup({
  title,
  subtitle,
  buttonText,
  emailPlaceholder,
  closeLabel,
  onClose,
  onSubmit,
}: PromoPopupProps) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email);
  };

  return (
    // Backdrop (optional, but good for modals)
    <div className="fixed inset-0 bg-black/20 flex items-center justify-center p-4 z-50">
      {/* Modal Container */}
      <div className="relative w-full max-w-xl bg-[#cec1e0] p-8 md:p-12 text-center text-[#333333] shadow-xl font-sans">
        
        {/* Close Button (Box with X) */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-10 h-10 text-[#333] hover:opacity-70 transition-opacity"
          aria-label={closeLabel ?? "Close"}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="2" y="2" width="20" height="20" />
            <line x1="2" y1="2" x2="22" y2="22" />
            <line x1="22" y1="2" x2="2" y2="22" />
          </svg>
        </button>

        {/* Text Content */}
        <div className="mb-8 space-y-2">
          <h2 className="text-xl md:text-2xl font-bold tracking-wide">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg md:text-xl mt-2 text-[#333333]">
              {subtitle}
            </p>
          )}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-6">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={emailPlaceholder ?? "Enter your email here.."}
            required
            className="w-full max-w-lg bg-[#b6a7cd] text-white placeholder-white/60 px-6 py-3 rounded-md text-base md:text-lg outline-none focus:ring-2 focus:ring-[#9b8ab5] transition-all"
          />
          <button
            type="submit"
            className="bg-[#b6a7cd] hover:bg-[#a595be] text-[#333] font-semibold px-10 py-3 rounded-md text-lg md:text-xl transition-colors w-56 shadow-sm"
          >
            {buttonText}
          </button>
        </form>
        
      </div>
    </div>
  );
}