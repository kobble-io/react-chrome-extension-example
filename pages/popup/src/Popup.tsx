import '@src/Popup.css';
import { useStorageSuspense, withErrorBoundary, withSuspense } from '@chrome-extension-boilerplate/shared';
import { exampleThemeStorage } from '@chrome-extension-boilerplate/storage';
import { LoginButton, LogoutButton, SignedIn, SignedOut } from "@kobbleio/react-web-extension";

import { ComponentPropsWithoutRef } from 'react';

const Popup = () => {
  const theme = useStorageSuspense(exampleThemeStorage);

  return (
    <div
      className="App"
      style={{
        backgroundColor: theme === 'light' ? '#eee' : '#222',
      }}>
      <header className="App-header" style={{ color: theme === 'light' ? '#222' : '#eee' }}>
        <img src={chrome.runtime.getURL('newtab/logo.svg')} className="App-logo" alt="logo" />

        <SignedIn>
            <p>You are signed in</p>
            <LogoutButton>
                <span className={'font-bold mt-4 py-1 px-4 rounded shadow hover:scale-105 bg-white text-black'}>Logout</span>
            </LogoutButton>
        </SignedIn>

        <SignedOut>
            <p>You are signed out</p>
            <LoginButton>
                <span className={'font-bold mt-4 py-1 px-4 rounded shadow hover:scale-105 bg-white text-black cursor-pointer'}>Login</span>
            </LoginButton>
        </SignedOut>

        <p>
          Edit <code>pages/popup/src/Popup.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: theme === 'light' ? '#0281dc' : undefined, marginBottom: '10px' }}>
          Learn React!
        </a>
      </header>
    </div>
  );
};

export default withErrorBoundary(withSuspense(Popup, <div> Loading ... </div>), <div> Error Occur </div>);
