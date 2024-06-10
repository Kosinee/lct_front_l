import React, { useState, useRef } from 'react';

export default function UploadVideo({ set_time_upload, set_time_analog }) {
  const [videoSrc, setVideoSrc] = useState(null);
  const videoRef = useRef(null);
  const [showUpload, setShowUpload] = useState(true); // Добавили состояние для кнопки

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setVideoSrc(e.target.result);
        setShowUpload(true);
      };

      reader.readAsDataURL(file);

      // Отправка данных на сервер
      const formData = new FormData();
      formData.append('video', file); // 'video' - имя поля на сервере 

      fetch('http://127.0.0.1:8000/upload', { // Замените '/upload' на ваш URL 
        method: 'POST',
        body: formData 
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Ошибка загрузки видео');
        }
        
        return response.json(); //  Если сервер возвращает JSON
      })
      .then(data => {
        console.log('Видео успешно загружено:', data); 
        set_time_upload(data.time_upload)
        set_time_analog(data.time_analog)
      })
      .catch(error => {
        console.error('Ошибка:', error);
      });
    }
  };

  const handleShowUpload = () => {
    setShowUpload(true); // Показываем кнопку снова
  };

  return (
    <div>
      {showUpload && ( // Условный рендеринг кнопки загрузки
        <input type="file" accept="video/*" onChange={handleFileChange} />
      )}

      {videoSrc && (
        <div>
          <video 
            key={videoSrc} 
            ref={videoRef} 
            width="640" 
            height="360" 
            controls 
            onEnded={handleShowUpload} // Показываем кнопку после окончания видео
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  );
}
