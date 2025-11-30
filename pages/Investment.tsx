import React from 'react';
import { GeneratedImage } from '../components/GeneratedImage';

export const Investment: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-5xl md:text-7xl font-serif mb-20 text-center">Global & Local <br/>Dual Strategy</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
           <div className="bg-white/5 p-10 rounded-2xl border border-white/10">
              <div className="h-64 mb-8 rounded-xl overflow-hidden">
                <GeneratedImage 
                  prompt="US Dollar bills stacking up, rising graph, golden arrow, dark background, cinematic finance" 
                  alt="Dollar Investment"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-3xl font-serif mb-4">달러 투자</h2>
              <p className="text-gray-400 leading-relaxed">
                세계 기축 통화인 달러는 위기 시 자산을 방어하는 가장 강력한 수단입니다. 
                미국 국채, 달러 ETF, 그리고 해외 부동산 리츠를 통해 매달 달러 배당을 받는 시스템을 구축합니다.
              </p>
           </div>
           
           <div className="bg-white/5 p-10 rounded-2xl border border-white/10">
              <div className="h-64 mb-8 rounded-xl overflow-hidden">
                <GeneratedImage 
                  prompt="Luxury modern building in Gangnam, night view, architectural photography, sleek design" 
                  alt="Real Estate"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-3xl font-serif mb-4">강남 부동산</h2>
              <p className="text-gray-400 leading-relaxed">
                희소성이 높은 강남의 핵심 입지 부동산은 인플레이션을 방어하고 자산 가치를 퀀텀 점프시키는 핵심입니다.
                병원 개원 입지부터 꼬마 빌딩 매입/매각 타이밍까지 분석합니다.
              </p>
           </div>
        </div>
      </div>
    </div>
  );
};