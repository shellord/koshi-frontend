import React from 'react'
import OrderCard from '../components/OrderCard'
import { PieChart } from 'react-minimal-pie-chart'
import BarChart from '../components/BarChart'
import CalendarModal from '../components/CalendarModal'

const Home = () => {
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
      </div>
      {/* Orders List */}
      <div className='mt-5 space-y-5'>
        <OrderCard
          orderName='ALL ORDERS'
          count={268910}
          paidByUsers={783972932}
          commision={38393393}
          tax={293322}
          net={2334223}
        />
        <OrderCard
          orderName='ALL ORDERS'
          count={268910}
          paidByUsers={783972932}
          commision={38393393}
          tax={293322}
          net={2334223}
        />
        <OrderCard
          orderName='ALL ORDERS'
          count={268910}
          paidByUsers={783972932}
          commision={38393393}
          tax={293322}
          net={2334223}
        />
        <OrderCard
          orderName='ALL ORDERS'
          count={268910}
          paidByUsers={783972932}
          commision={38393393}
          tax={293322}
          net={2334223}
        />
      </div>
      {/* Distribution Section */}
      <div className='flex space-x-2 mt-5'>
        <div className='border p-2 flex-1'>
          <div>
            <p>Order Description</p>
          </div>
          <div className='flex space-x-10 justify-around items-center h-96'>
            <div className='h-56 w-56'>
              <PieChart
                data={[
                  { title: 'One', value: 10, color: '#E38627' },
                  { title: 'Two', value: 15, color: '#C13C37' },
                  { title: 'Three', value: 20, color: '#6A2135' },
                ]}
              />
            </div>
            <div>
              <ul className='list-disc'>
                <li>
                  <span>Swiggy </span>
                  <span>44%</span>
                </li>
                <li>
                  <span>Amazon </span>
                  <span>44%</span>
                </li>
                <li>
                  <span>Zomato </span>
                  <span>44%</span>
                </li>
                <li>
                  <span>Eatfit </span>
                  <span>44%</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='border p-2 flex-1 '>Product Distribution</div>
        <div className='border p-2 flex-1 '>Brand Distribution</div>
      </div>
      <div className='h-56'>
        <BarChart />
      </div>
      <CalendarModal isOpen={isCalendarOpen} setIsOpen={setIsCalendarOpen} />
    </div>
  )
}

export default Home
