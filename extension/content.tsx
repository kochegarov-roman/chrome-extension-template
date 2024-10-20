import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from "@/App.tsx";

import styles from "../src/styles.scss?inline";
const mountNode = document.createElement('div');
mountNode.id = 'extension-support-window-root';

const shadowRoot = mountNode.attachShadow({ mode: 'open' });
document.body.appendChild(mountNode);

const style = document.createElement('style');
style.textContent = styles;
shadowRoot.appendChild(style);

createRoot(shadowRoot).render(
  <StrictMode>
    <App />
  </StrictMode>
);