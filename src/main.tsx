import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@/styles/global/index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';

// const router = createBrowserRouter([
//   {
//     path: '*',
//     element: <App />,
//   },
// ]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
