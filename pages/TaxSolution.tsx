import React from 'react';
import { GeneratedImage } from '../components/GeneratedImage';

export const TaxSolution: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-serif text-primary">Tax & Inheritance Solution</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              병원을 운영하며 발생하는 높은 소득세, 그리고 언젠가 마주하게 될 막대한 상속세.
              강남부자연구소는 법률과 세무의 경계를 넘나드는 통합 솔루션을 제공합니다.
            </p>
            <div className="space-y-6 pt-8">
              <div className="border-l-2 border-secondary pl-6">
                <h3 className="text-2xl font-serif text-primary mb-2">MSO 법인 설립</h3>
                <p className="text-gray-600">병원 경영지원회사(MSO)를 통한 소득 분산 및 비용 처리 최적화 전략을 수립합니다.</p>
              </div>
              <div className="border-l-2 border-secondary pl-6">
                <h3 className="text-2xl font-serif text-primary mb-2">사전 증여 플랜</h3>
                <p className="text-gray-600">10년 주기를 활용한 체계적인 증여와 신탁 제도를 활용한 자산 승계 로드맵을 제시합니다.</p>
              </div>
            </div>
          </div>
          <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-xl">
             <GeneratedImage 
               prompt="Abstract visualization of tax protection, golden shield, geometric shapes, blue background, clean 3d render" 
               alt="Tax Solution Visual" 
               aspectRatio="3:4"
               className="w-full h-full object-cover"
             />
          </div>
        </div>
      </div>
    </div>
  );
};