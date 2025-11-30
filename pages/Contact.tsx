import React from 'react';
import { ExternalLink, CheckCircle2, Crown } from 'lucide-react';
import { GeneratedImage } from '../components/GeneratedImage';

export const Contact: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-background flex items-center justify-center py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-[60%] bg-primary/5 -skew-y-3 z-0 transform origin-top-left" />

      <div className="max-w-5xl w-full mx-auto px-6 relative z-10">
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col md:flex-row min-h-[600px]">
          
          {/* Left Side: Visual & Context */}
          <div className="md:w-5/12 bg-primary text-white p-10 flex flex-col justify-between relative overflow-hidden">
             {/* Abstract BG */}
             <div className="absolute inset-0 opacity-30 mix-blend-overlay">
                <GeneratedImage 
                  prompt="Abstract golden lines connecting nodes on dark blue background, network, luxury pattern, high end corporate identity" 
                  alt="Pattern" 
                  aspectRatio="9:16"
                  className="w-full h-full object-cover"
                />
             </div>
             
             <div className="relative z-10 mt-4">
               <div className="flex items-center gap-2 mb-6 text-secondary">
                  <Crown className="w-6 h-6" />
                  <span className="text-sm font-bold tracking-widest uppercase">For Leaders Only</span>
               </div>
               <h3 className="text-3xl font-serif mb-6 leading-tight">
                 대한민국 1%<br/>원장님을 위한<br/><span className="text-secondary">특별한 후원</span>
               </h3>
               <p className="text-white/80 leading-relaxed font-light">
                 운영 중이신 의사회 소모임이나<br/>
                 동문회, 학술 모임이 있으신가요?<br/><br/>
                 강남부자연구소가<br/>
                 성공적이고 품격 있는 모임을 위해<br/>
                 <strong className="text-white font-medium border-b border-secondary/50">식대 비용 및 콘텐츠를 후원</strong>해 드립니다.
               </p>
             </div>

             <div className="relative z-10 space-y-5 mb-4">
                <div className="flex items-start gap-4">
                   <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-secondary flex-shrink-0 mt-1">
                     <CheckCircle2 size={18} />
                   </div>
                   <div>
                     <span className="block text-sm font-bold text-white">식대 비용 지원</span>
                     <span className="text-xs text-white/60">모임 진행 시 발생하는 식대 비용</span>
                   </div>
                </div>
                <div className="flex items-start gap-4">
                   <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-secondary flex-shrink-0 mt-1">
                     <CheckCircle2 size={18} />
                   </div>
                   <div>
                     <span className="block text-sm font-bold text-white">검증된 투자 인사이트</span>
                     <span className="text-xs text-white/60">전문가 초빙 및 시크릿 리포트 제공</span>
                   </div>
                </div>
             </div>
          </div>

          {/* Right Side: Action */}
          <div className="md:w-7/12 p-10 md:p-16 flex flex-col justify-center items-center text-center bg-white relative">
            <div className="absolute top-0 right-0 p-6 opacity-5">
               <Crown className="w-32 h-32" />
            </div>

            <span className="inline-block py-1 px-3 rounded-full bg-secondary/10 text-secondary text-xs font-bold mb-6">
              LIMITED OFFER
            </span>

            <h1 className="text-3xl md:text-4xl font-serif text-primary mb-6 leading-tight text-balance">
              VIP 병원장 소모임<br/>
              <span className="text-secondary decoration-primary/20 underline decoration-1 underline-offset-4">세미나 후원 받기</span> 신청
            </h1>
            
            <p className="text-gray-500 mb-12 leading-relaxed text-balance max-w-md mx-auto">
              하단의 버튼을 통해 신청서를 작성해 주시면,<br/>
              담당자가 일정 및 후원 규모 검토 후<br/>
              <strong className="text-primary">24시간 이내</strong>에 개별 연락을 드립니다.
            </p>

            <a 
              href="https://buly.kr/7x7VobN" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative w-full max-w-sm bg-primary text-white font-bold py-5 rounded-xl hover:bg-[#1a2540] transition-all shadow-xl shadow-primary/20 hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-3 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <span className="relative z-10 text-lg">신청서 작성하기</span>
              <ExternalLink className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <p className="mt-8 text-xs text-gray-400 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              현재 신청 접수 중입니다. (선착순 마감 가능)
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};