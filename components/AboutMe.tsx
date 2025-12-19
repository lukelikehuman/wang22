
import React from 'react';

const AboutMe: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-amber-500"></div>
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" 
                alt="王宥蓉 顧問" 
                className="w-full h-auto grayscale hover:grayscale-0 transition duration-700 shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-amber-500"></div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h2 className="text-sm font-bold text-amber-600 tracking-widest uppercase mb-4">關於王宥蓉</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">您的家族財富管家</h3>
            
            <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
              <p>
                深耕金融保險領域多年，我曾親眼目睹許多家族因為缺乏完善的預先規劃，在面臨世代交替或市場震盪時，導致辛苦積累的財富大幅縮水，甚至引發家族紛爭。這讓我深刻體認到，保險顧問的責任不只是銷售產品，而是成為客戶信賴的財富守門員。
              </p>
              <p>
                我的使命是協助高資產客戶建立一套「橫跨三代的財富藍圖」。透過細膩的資產診斷與科學化的配置，我不僅守護您的資產，更協助您將家族精神與實質財富，平穩且精準地交託給下一代。
              </p>
              <p className="font-medium text-slate-900">
                「誠信、隱私、深度專業」是我的執業標準。在充滿變動的時代，讓我陪伴您建立最穩健的財富後盾。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
