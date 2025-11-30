import React from 'react';
import { GeneratedImage } from '../components/GeneratedImage';

interface HistoryItem {
  year: string;
  events: string[];
}

const historyData: HistoryItem[] = [
  {
    year: "2024",
    events: [
      "제22회 서울시 강서 7개구 의사회 합동 학술대회 (7월)"
    ]
  },
  {
    year: "2023",
    events: [
      "천안아산 이비인후과의사회 (3월)",
      "대한근골격계초음파학회 임원세미나 (3월)",
      "마취통증의학과 춘계학술대회 (2월)"
    ]
  },
  {
    year: "2022",
    events: [
      "강남구의사회 임원대상세미나 (9월)",
      "북일동문의사회 소모임세미나 (9월)",
      "서울대AMP과정 소모임세미나 (7월)",
      "타워팰리스 G동 3,4차 세미나 (6월)",
      "타워팰리스 A동 1,2차 세미나 (5월)"
    ]
  },
  {
    year: "2021",
    events: [
      "대명세무법인 상속증여세미나 (매월)",
      "서울의대 여의사회 소모임세미나 (7월)",
      "강남구 성형외과의사 소모임세미나 (5월)"
    ]
  },
  {
    year: "2019",
    events: [
      "강남구의사회 임원대상세미나 (7월)",
      "은평구치과의사회 소모임세미나 (7월)",
      "강남구 변호사 소모임세미나 (6월)",
      "강남구의사회 연세의대동문모임 (6월)",
      "의사전문포털 아임닥터주관 세미나 (4월)",
      "연세대치대 동문모임 세미나 (4월)",
      "덴탈빈 포인트 개원세미나 (3월)",
      "제32차 마취통증의학과 학술대회 (3월)"
    ]
  },
  {
    year: "2018",
    events: [
      "대한임상초음파학회 학술대회 (12월)"
    ]
  }
];

export const About: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-background">
      {/* Introduction Section */}
      <div className="max-w-4xl mx-auto px-6 py-20 space-y-20">
        <section className="text-center space-y-6">
           <h1 className="text-4xl md:text-5xl font-serif text-primary">연구소 소개</h1>
           <p className="text-xl text-gray-600 font-light">"부의 이동을 미리 읽고, 고객의 자산을 선점합니다."</p>
        </section>

        {/* Director Profile */}
        <section className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
           <GeneratedImage 
            prompt="Portrait of a Korean male executive wearing round metal glasses, white shirt, bright red tie, and black suit. Short neat black hair. Background is a modern luxury office with a view of Seoul skyline through floor-to-ceiling windows. Professional photography, photorealistic, 8k." 
            alt="Director" 
            className="w-full h-full object-cover"
           />
           <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-primary to-transparent text-white">
              <h3 className="text-2xl font-serif mb-1">연구소장 Andrew Park</h3>
              <p className="text-sm opacity-80">전)외자계 제약회사 ASM 본부장 / 현) 강남부자연구소장, 트랜스글로벌 이사</p>
           </div>
        </section>

        {/* Vision Text */}
        <section className="prose prose-lg prose-slate mx-auto text-center md:text-left">
          <p>
            강남부자연구소는 단순한 투자 자문을 넘어, <strong>대한민국 상위 1% 전문직을 위한 패밀리 오피스</strong> 서비스를 지향합니다.
            자산의 증식뿐만 아니라, 안전한 이전과 승계까지 고려한 종합적인 솔루션을 제공합니다.
          </p>
          <p>
            우리는 '데이터'와 '현장'을 믿습니다. 매주 발행되는 [강남 부자 리포트]는 
            실제 시장의 흐름을 가장 빠르게 분석하여 원장님들께 전달됩니다.
          </p>
        </section>
      </div>

      {/* History Timeline Section */}
      <div className="bg-white py-24 border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
             <div className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-xs font-bold tracking-wider mb-2 rounded-full">HISTORY</div>
             <h2 className="text-3xl md:text-4xl font-serif text-primary">검증된 발자취</h2>
             <p className="text-gray-500 max-w-2xl mx-auto">
               대한민국 최고 의사회 및 전문가 그룹과 함께해온 강남부자연구소의 세미나 이력입니다.
               수많은 강연을 통해 검증된 인사이트를 제공해왔습니다.
             </p>
          </div>

          <div className="relative ml-4 md:ml-12 border-l border-secondary/30 space-y-0">
            {historyData.map((item, index) => (
              <div key={index} className="relative pl-8 md:pl-12 pb-16 last:pb-0">
                {/* Dot */}
                <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-secondary ring-4 ring-white shadow-sm"></div>
                
                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-12 group">
                  {/* Year */}
                  <div className="flex-shrink-0 w-24 pt-0.5">
                    <span className="text-3xl font-serif text-secondary font-bold block group-hover:text-primary transition-colors duration-300">
                      {item.year}
                    </span>
                  </div>

                  {/* Events List */}
                  <div className="flex-grow bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-lg transition-all duration-300 hover:bg-white hover:border-secondary/20">
                    <ul className="space-y-3">
                      {item.events.map((event, eventIndex) => (
                        <li key={eventIndex} className="flex items-start gap-3 text-gray-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-2.5 flex-shrink-0 group-hover:bg-secondary transition-colors"></span>
                          <span className="leading-relaxed font-light">{event}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Visual Break */}
      <div className="h-80 relative overflow-hidden">
        <GeneratedImage 
          prompt="Luxury hotel conference room set up for a seminar, elegant chairs, podium, golden ambient lighting, depth of field, high end interior design" 
          alt="Seminar Hall" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/60 flex items-center justify-center">
           <div className="text-center text-white px-6">
              <h3 className="text-3xl font-serif mb-4">함께 성장하는 파트너</h3>
              <p className="text-white/80 font-light max-w-xl mx-auto">
                성공적인 병원 경영과 자산 관리, 그 여정에 강남부자연구소가 함께하겠습니다.
              </p>
           </div>
        </div>
      </div>
    </div>
  );
};