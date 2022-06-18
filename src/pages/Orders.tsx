import React from 'react'
import CalendarModal from '../components/CalendarModal'
import { TiTick } from 'react-icons/ti'
const Orders = () => {
  const [isCalendarOpen, setIsCalendarOpen] = React.useState(false)

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
        <table className='table-auto w-full text-center'>
          <thead>
            <tr className='bg-[#C4C4C4] h-10'>
              <th className='font-normal'>Order Id</th>
              <th className='font-normal'>Order Status</th>
              <th className='font-normal'>Date</th>
              <th className='font-normal'>Channel</th>
              <th className='font-normal'>Customer Payable</th>
              <th className='font-normal'>Commision</th>
              <th className='font-normal'>Charges</th>
              <th className='font-normal'>Taxes</th>
              <th className='font-normal'>Net Recievable</th>
              <th className='font-normal'>Reconcile Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b h-10'>
              <td>XXXXXXXXXXXXXXXX</td>
              <td>Delivered</td>
              <td>26 Dec 2021</td>
              <td>Swiggy</td>
              <td>428.6</td>
              <td>20.00</td>
              <td>89.00</td>
              <td>20.42</td>
              <td>298.45</td>
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
              <td>Swiggy</td>
              <td>428.6</td>
              <td>20.00</td>
              <td>89.00</td>
              <td>20.42</td>
              <td>298.45</td>
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
              <td>Swiggy</td>
              <td>428.6</td>
              <td>20.00</td>
              <td>89.00</td>
              <td>20.42</td>
              <td>298.45</td>
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
    </div>
  )
}

export default Orders
