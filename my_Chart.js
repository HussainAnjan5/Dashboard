const ctx = document.getElementById('myChart');
const earning = document.getElementById('myChart1');

  new Chart(ctx, {
    type: 'polarArea',
    data: {
      // labels: [
      //   'Red',
      //   'Green',
      //   'Yellow',
      //   'Grey',
      //   'Blue'
      // ],
      // labels: ['Red', 'Yellow', 'Blue', 'Green', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [3.5, 2, 3, 4, 2.5],
        borderWidth: 2,
        borderColor:'#111111',
        backgroundColor: [
          '#9851AE',
          '#009DC8',
          '#F0619F',
          '#18818F',
          '#165BAA',
        ]
        
      }]
    },
  });
  new Chart(earning, {
    type: 'bubble',
    data: {
      // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [8, 5, 10, 8, 7],
        borderWidth: 1,
        
        
      }]
    },
  });