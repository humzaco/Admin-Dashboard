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





// Show or hide sidebar
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const sidebar = document.querySelector('aside.flex');

menuBtn.addEventListener('click', () => {
    sidebar.style.display ='block';
})

closeBtn.addEventListener('click', () => {
    sidebar.style.display = 'none';
})





// Change Theme
const themeBtn = document.querySelector('.theme-btn');

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');

    themeBtn.querySelector('span:first-child').classList.toggle('active');
    themeBtn.querySelector('span:last-child').classList.toggle('active');
})

