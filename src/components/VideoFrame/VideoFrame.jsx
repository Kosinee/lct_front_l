import './VideoFrame.css'

export default function VideoFrame({ title, footer, time, children }) {
  return (
    <div className='frame-style'>
      <header className='title-style'>
        <strong>{title}</strong>
      </header>
      <main>
        {children}
      </main>
      <div className='footer-style'>
        {footer}
        {time}
      </div>
    </div>
  );
}
