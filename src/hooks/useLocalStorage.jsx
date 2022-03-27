import { useState, useEffect } from 'react';

// useLocalStorageState function is basically the useState function overlaying local storage retrieval and updating
function useLocalStorageState(key, defaultVal) {
  const [state, setState] = useState(() => {
    let val;
    try {
      val = JSON.parse(localStorage.getItem(key) || String(defaultVal));
    }
    catch (e) {
      val = defaultVal;
    }
    return val;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, setState];
}

export default useLocalStorageState;