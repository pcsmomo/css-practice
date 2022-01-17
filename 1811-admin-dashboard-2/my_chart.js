const ctx = document.getElementById('myChart').getContext('2d');
const earning = document.getElementById('earning').getContext('2d');
const myChart = new Chart(ctx, {
  type: 'polarArea',
  data: {
    labels: ['Facebook', 'Youtubue', 'Amazon'],
    datasets: [
      {
        label: 'Traffic Source',
        data: [1200, 1900, 3000],
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
        ],
      },
    ],
  },
  options: {
    responsive: true,
  },
});

const myChart2 = new Chart(earning, {
  type: 'bar',
  data: {
    labels: [
      'January',
      'Fabruary',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    datasets: [
      {
        label: 'Earning',
        data: [
          1200, 1090, 3000, 5400, 1220, 3600, 4800, 4578, 2566, 8545, 4587,
          9000,
        ],
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)',
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)',
        ],
      },
    ],
  },
  options: {
    responsive: true,
  },
});
