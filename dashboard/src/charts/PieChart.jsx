import React from 'react'
import { Pie } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const PieChart = ({ serverData }) => {
    let uniquePestle = [];

    serverData.forEach((i) => {
        if (!uniquePestle.includes(i.pestle) && i.pestle !== "") {
            uniquePestle.push(i.pestle);
        }
    })

    const pestleCount = uniquePestle.map((item) => {
        return {
            pestle: item,
            count: serverData.filter((i) => i.pestle === item).length
        }
    })

    return (
        <div style={{ height: '50vh', width: '45vw' }}>
            <Pie
                data={{
                    labels: uniquePestle,
                    datasets: [
                        {
                            label: "Projects ",
                            data: pestleCount.map(i => i.count),
                            backgroundColor: [
                                // add 9 random dark colors here
                                '#BF40BF',
                                '#702963',
                                '#AA336A',
                                '#CBC3E3',
                                '#CF9FFF',
                                '#DA70D6',
                                '#800080',
                                '#7F00FF',
                                '#A95C68'

                            ],
                            borderWidth: 1,
                            hoverOffset: 10,
                        },
                    ]
                }}
                options={{
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            type: 'linear',
                            beginAtZero: true
                        },
                    }
                }}
                height={300}
            />
        </div>
    )
}

export default PieChart