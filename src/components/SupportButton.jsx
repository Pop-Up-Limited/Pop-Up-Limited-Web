import { useState } from 'react';

export default function SupportButton({ text, className, buttonElement }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {buttonElement ? (
        <span onClick={() => setIsOpen(true)}>{buttonElement}</span>
      ) : (
      <button 
          className={className}
        onClick={() => setIsOpen(true)} 
      >
        {text}
      </button>
      )}

      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-0">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
            onClick={() => setIsOpen(false)}
          ></div>

          <div className="relative transform overflow-hidden rounded-2xl bg-white p-6 text-left shadow-xl transition-all sm:w-full sm:max-w-sm dark:bg-slate-900">
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
                <svg className="h-6 w-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                Contact via WeChat
              </h3>
              <div className="mt-4">
                <img 
                  src="/images/wechat-qr.png" 
                  alt="WeChat QR Code" 
                  className="mx-auto w-64 h-auto rounded-lg object-contain border border-gray-200 dark:border-gray-700"
                />
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Scan QR code to add customer service
                </p>
              </div>
            </div>
            <div className="mt-6">
              <button
                type="button"
                className="inline-flex w-full justify-center rounded-full border border-transparent bg-brand-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 sm:text-sm"
                onClick={() => setIsOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
