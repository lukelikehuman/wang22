
import React from 'react';
import { ShieldCheck } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 text-white pb-32 border-t border-slate-800">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <div className="flex justify-center mb-8">
          <ShieldCheck className="w-16 h-16 text-amber-500" />
        </div>
        <h2 className="text-3xl md:text-5xl font-bold mb-6">開啟您的家族資產守護第一步</h2>
        <p className="text-slate-400 mb-12 text-xl font-light">
          所有諮詢內容將由王宥蓉顧問親自處理，並確保最高層級的隱私與資料保密。
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-12 mb-16">
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 rounded-full border border-amber-500/30 flex items-center justify-center text-xl font-medium mb-4 bg-slate-800 text-amber-500 italic">STEP 1</div>
            <span className="text-lg font-medium">初步數位評估</span>
          </div>
          <div className="hidden md:block w-12 h-px bg-slate-700"></div>
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 rounded-full border border-amber-500/30 flex items-center justify-center text-xl font-medium mb-4 bg-slate-800 text-amber-500 italic">STEP 2</div>
            <span className="text-lg font-medium">私人顧問訪談</span>
          </div>
          <div className="hidden md:block w-12 h-px bg-slate-700"></div>
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-amber-500 text-slate-900 flex items-center justify-center text-xl font-bold mb-4 shadow-lg shadow-amber-500/20 italic">STEP 3</div>
            <span className="text-lg font-bold text-amber-500">傳承策略定稿</span>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} 王宥蓉 | 家族財富管家. 專業誠信 · 守護所託.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span>隱私權條款</span>
            <span>合規聲明</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
