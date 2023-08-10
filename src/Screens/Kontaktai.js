import React from 'react'
import Layout from '../Layout/Layout'

function Kontaktai() {
  return (
    <Layout>
        <div className='flex-colo gap-8 w-full min-h-screen text-text lg:py-20 py-10 px-6'>
            <div className="p-8 border bg-subMain border-gray-300 rounded-lg shadow-md">
                <h2 className="text-lg font-semibold mb-4">Portalo administracijos kontaktai</h2>
                <p className="mb-2">
                    UAB „Aštuonios rankos“
                </p>
                <p className="mb-2">
                    El. paštas: info@neskelbiu.lt
                </p>
                <p className="mb-2">
                    Telefonas: +370 865 84454
                </p>
                <p className="mb-2">
                    Faksas: (8-5) 22 88884
                </p>

                <p className="mb-2">
                    Darbo laikas:
                </p>
                <ul className="list-disc ml-6 mb-2">
                    <li>I-V - 8.20-17.00</li>
                    <li>VI-VII - nedirbame</li>
                </ul>

                <p className="mb-2">
                    Įmonės kodas 132333124
                </p>
                <p className="mb-2">
                    PVM mok. kodas LT313115229
                </p>
            </div>
        </div>
      </Layout>
  )
}

export default Kontaktai