import React, {useState} from 'react'

    const ExpandingPostDescription = (text, maxChar) => {
    const [isPshorten, setIsPshorten] = useState (false);
    const toggleReadMoreLess = () => {
        setIsPshorten(!isPshorten);
    }
    
  return (
    <div>
        {isPshorten ? text : '${text.slice(0, maxChar)}...'}
        <button onClick={toggleReadMoreLess}>{isPshorten ? 'Read Less' : 'Read More'}</button>
    </div>
  )
}

export default ExpandingPostDescription