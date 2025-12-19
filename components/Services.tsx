
import React from 'react';
import { Landmark, TrendingUp, ShieldCheck } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Landmark className="w-8 h-8" />,
      title: "世代傳承佈局",
      desc: "精準運用保險工具進行稅務預留、資產份額分配及信託機制銜接。我們致力於最大化繼承價值，並透過法律合規途徑，完美化解潛在的繼承紛爭。"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "投資理財配置",
      desc: "拒絕高風險投機。我們強調全球化穩健配置與抗通膨策略。透過多元化保險架構，為您打造長期穩定的被動收入體系，確保退休後的品質與尊嚴。"
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "資產防護與保密",
      desc: "高資產客戶的隱私重於一切。我們透過專業架構優化資產安全性，防止不必要的法律追索與資訊外洩，讓您的財富隱於市、強於核。"
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">核心服務範圍</h2>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto">不只是保險規劃，更是針對您家族需求的深度資產管理策略</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {services.map((item, index) => (
            <div key={index} className="group relative bg-slate-800 p-10 rounded-sm border border-slate-700 hover:border-amber-500 transition duration-500">
              <div className="text-amber-500 mb-8 transform group-hover:scale-110 transition duration-300">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-6 text-white">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed text-lg">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
