import { useEffect, useRef } from 'react';
import QRCodeLib from 'qrcode';

const QRCode = ({ url, size = 200 }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      QRCodeLib.toCanvas(canvasRef.current, url, {
        width: size,
        margin: 2,
        color: {
          dark: '#1a1a1a',
          light: '#ffffff'
        }
      });
    }
  }, [url, size]);

  return <canvas ref={canvasRef} />;
};

export default QRCode;
