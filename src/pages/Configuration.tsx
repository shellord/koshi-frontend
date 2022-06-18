import React from 'react'
import CalendarModal from '../components/CalendarModal'
import FileModal from '../components/FileModal'
import { TiTick } from 'react-icons/ti'

const Configuration = () => {
  const [isCalendarOpen, setIsCalendarOpen] = React.useState(false)
  const [isFileOpen, setIsFileOpen] = React.useState(false)

  return (
    <div className='p-4'>
      <div className='flex space-x-12'>
        <div className='flex items-center '>
          <p>Date Range: </p>
          <button
            className='border p-1 ml-1'
            onClick={() => setIsCalendarOpen(true)}
          >
            1 Jan 2022 2022 - 31 Jan 2022
          </button>
        </div>
        <div className='flex items-center '>
          <p>Channel: </p>
          <select className='border p-1'>
            <option>All</option>
            <option>Channel 1</option>
            <option>Channel 2</option>
          </select>
        </div>
        <div className='flex items-center '>
          <p>Orders: </p>
          <select className='border p-1'>
            <option>All</option>
            <option>Reconciled</option>
            <option>Not Reconciled</option>
          </select>
        </div>
      </div>
      <div className='mt-5'>
        <button
          className='p-2 border border-blue-500'
          onClick={() => setIsFileOpen(true)}
        >
          <p className='text-blue-500'>Upload New File</p>
        </button>
      </div>

      <div className='mt-5'>
        <table className='table-auto w-full text-center'>
          <thead>
            <tr className='bg-[#C4C4C4] h-10'>
              <th className='font-normal'>Channel</th>
              <th className='font-normal'>File Name</th>
              <th className='font-normal'>Upload Date</th>
              <th className='font-normal'>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b h-10'>
              <td>XXXXXXXXXXXXXXXX</td>
              <td>Delivered</td>
              <td>26 Dec 2021</td>

              <td>
                <div className='flex justify-center'>
                  <TiTick color='green' size={24} />
                </div>
              </td>
            </tr>
            <tr className='border-b h-10'>
              <td>XXXXXXXXXXXXXXXX</td>
              <td>Delivered</td>
              <td>26 Dec 2021</td>

              <td>
                <div className='flex justify-center'>
                  <TiTick color='green' size={24} />
                </div>
              </td>
            </tr>
            <tr className='border-b h-10'>
              <td>XXXXXXXXXXXXXXXX</td>
              <td>Delivered</td>
              <td>26 Dec 2021</td>

              <td>
                <div className='flex justify-center'>
                  <TiTick color='green' size={24} />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <CalendarModal isOpen={isCalendarOpen} setIsOpen={setIsCalendarOpen} />
      <FileModal isOpen={isFileOpen} setIsOpen={setIsFileOpen} />
    </div>
  )
}

export default Configuration
