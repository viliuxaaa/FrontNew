import React from 'react'
import MainModal from './MainModal'

function PosterImgModal({ modalOpen, setModalOpen, img}) {
  return (
    <MainModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <div className='inline-block sm:w-4/5 border border-border md:w-3/5 lg:w-2/5 align-middle p-1 overflow-y-auto h-4/5 lg:h-3/5 2xl:-2/5 bg-darkAccent text-white'>
                <div className='flex flex-col backdrop:gap-1'>
                    <img 
                            src={img?.url}
                            alt={img?.alt} 
                            className='w-full h-full object-cover rounde'
                        />
                </div>
        </div>
    </MainModal>
  )
}

export default PosterImgModal