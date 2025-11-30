import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-gray-400 py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="space-y-4">
          <h3 className="text-xl font-serif text-white">강남부자연구소</h3>
          <p className="text-sm leading-relaxed">
            대한민국 상위 1%를 위한 자산 관리 및 투자 전략 컨설팅.<br/>
            병원장님의 자산을 지키고 불리는 파트너.
          </p>
        </div>
        
        <div>
          <h4 className="text-white font-medium mb-4">Service</h4>
          <ul className="space-y-2 text-sm">
            <li>상속/증여 컨설팅</li>
            <li>법인 자산 운용</li>
            <li>해외 투자 포트폴리오</li>
            <li>강남 부동산 자문</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-medium mb-4">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>서울시 강남구 테헤란로 313</li>
            <li>010-2393-7093</li>
            <li>ace9164@naver.com</li>
          </ul>
        </div>

        <div>
           <h4 className="text-white font-medium mb-4">Legal</h4>
           <ul className="space-y-2 text-sm">
            <li>개인정보처리방침</li>
            <li>이용약관</li>
            <li>법적고지</li>
           </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-gray-800 text-center text-xs text-gray-600">
        © 2024 Gangnam Rich Research Institute. All rights reserved. Designed by Gemini.
      </div>
    </footer>
  );
};