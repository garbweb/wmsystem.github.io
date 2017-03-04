function draw1(val1,val2){
  var color;
  var cstate; 
  val1 = val1>100?100:val1;
  color = stateC(val2);
  cstate = state(val2);
  var ctx = document.getElementById("myChart1").getContext('2d');
  var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Biodegradable"],
    datasets: [{
      label: cstate,
      data: [val1],
      backgroundColor: color
    }
	]
  },
  options: {
            scales: {

                yAxes:	 [{
					scaleLabel: {
					display: true,
					labelString: 'Garbage Level Percentage'
					},
                    ticks: {
						max:100,
                        min: 0,
                        beginAtZero: true
                    },
					
                }]
            }
  }
   });

}

function draw2(val1,val2){
  var color;
  var cstate; 
  val1 = val1>100?100:val1;
  color = stateC(val2);
  cstate = state(val2);
  
  var ctx = document.getElementById("myChart2").getContext('2d');
  var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Non-Biodegradable"],
    datasets: [{
      label: cstate,
      data: [val1],
      backgroundColor: color
    }
	]
  },
  options: {
	  
            scales: {

                yAxes:	 [{
					scaleLabel: {
					display: true,
					labelString: 'Garbage Level Percentage'
					},
                    ticks: {
						max:100,
                        min: 0,
                        beginAtZero: true
                    },
					
                }]
            }
			}
   });
}

function draw3(val1,val2){
  var color;
  var cstate; 
  val1 = val1>100?100:val1;
  color = stateC(val2);
  cstate = state(val2);
  var ctx = document.getElementById("myChart3").getContext('2d');
  var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Hazardous"],
    datasets: [{
      label: cstate,
      data: [val1],
      backgroundColor: color
    }
	]
  },
  options: {
	  
            scales: {

                yAxes:	 [{
					scaleLabel: {
					display: true,
					labelString: 'Garbage Level Percentage'
					},
                    ticks: {
						max:100,
                        min: 0,
                        beginAtZero: true
                    },
					
                }]
            }
			}
   });
}

function draw4(val1,val2){
  var color;
  var cstate; 
  val1 = val1>100?100:val1;
  color = stateC(val2);
  cstate = state(val2);
  var ctx = document.getElementById("myChart4").getContext('2d');
  var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Metal"],
    datasets: [{
      label: cstate,
      data: [val1],
      backgroundColor: color
    }
	]
  },
  options: {
	  
            scales: {

                yAxes:	 [{
					scaleLabel: {
					display: true,
					labelString: 'Garbage Level Percentage'
					},
                    ticks: {
						max:100,
                        min: 0,
                        beginAtZero: true
                    },
					
                }]
            }
			}
   });
}

function draw5(val1,val2){
	
  var color;
  var cstate; 
  val1 = val1>100?100:val1;
  color = stateC(val2);
  cstate = state(val2);
  
  var ctx = document.getElementById("myChart5").getContext('2d');
  var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Recyclable"],
    datasets: [{
      label: cstate,
      data: [val1],
      backgroundColor: color
    }
	]
  },
  options: {
	  
            scales: {

                yAxes:	 [{
					scaleLabel: {
					display: true,
					labelString: 'Garbage Level Percentage'
					},
                    ticks: {
						max:100,
                        min: 0,
                        beginAtZero: true
                    },
					
                }]
            }
			}
   });
}