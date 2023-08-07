import React from 'react'
import { useDropzone } from 'react-dropzone'
import { FiUploadCloud } from 'react-icons/fi'

function Uploader() {
    const {getRootProps, getInputProps} = useDropzone({
        multiple: false,
        maxSize: 100000,
        onDrop: (acceptedFiles) => {
            alert(acceptedFiles[0].name)
        },
    })
  return (
    <div className='w-full text-center'>
        <div 
            {...getRootProps()}
            className='px-6 py-8 border-2 border-border border-dashed bg-main rounded-md cursor-pointer'
        >
            <input {...getInputProps()} />
            <span className='mx-auto flex-colo text-subMain text-3xl'>
                <FiUploadCloud />
            </span>
            <p className='text-sm mt-2'>Tempkite savo paveikslėlį čia</p>
            <em className='text-xs text-border'>
                Priimami tik .jpg ir .png failai
            </em>
        </div>
    </div>
  )
}

export default Uploader