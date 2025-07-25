import { Be_Vietnam_Pro } from 'next/font/google';
// import { Provider } from "react-redux";
// import { store } from '../store/';
import ReduxProvider from '../store/ReduxProvider';
import Image from 'next/image';
import NextTopLoader from 'nextjs-toploader';
import { DEFAULT_PAGE_TITLE } from '@/context/constants';
import AppProvidersWrapper from '@/components/wrappers/AppProvidersWrapper';
import logoDarkFull from '@/assets/images/logo-dark.png';
import logoSm from '@/assets/images/logo-sm.png';
import '@/assets/scss/app.scss';
import '@/assets/scss/icons.scss';
const beVietnamPro = Be_Vietnam_Pro({
  weight: ['300', '400', '500', '600'],
  display: 'swap',
  subsets: ['latin']
});
export const metadata = {
  title: {
    template: '%s | Client Portal',
    default: DEFAULT_PAGE_TITLE
  },
  description: ''
};
const splashScreenStyles = `
#splash-screen {
  position: fixed;
  top: 50%;
  left: 50%;
  background: white;
  display: flex;
  height: 100%;
  width: 100%;
  transform: translate(-50%, -50%);
  align-items: center;
  justify-content: center;
  z-index: 9999;
  opacity: 1;
  transition: all 15s linear;
  overflow: hidden;
}

#splash-screen.remove {
  animation: fadeout 0.7s forwards;
  z-index: 0;
}

@keyframes fadeout {
  to {
    opacity: 0;
    visibility: hidden;
  }
}
`;
export default function RootLayout({
  children
}) {
  return <html lang="en">
      <head>
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossOrigin="" />
        <style suppressHydrationWarning>{splashScreenStyles}</style>
      </head>
      <body className={beVietnamPro.className} data-sidebar-size="collapsed">
        <div id="splash-screen">
          <Image alt="logo-square" width={46} height={46} src={logoSm} style={{
          height: 46,
          width: 46
        }} priority />
          <Image alt="logo-text" width={59} height={24} src={logoDarkFull} style={{
          height: 24,
          width: 59,
          marginInlineStart: 6
        }} priority />
        </div>
        <NextTopLoader color="#22c55e" showSpinner={false} />
        <div id="__next_splash">
       
        <ReduxProvider> {/* Now, Redux runs in a Client Component */}
          <AppProvidersWrapper>{children}</AppProvidersWrapper>
        </ReduxProvider>
      
        </div>
      </body>
    </html>;
}