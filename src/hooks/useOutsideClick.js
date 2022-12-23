/* eslint-disable react-hooks/exhaustive-deps */
import  {useEffect, useRef} from 'react'

const useOutsideClick = (callback) => {
    const ref = useRef();
    
    useEffect(() => {
      const handleClick = e => {
        if(ref.current && !ref.current.contains(e.target)){
            callback()
        }
      };
    
      return () => {
        document.removeEventListener('click', handleClick, true)
      }
    }, [ref])
    
  return ref;
}

export default useOutsideClick