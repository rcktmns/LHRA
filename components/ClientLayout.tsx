'use client';

import Navigation from "@/components/navigation";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [showKitty, setShowKitty] = useState(false);
  const [kittyImg, setKittyImg] = useState("/images/smitty1.jpeg");

  useEffect(() => {
    if (showKitty) {
      const imgs = ["/images/smitty1.jpeg", "/images/smitty2.jpeg"];
      setKittyImg(imgs[Math.floor(Math.random() * imgs.length)]);
    }
  }, [showKitty]);

  return (
    <>
      <Navigation />
      <main>{children}</main>
      {/* Floating Cat Icon */}
      <button
        aria-label="Meet Smith Kitty!"
        onClick={() => setShowKitty(true)}
        className="fixed bottom-6 right-6 z-50 animate-bounce-cat"
        style={{ width: 96, height: 96 }}
      >
        <Image 
          src="/images/cat.svg" 
          alt="Smith Kitty Icon" 
          width={96} 
          height={96}
        />
      </button>
      {/* Smith Kitty Modal */}
      {showKitty && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100]">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full relative">
            <button onClick={() => setShowKitty(false)} className="absolute top-2 right-4 text-2xl">×</button>
            <h3 className="font-florentia text-2xl font-bold text-lhra-red mb-2">Meet Smith Kitty!</h3>
            <p className="font-florentia text-gray-700 mb-4">Smith (or, Smitty) is our very friendly barn cat. He loves laying in the middle of the arena or climbing into the hay loft. If you see him, feel free to pet him and give him some treats.</p>
            <Image src={kittyImg} alt="Smith Kitty" width={220} height={180} className="rounded-lg object-contain mx-auto" />
          </div>
        </div>
      )}
    </>
  );
} 