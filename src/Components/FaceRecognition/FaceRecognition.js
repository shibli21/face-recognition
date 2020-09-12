import React from 'react'
import './FaceRecognition.css'

const FaceRecognition = ({ imageUrl, box }) => {
    return (
        <div className='center ma'>
            <div className=' absolute mt2' >
                <img id="inputimg" alt='' src={imageUrl} width='500px' height='auto' />
                <div className='bounding-box' style={{ top: box.tr, right: box.rc, left: box.lc, bottom: box.br}}></div>
            </div>
        </div>
    );
}

export default FaceRecognition;

