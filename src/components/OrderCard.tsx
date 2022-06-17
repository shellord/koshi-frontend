type Props = {
  orderName: string
  count: number
  paidByUsers: number
  commision: number
  tax: number
  net: number
}

const OrderPays = ({ amount, label }: { amount: number; label: string }) => {
  return (
    <div>
      <p className='text-lg'>$ {amount}</p>
      <p className='text-gray-500'>{label}</p>
    </div>
  )
}
const OrderCard: React.FC<Props> = ({
  orderName,
  count,
  paidByUsers,
  commision,
  tax,
  net,
}) => {
  return (
    <div className='flex border p-3 space-x-56'>
      <div className='w-56'>
        <p className='text-2xl'>{count}</p>
        <p className='text-gray-500'> {orderName}</p>
      </div>
      <div className='flex items-center justify-between w-full'>
        <OrderPays label='Paid by Users' amount={paidByUsers} />
        <OrderPays label='Commision' amount={commision} />
        <OrderPays label='Govt.tax' amount={tax} />
        <OrderPays label='Net payable' amount={net} />
      </div>
    </div>
  )
}

export default OrderCard
