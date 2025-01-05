import { HelmetProvider } from 'react-helmet-async';

import AppRoutesProvider from './AppRoutesProvider';

function App() {
  return (
    <HelmetProvider>
      <AppRoutesProvider />
    </HelmetProvider>
  );
}

export default App;
