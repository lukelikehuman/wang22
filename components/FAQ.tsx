
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const faqs = [
    {
      q: "如何有效避免高額遺產稅侵蝕辛苦積累的資產？",
      a: "保險具有合法的稅務預留功能。透過精準的投保架構（被保險人與受益人設定），可以在傳承時即時提供大筆現金流支付遺產稅，避免家族因繳不出稅而面臨資產遭法拍或實物抵繳的困境。"
    },
    {
      q: "如何確保資產能「精準傳承」給特定對象，且不被其他人干預？",
      a: "保險理賠金不計入遺產總額（需符合條件），且具備契約自由原則。我們能透過受益人指定與賠付比例設定，達成超越傳統繼承權的「精準分配」，有效保護您的遺願不被紛爭動搖。"
    },
    {
      q: "在高通膨時代，長期保險工具如何守護我的實質購買力？",
      a: "我們會建議配置具備「分紅機制」或「外幣計價」的增額型商品，這類工具能透過複利效果對抗通膨。更重要的是，它提供了與市場連動的增值空間，同時保有資產的下行保護。"
    },
    {
      q: "如何建立一套可以自動運轉、且具備保密性的退休現金流？",
      a: "透過年金化機制，保險能每月/每年產生確定的現金流入，且無需像房地產一樣支付維護成本。對於高資產客戶，這種方式更具隱私性，不會在公共紀錄中輕易查獲您的現金流來源。"
    },
    {
      q: "企業主如何運用保險，將企業資產與個人/家族資產有效防火牆？",
      a: "運用法人的資金規劃股東保障，或是透過個人保單作為債權隔離工具。在法律架構完備的情況下，即使企業面臨經營風險，家族的生活開支與傳承基金仍能受到法律層級的保護。"
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">常見財富傳承問題</h2>
          <p className="text-slate-500">專業解析您最關心的資產佈局難題</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white border border-slate-200 rounded-lg overflow-hidden transition-all shadow-sm">
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition duration-300"
              >
                <span className="text-lg font-bold text-slate-800">{faq.q}</span>
                {openIndex === index ? <ChevronUp className="text-amber-500" /> : <ChevronDown className="text-slate-400" />}
              </button>
              {openIndex === index && (
                <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100 bg-amber-50/30">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
