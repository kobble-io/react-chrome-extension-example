import { createRoot } from 'react-dom/client';
import '@src/index.css';
import Newtab from '@src/Newtab';
import {KobbleProvider} from "@kobbleio/react-web-extension";
import {useEffect} from "react";

function init() {
  const appContainer = document.querySelector('#app-container');
  if (!appContainer) {
    throw new Error('Can not find #app-container');
  }
  const root = createRoot(appContainer);

  const kobbleDomain = import.meta.env.VITE_KOBBLE_DOMAIN;
  const kobbleClientId = import.meta.env.VITE_KOBBLE_CLIENT_ID;

  if (!kobbleDomain || !kobbleClientId) {
    throw new Error('Please set VITE_KOBBLE_DOMAIN and VITE_KOBBLE_CLIENT_ID in your .env file');
  }

  root.render(
      <KobbleProvider
          domain={kobbleDomain}
          clientId={kobbleClientId}
      >
        <Newtab />
      </KobbleProvider>
  );
}

init();
