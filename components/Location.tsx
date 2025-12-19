import React from 'react';
import { MapPin, Navigation } from 'lucide-react';

const Location: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">訓練空間位置</h2>
          <p className="text-gray-500 text-lg">位於高雄美術館特區核心地段，交通便利</p>
        </div>

        <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-xl overflow-hidden max-w-5xl mx-auto">
          {/* Map Section */}
          <div className="w-full md:w-2/3 h-64 md:h-auto min-h-[300px] bg-gray-200 relative">
             <iframe 
               src="https://maps.google.com/maps?q=804高雄市鼓山區美術東五路61號&z=17&output=embed" 
               width="100%" 
               height="100%" 
               style={{border:0}} 
               allowFullScreen={true} 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
               title="Gym Location"
               className="absolute inset-0"
             ></iframe>
          </div>

          {/* Info Section */}
          <div className="w-full md:w-1/3 p-8 flex flex-col justify-center bg-white">
            <div className="mb-6">
              <div className="flex items-center mb-2 text-green-600 font-bold text-xl">
                <MapPin className="w-6 h-6 mr-2" />
                <span>教室地點</span>
              </div>
              <p className="text-gray-900 text-lg font-bold leading-relaxed mb-2">
                反作用力訓練空間<br/>
                <span className="text-base font-normal">804高雄市鼓山區美術東五路61號2樓</span>
              </p>
              <p className="text-gray-600 leading-relaxed">
                鄰近高雄市立美術館，環境清幽單純，擁有絕佳的運動氛圍。
              </p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                <Navigation className="w-4 h-4 mr-2" />
                參觀須知
              </h4>
              <p className="text-sm text-gray-500">
                為了維護每位學員的訓練隱私與品質，我們採<span className="font-bold text-gray-800">全預約制</span>。
                <br /><br />
                現場無櫃檯人員接待，<span className="text-green-600 font-bold">請務必先加 LINE 預約</span>，我們將為您安排專屬導覽時間。
              </p>
            </div>
            
            <a 
              href="https://lin.ee/EwSR70X" 
              target="_blank" 
              rel="noreferrer"
              className="mt-8 block w-full bg-black text-white text-center font-bold py-3 rounded-lg hover:bg-gray-800 transition duration-300"
            >
              立即預約參觀
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;