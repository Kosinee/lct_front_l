import Header from './components/Header/Header'
import UploadVideo from './components/UploadVideo'
import AnalogVideo from './components/AnalogVideo'
import VideoFrame from './components/VideoFrame/VideoFrame'
import { useState } from 'react'

function App() {

  const [time_upload, set_time_upload] = useState("00:00 - 00:00")
  const [time_analog, set_time_analog] = useState("00:00 - 00:00")

  return (
    <>
      <Header />
      <main>

        <section style={{ display: 'flex', justifyContent: 'center' }}> 
            <VideoFrame title="Загрузите видео, которое хотите проверить на нарушение авторских прав." footer="Промежутки времени: " time = { time_upload }>
            <UploadVideo set_time_upload = { set_time_upload } set_time_analog = { set_time_analog } />
            </VideoFrame>

            <VideoFrame title="Видео, для которого нарушаются авторские права." footer="Промежутки времени: " time = { time_analog }>
            <AnalogVideo src="http://127.0.0.1:8000/video/video.mp4"/>
            </VideoFrame>
        </section>

      </main>
    </>
  )
}

export default App
