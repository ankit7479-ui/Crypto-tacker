// Line Chart - Price Trends
const priceCtx = document.getElementById('priceChart').getContext('2d');
const priceChart = new Chart(priceCtx, {
  type: 'line',
  data: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Bitcoin (BTC)',
        data: [60000, 62000, 61500, 64000, 65000, 66000, 65000],
        borderColor: '#f7931a',
        backgroundColor: 'rgba(247, 147, 26, 0.1)',
        tension: 0.4,
        fill: true,
        borderWidth: 2
      },
      {
        label: 'Ethereum (ETH)',
        data: [3000, 3100, 3050, 3200, 3180, 3250, 3200],
        borderColor: '#627eea',
        backgroundColor: 'rgba(98, 126, 234, 0.1)',
        tension: 0.4,
        fill: true,
        borderWidth: 2
      },
      {
        label: 'Binance Coin (BNB)',
        data: [340, 345, 342, 350, 348, 355, 350],
        borderColor: '#f3ba2f',
        backgroundColor: 'rgba(243, 186, 47, 0.1)',
        tension: 0.4,
        fill: true,
        borderWidth: 2
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top'
      },
      tooltip: {
        mode: 'index',
        intersect: false
      }
    },
    scales: {
      y: {
        beginAtZero: false,
        ticks: {
          callback: function(value) {
            return '$' + value.toLocaleString();
          }
        }
      }
    }
  }
});

// Pie Chart - Market Cap Distribution
const pieCtx = document.getElementById('pieChart').getContext('2d');
const pieChart = new Chart(pieCtx, {
  type: 'doughnut',
  data: {
    labels: ['Bitcoin', 'Ethereum', 'Binance Coin', 'Others'],
    datasets: [{
      data: [45, 25, 15, 15],
      backgroundColor: [
        '#f7931a',
        '#627eea',
        '#f3ba2f',
        '#8b5cf6'
      ],
      borderWidth: 2,
      borderColor: '#fff'
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom'
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return context.label + ': ' + context.parsed + '%';
          }
        }
      }
    }
  }
});

// Bar Chart - Trading Volume
const barCtx = document.getElementById('barChart').getContext('2d');
const barChart = new Chart(barCtx, {
  type: 'bar',
  data: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      label: 'Trading Volume (Billions)',
      data: [25, 30, 28, 35, 40, 38, 42],
      backgroundColor: [
        'rgba(102, 126, 234, 0.8)',
        'rgba(118, 75, 162, 0.8)',
        'rgba(102, 126, 234, 0.8)',
        'rgba(118, 75, 162, 0.8)',
        'rgba(102, 126, 234, 0.8)',
        'rgba(118, 75, 162, 0.8)',
        'rgba(102, 126, 234, 0.8)'
      ],
      borderColor: '#667eea',
      borderWidth: 2,
      borderRadius: 5
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function(value) {
            return '$' + value + 'B';
          }
        }
      }
    }
  }
});

// Add interactivity to crypto cards
document.querySelectorAll('.crypto-card').forEach(card => {
  card.addEventListener('click', function() {
    this.style.transform = 'scale(0.98)';
    setTimeout(() => {
      this.style.transform = 'translateY(-5px)';
    }, 100);
  });
});