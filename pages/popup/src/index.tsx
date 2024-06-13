import { createRoot } from 'react-dom/client';
import '@src/index.css';
import Popup from '@src/Popup';
import {KobbleProvider} from "@kobbleio/react-web-extension";

function init() {
  const appContainer = document.querySelector('#app-container');
  if (!appContainer) {
    throw new Error('Can not find #app-container');
  }
  const root = createRoot(appContainer);

  const kobbleDomain = import.meta.env.VITE_KOBBLE_DOMAIN;
  const kobbleClientId = import.meta.env.VITE_KOBBLE_CLIENT_ID;

  root.render(
      <KobbleProvider domain={kobbleDomain} clientId={kobbleClientId}>
        <Popup />
      </KobbleProvider>
  );
}

init();
