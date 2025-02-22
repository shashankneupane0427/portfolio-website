import '../styles/index.scss';
import '../styles/globals.css';
import '../styles/prism-dracula.css';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Ensure script is added only once
    if (document.getElementById('tawkToScript')) return;

    const script = document.createElement('script');
    script.id = 'tawkToScript';
    script.async = true;
    script.src = 'https://embed.tawk.to/67b96ab336619b190acb96be/1ikm4hk3c';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');

    // Ensure the script is added after the window loads
    window.onload = () => {
      document.body.appendChild(script);
    };
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
