import React, { useEffect, useState } from 'react'
import MainModal from './MainModal'



function PictureUploadModal({ modalOpen, setModalOpen }) {

    function handleSubmit() {

    }

  return (
    <MainModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <div className='inline-block border border-border md:w-3/5 lg:w-2/5 align-middle p-1 overflow-y-auto h-4/5 lg:h-3/5 2xl:-2/5 bg-darkAccent text-white'>
            <form onSubmit={handleSubmit}>
                <label
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    htmlFor="file_input"
                >
                    Upload file
                </label>
                <input
                    className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    aria-describedby="file_input_help"
                    id="file_input"
                    type="file"
                />
                <p
                    className="mt-1 text-sm text-gray-500 dark:text-gray-300"
                    id="file_input_help"
                >
                    SVG, PNG, JPG or GIF (MAX. 800x400px).
                </p>
                <button>Įkelti nuotrauką</button>
            </form>  
        </div>
    </MainModal>
  )
}

export default PictureUploadModal