import React from 'react';

export const useConnection = (): boolean => {
  const [isOnline, setConnection] = React.useState(window.navigator.onLine);

  const updateConnection = (): void => {
    setConnection(window.navigator.onLine);
  };

  React.useEffect(() => {
    window.addEventListener('offline', updateConnection);

    window.addEventListener('online', updateConnection);

    return () => {
      window.removeEventListener('offline', updateConnection);

      window.removeEventListener('online', updateConnection);
    };
  });

  return isOnline;
};
