import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'
import { Bar } from 'react-chartjs-2'
import Card from './Card'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export const options = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
            position: 'top'
        },
    }
}

function Verticalbar({ labels, data1, data2 }) {
    const chartdata = {
        labels,
        datasets: [
            {
                label: 'Panen',
                data: data1,
                backgroundColor: '#3b82f6',
            },
            {
                label: 'Rusak',
                data: data2,
                backgroundColor: '#ef4444',
            },
        ],
    }

    return (
        <Card {...{ title: 'Tanaman Rusak/Bagus', className:'p-4' }}>
            <Bar options={options} data={chartdata} />
        </Card>
    )
}

export default Verticalbar