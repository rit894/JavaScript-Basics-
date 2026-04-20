const ctx = document.getElementById('resourceChart').getContext('2d');

let resourceChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Select a category to view data',
      data: [0, 0, 0, 0, 0, 0],
      backgroundColor: '#00a8ff'
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: { beginAtZero: true }
    }
  }
});

const categoryData = {
  household: [12, 19, 3, 5, 2, 3],
  software: [22, 29, 15, 20, 18, 30],
  hardware: [18, 12, 7, 14, 10, 8],
  other: [10, 9, 12, 8, 6, 5],
};

const viewButtons = document.querySelectorAll('.view-btn');
viewButtons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    const cat = e.target.dataset.category;
    resourceChart.data.datasets[0].data = categoryData[cat];
    resourceChart.data.datasets[0].label = `${cat.charAt(0).toUpperCase() + cat.slice(1)} Resource Usage`;
    resourceChart.update();
  });
});
