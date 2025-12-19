
import React from 'react';
import { MessageCircle, Shield } from 'lucide-react';

const StickyCTA: React.FC = () => {
  const lineUrl = "https://lin.ee/EwSR70X";

  return (
    <>
      {/* Mobile Bottom Sticky Bar */}
      <div id="consultation" className="fixed bottom-0 left-0 w-full bg-slate-900 border-t border-amber-500/30 p-4 z-50 shadow-[0_-5px_20px_rgba(0,0,0,0.3)] md:hidden">
        <a 
          href={lineUrl} 
          target="_blank" 
          rel="noreferrer"
          className="flex items-center justify-center gap-2 w-full bg-amber-500 text-slate-900 font-bold text-lg py-3 rounded-sm shadow-md transition-transform"
        >
          <Shield className="w-5 h-5" />
          預約保密諮詢
        </a>
      </div>
      
      {/* Desktop Floating Button */}
      <a 
        href={lineUrl} 
        target="_blank" 
        rel="noreferrer"
        className="hidden md:flex fixed bottom-8 right-8 z-50 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold py-4 px-8 rounded-sm shadow-2xl items-center transition transform hover:scale-105"
      >
        <MessageCircle className="w-6 h-6 mr-3" />
        <div className="text-left">
          <div className="text-xs font-normal opacity-80 uppercase tracking-widest">Confidential</div>
          <div className="text-lg leading-tight">私人財富諮詢</div>
        </div>
      </a>
    </>
  );
};

export default StickyCTA;
