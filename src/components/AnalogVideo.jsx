import React, { useEffect, useRef } from 'react';

export default function AnalogVideo({ src }) {
  const videoRef = useRef(null);

  useEffect(() => {
    // При каждом обновлении src (например, при получении нового видео с сервера)
    // сбрасываем currentTime видеоплеера на 0.
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  }, [src]);

  return (
    <video ref={videoRef} width="640" height="360" controls>
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
