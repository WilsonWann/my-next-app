import { useEffect } from 'react'

const useCallbackFn = (callback: () => void, trigger?: any,) => {
  useEffect(() => {
    callback();
  }, [trigger]);
}

export default useCallbackFn