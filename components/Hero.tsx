
import React from 'react';
import { Calendar } from 'lucide-react';

const Hero: React.FC = () => {
  const handleConsultationClick = () => {
    window.open('https://lin.ee/EwSR70X', '_blank');
  };

  return (
    <header className="relative h-screen min-h-[700px] flex items-center justify-center bg-slate-900 overflow-hidden">
      {/* Background with abstract professional feel */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2560" 
          alt="Professional Office Space" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 max-w-5xl">
        <div className="text-left md:w-2/3">
          <div className="mb-6 inline-block px-4 py-1 border border-amber-500/50 rounded-full text-amber-500 text-sm font-medium tracking-widest uppercase">
            世代傳承 · 財富永續
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
            守護跨世代的承諾<br />
            <span className="text-amber-500">建立永恆的家族財富藍圖</span>
          </h1>
          
          <p className="text-lg md:text-xl mb-12 text-slate-300 font-light leading-relaxed max-w-2xl">
            專為高資產族群量身打造，結合傳承佈局與穩健理財。<br />
            確保您的財富不僅是數字，更是能流傳百年的家族基業。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={handleConsultationClick} 
              className="inline-flex items-center justify-center bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold text-lg py-4 px-10 rounded-sm shadow-xl transition duration-300 transform hover:-translate-y-1"
            >
              <Calendar className="mr-2 w-5 h-5" />
              預約私人財務健檢
            </button>
            <a 
              href="#services"
              className="inline-flex items-center justify-center border border-slate-500 hover:border-amber-500 text-white font-medium text-lg py-4 px-10 rounded-sm transition duration-300"
            >
              了解服務細節
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
