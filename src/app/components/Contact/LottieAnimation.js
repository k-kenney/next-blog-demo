import React from 'react';
import { DotLottiePlayer, Controls } from '@dotlottie/react-player';
import '@dotlottie/react-player/dist/index.css';

const LottieAnimation = () => {
  return (
    <div>
      <DotLottiePlayer
        src="/path-to-lottie.lottie"
        autoplay
        loop
      >
        <Controls />
      </DotLottiePlayer>
    </div>
  );
};

export default LottieAnimation;