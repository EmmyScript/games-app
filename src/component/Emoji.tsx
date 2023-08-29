import tales from '../assets/tales.jpg'
import tale from '../assets/tale.jpg'

import React from 'react'

interface Props {
    rating:number;
}

const Emoji = ({rating} : Props) =>{
if(rating < 3 ) return null;
  return (
    <div className = 'emoji'>
      
<img src={tales} />
<h1>wicked world..boss</h1>
    </div>
  )
}

export default Emoji