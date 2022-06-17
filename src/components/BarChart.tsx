import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [0, 2, 4, 6, 8, 10, 12],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: [2, 4, 6, 8, 10, 12, 14],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
}
const BarChart: React.FC = () => {
  return (
    <div className='relative w-full'>
      <Bar
        options={{
          maintainAspectRatio: false,
        }}
        data={data}
        height={400}
      />
    </div>
  )
}
export default BarChart
