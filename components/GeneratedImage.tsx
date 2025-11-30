import React, { useState, useEffect } from 'react';
import { generateImage } from '../services/geminiService';
import { GeminiImageProps, AspectRatio } from '../types';
import { ImageIcon, Loader2 } from 'lucide-react';

export const GeneratedImage: React.FC<GeminiImageProps> = ({ prompt, alt, className = "", aspectRatio = "16:9" }) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    let isMounted = true;

    const fetchImage = async () => {
      try {
        const generated = await generateImage(prompt, aspectRatio as AspectRatio);
        if (isMounted) {
          if (generated) {
            setImageUrl(generated);
          } else {
            // Fallback to Lorem Flickr if API fails or no key
            // Constructing a reliable fallback URL based on keywords from prompt
            const keywords = prompt.split(' ').slice(0, 2).join(',');
            const ratioMap: Record<AspectRatio, { w: number; h: number }> = {
              "16:9": { w: 1600, h: 900 },
              "1:1": { w: 1000, h: 1000 },
              "9:16": { w: 900, h: 1600 },
              "4:3": { w: 1024, h: 768 },
              "3:4": { w: 768, h: 1024 },
            };
            const { w, h } = ratioMap[aspectRatio as AspectRatio];
            setImageUrl(`https://loremflickr.com/${w}/${h}/${keywords.replace(/ /g, ',')}/all`);
          }
        }
      } catch (e) {
        console.error(e);
        if (isMounted) setError(true);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchImage();

    return () => {
      isMounted = false;
    };
  }, [prompt, aspectRatio]);

  if (loading) {
    return (
      <div className={`flex items-center justify-center bg-slate-100 animate-pulse ${className}`} style={{ minHeight: '200px' }}>
        <Loader2 className="w-8 h-8 text-slate-400 animate-spin" />
        <span className="ml-2 text-sm text-slate-500 font-serif">Designing...</span>
      </div>
    );
  }

  if (error || !imageUrl) {
    return (
      <div className={`flex items-center justify-center bg-slate-200 ${className}`}>
        <ImageIcon className="w-8 h-8 text-slate-400" />
      </div>
    );
  }

  return (
    <img
      src={imageUrl}
      alt={alt}
      className={`object-cover w-full h-full transition-opacity duration-700 ease-in-out ${className}`}
      loading="lazy"
    />
  );
};