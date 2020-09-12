import React from 'react'
import './ImageLinkForm.css'


const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div>
            <p className='f4 ttu white'>
                {'This magic brain will detect faces in your pictures.Give it a try.'}
            </p>
            <div className='center'>
                <div className='form center pa4 shadow-5 br3'>
                    <input
                        className='f4 pa2 w-70 center' type='tex'
                        onChange={onInputChange} />
                    <button
                        className='w-30 grow f4 link ph3 pv2 dib white bg-light-red'
                        onClick={onButtonSubmit}> Detect </button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;
