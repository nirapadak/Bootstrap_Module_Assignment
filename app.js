// loading
document.addEventListener('DOMContentLoaded', function () {
  var loadingOverlay = document.querySelector('.loading-overlay');
  setTimeout(function() {
    loadingOverlay.style.display = 'none';
  }, 1000);
});
// themeToggle
document.addEventListener('DOMContentLoaded', function() {
  var themeToggle = document.getElementById('themeToggle');
  var body = document.body;

  themeToggle.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
  });
});


// barcart

document.addEventListener('DOMContentLoaded', function() {
  var canvas = document.getElementById('barChart');
  var ctx = canvas.getContext('2d');

  // Data for the bar chart
  var data = [
    { label: 'Team A', value: 75 },
    { label: 'Team B', value: 60 },
    { label: 'Team C', value: 90 },
    { label: 'Team D', value: 45 },
    { label: 'Team E', value: 80 }
  ];

  // Chart properties
  var chartWidth = 400;
  var chartHeight = 300;
  var barSpacing = 20;
  var barColor = 'rgb(75, 132, 201)';

  // Calculate bar width based on chart dimensions and data length
  var barWidth = (chartWidth - barSpacing * (data.length - 1)) / data.length;

  // Scale the chart to fit the data
  var maxValue = Math.max(...data.map(item => item.value));
  var scaleY = chartHeight / maxValue;

  // Draw the bars
  data.forEach(function(item, index) {
    var barX = index * (barWidth + barSpacing);
    var barHeight = item.value * scaleY;
    var barY = chartHeight - barHeight;

    ctx.fillStyle = barColor;
    ctx.fillRect(barX, barY, barWidth, barHeight);

    // Draw label below each bar
    ctx.fillStyle = '#000';
    ctx.font = '14px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(item.label, barX + barWidth / 2, chartHeight + 20);
  });
});
