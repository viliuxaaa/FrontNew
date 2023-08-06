import React from 'react'
import { MdDelete } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { GoEye } from 'react-icons/go'

const Head = "text-xs text-left text-text font-semibold px-6 py-2 uppercase"
const Text = 'text-sm text-text text-left leading-6 whitespace-nowrap px-5 py-2'

// rows
const Rows = (poster, i,) => {
    return (
        <tr key={i}>
            <td className={`${Text}`}>
                <div className='w-12 p-1 bg-dry border border-text h-12 rounded overflow-hidden'>
                <img 
                    className='h-full w-full object-cover'
                    src={`/images/movies/${poster.titleImage}`}
                    alt={poster?.name}
                />
                </div>
            </td>
            <td className={`${Text} truncate`}>{poster.postName}</td>
            <td className={`${Text}`}>{poster.categoryA}</td>
            <td className={`${Text}`}>{poster.categoryB}</td>
            <td className={`${Text}`}>{poster.status}</td>
            <td className={`${Text}`}>{poster.price}{' '}€</td>
            <td className={`${Text} float-right flex items-center justify-center gap-2`}>
                <button className='bg-subMain hover:bg-red-600 border border-text text-text rounded flex-colo w-7 h-7'>
                    <MdDelete />
                </button>
                <Link 
                    to={`/movie/${poster?.name}`} 
                    className='bg-subMain border hover:bg-main border-text text-text rounded flex-colo w-7 h-7'
                >
                    <GoEye />
                </Link>
            </td>
        </tr>
    )
}

// table
function Table({data}) {
  return (
    <div className='overflow-x-scroll overflow-hidden relative w-full'>
        <table className='w-full table-auto border border-text divide-y divide-border'>
            <thead>
                <tr className='bg-accent'>
                    <th scope='col' className={`${Head}`}>
                        Img
                    </th>
                    <th scope='col' className={`${Head}`}>
                        Pavadinimas
                    </th>
                    <th scope='col' className={`${Head}`}>
                        Kategorija A
                    </th>
                    <th scope='col' className={`${Head}`}>
                        Kategorija B
                    </th>
                    <th scope='col' className={`${Head}`}>
                        Status
                    </th>
                    <th scope='col' className={`${Head}`}>
                        Kaina
                    </th>
                    <th scope='col' className={`${Head} text-end`}>
                        Veiksmai
                    </th>
                </tr>
            </thead>
            <tbody className='bg-main border-t border-text divide-y divide-gray-800'>
                {data.slice(0,3).map((poster, i) => Rows(poster, i))}
            </tbody>
        </table>
    </div>
  )
}

export default Table