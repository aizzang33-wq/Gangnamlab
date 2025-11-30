import React from 'react';
import { ArrowRight, TrendingUp, ShieldCheck, Users, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GeneratedImage } from '../components/GeneratedImage';

export const Home: React.FC = () => {
  return (
    <div className="bg-background min-h-screen">
      
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <GeneratedImage 
            prompt="Gangnam skyline at sunset, golden hour, luxury skyscrapers, cinematic, photorealistic, wide angle, deep blue sky" 
            alt="Gangnam Skyline" 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/30 to-primary/90" />
        </div>

        {/* Content Layer */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto space-y-8 animate-fade-in pt-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-secondary/30 bg-primary/40 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
            <span className="text-secondary text-xs font-medium tracking-widest uppercase">For Medical Professionals</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-[1.1] tracking-tight text-balance shadow-black drop-shadow-lg">
            병원장님의 자산을<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
              완벽하게 설계합니다
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto font-light leading-relaxed">
            The General Intelligence for your Wealth.<br/>
            세금으로 사라지는 자산을 방어하고, 달러와 부동산으로 견고한 부의 성를 쌓으십시오.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Link to="/contact" className="group relative px-8 py-4 bg-secondary text-primary font-semibold rounded-full overflow-hidden transition-all hover:scale-105">
              <span className="relative z-10 flex items-center gap-2">
                VIP 프라이빗 세미나 신청 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link to="/about" className="px-8 py-4 text-white border border-white/20 rounded-full hover:bg-white/10 backdrop-blur-sm transition-all">
              연구소 소개 보기
            </Link>
          </div>
        </div>
      </section>

      {/* Problem Definition - Typography Heavy */}
      <section className="py-32 bg-white relative overflow-hidden">
         <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
            <div className="w-16 h-16 mx-auto mb-8 relative">
                 <GeneratedImage 
                  prompt="Gold pixel art flower, minimal, abstract, luxury icon on white background" 
                  alt="Asset Flower" 
                  aspectRatio="1:1"
                  className="rounded-full object-cover"
                 />
            </div>
            
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-serif text-primary leading-tight">
                열심히 일궈낸 병원의 수익,<br/>
                <span className="text-gray-400 italic">지키지 못하면 의미가 없습니다.</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed text-balance max-w-2xl mx-auto">
                많은 원장님들이 진료와 병원 운영에는 최고 전문가이시지만, 
                정작 본인의 자산 관리와 절세 전략 앞에서는 고민이 많으십니다. 
                <br/><br/>
                높아지는 세율, 복잡해지는 상속 증여. 
                이제는 단순한 저축이 아닌, <strong className="text-primary font-medium">전략적인 자산 재배치</strong>가 필요한 시점입니다.
              </p>
            </div>
         </div>
      </section>

      {/* Solution Preview - Card Grid (Like 'Cofounder' section) */}
      <section className="py-32 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-none">
                고립된 자산은<br/>위험합니다.
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                부동산, 예금, 주식... 흩어져 있는 자산들을 하나의 유기적인 시스템으로 연결해야 합니다.
                강남부자연구소는 달러 투자와 강남 부동산을 양축으로 하는 
                가장 안전하고 강력한 포트폴리오를 제안합니다.
              </p>
              <Link to="/investment" className="text-secondary hover:text-white transition-colors border-b border-secondary pb-1 inline-flex items-center gap-2">
                투자 전략 자세히 보기 <ArrowRight className="w-4 h-4"/>
              </Link>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
               <GeneratedImage 
                prompt="Futuristic financial interface displaying interconnected asset nodes, gold and blue lines, dark background, data visualization" 
                alt="Asset Network" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
               />
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-colors group">
              <TrendingUp className="w-10 h-10 text-secondary mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-serif mb-4">달러 자산 확보</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                원화 가치 하락에 대비한 필수 헤지 전략. 안정적인 달러 현금 흐름을 창출하는 미국 우량 자산 투자 솔루션.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-colors group">
              <Building2 className="w-10 h-10 text-secondary mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-serif mb-4">강남 부동산</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                대한민국 부의 상징이자 불패의 자산. 성공적인 병원 개원 입지 선정부터 빌딩 매입까지 원스톱 자문.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-colors group">
              <ShieldCheck className="w-10 h-10 text-secondary mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-serif mb-4">절세 및 승계</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                법인을 활용한 합법적 절세와 자녀를 위한 사전 증여 플랜. 세금 없는 부의 이전을 실현합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof - Image & Text */}
      <section className="py-32 bg-[#F0F4F8]">
        <div className="max-w-7xl mx-auto px-6">
           <div className="flex flex-col md:flex-row items-end justify-between mb-12">
              <h2 className="text-4xl font-serif text-primary">검증된 인사이트</h2>
              <Link to="/about" className="text-gray-600 hover:text-primary mt-4 md:mt-0 flex items-center gap-2 text-sm font-medium">
                 전체 아티클 보기 <span className="w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center text-[10px]">></span>
              </Link>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Introducing Tax Solutions",
                  desc: "장애인 표준사업장 설립으로 절세 플랜 및 무상 지원금 지원",
                  img: "Doctors in a luxury meeting room discussing charts, cinematic lighting"
                },
                {
                  title: "The Dollar Standard",
                  desc: "킹달러 시대, 병원장님이 반드시 알아야 할 환율 방어 전략.",
                  img: "Close up of US Dollar bills and gold bars, artistic depth of field"
                },
                {
                  title: "Real Estate Legacy",
                  desc: "자녀에게 물려줄 최고의 유산, 강남 꼬마빌딩 매입 가이드.",
                  img: "Gangnam street view with modern architecture, artistic painting style"
                }
              ].map((item, idx) => (
                <div key={idx} className="group cursor-pointer">
                   <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6 relative">
                      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors z-10" />
                      <GeneratedImage prompt={item.img} alt={item.title} aspectRatio="4:3" className="group-hover:scale-105 transition-transform duration-500" />
                   </div>
                   <h3 className="text-xl font-serif text-primary mb-2 group-hover:text-secondary transition-colors">{item.title}</h3>
                   <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 bg-white text-center">
        <div className="max-w-3xl mx-auto px-6 space-y-8">
           <div className="mx-auto w-12 h-12 text-primary mb-4">
             <Users className="w-full h-full" strokeWidth={1} />
           </div>
           <h2 className="text-4xl md:text-5xl font-serif text-primary">
             We're building tools for<br/>
             wealth that runs itself.
           </h2>
           <p className="text-gray-500 text-lg">
             이미 수많은 원장님들이 강남부자연구소와 함께 자산의 레벨을 높였습니다.<br/>
             지금, 소규모 프라이빗 세미나에 초대합니다.
           </p>
           <Link to="/contact" className="inline-block mt-8 border-b border-primary pb-1 text-primary hover:text-secondary hover:border-secondary transition-all">
             세미나 참석 신청하기 &rarr;
           </Link>
        </div>
      </section>

      {/* Bottom Hero */}
      <div className="h-[60vh] relative overflow-hidden">
        <GeneratedImage 
          prompt="Serene park in the middle of a futuristic city, digital painting style, pixel art influence, soothing blue and green tones" 
          alt="Future Vision" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-end justify-between p-8 bg-gradient-to-t from-primary/90 to-transparent">
           <span className="text-white/60 text-xs">© The General Intelligence Company of New York 2025 style</span>
           <span className="text-white/60 text-xs">Design by Gemini Nano Banana</span>
        </div>
      </div>
    </div>
  );
};