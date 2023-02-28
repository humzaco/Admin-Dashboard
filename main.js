const chart = document.querySelector("#chart").getContext('2d');



// creat a new chart instance
new Chart(chart, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],

        datasets: [
            {
                label: 'BTC',
                data: [29373, 33537, 49631, 59098, 57285, 36648, 33478, 39974, 48847, 48116, 61004],
                borderColor: 'red',
                borderWidth: 2
            },
            {
                label: 'ETH',
                data: [47373, 34937, 18631, 74098, 25985, 94248, 49478, 19974, 43847,64116, 84004],
                borderColor: 'blue',
                borderWidth: 2
            },
            {
                label: 'EUR',
                data: [67373, 62937, 27631, 49098, 25985, 38248, 58478, 61974, 38847, 72116, 69004],
                borderColor: 'green',
                borderWidth: 2
            }
        ]
    },
    options: {
        responsive: true
    }
})
