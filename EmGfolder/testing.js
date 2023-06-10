// console.log(Object.values(data[0].alabama.max_temp));

let states = Object.keys(data[0])

//Dropdown Menui Iteration
  for (let i = 0; i < states.length; i++) {

  d3.select("select").append("option").attr("value",states[i]).text(states[i])
 
  };

  //code for initial plots
  function init() {
   
    let years = Object.keys(data[0].alabama.precip)

    let initBar = [{
      type: 'bar',
      x: years, 
      y:Object.values(data[0].alabama.precip),
      name: "Precipitation by Year"
    }]
    
    var layoutBar1 = {
      title: {text:'Precipitation by Year',font: {    
          family: 'Arial',    
          size: 20    
        },},
      xaxis: {title: {text: 'Years',font: {
        family: 'Arial',    
            size: 14,    
            color: '#7f7f7f'    
          }},},
      yaxis: {title: {text: 'Precipitation',font: {
                family: 'Arial',
                size: 14,
                color: '#7f7f7f'
              }}}};



   // plot the initial bar chart
   Plotly.newPlot('bar', initBar, layoutBar1)

  
    var initLine1 = {

      x:years,
      y:Object.values(data[0].alabama.max_temp),
      type: 'scatter',
      name: "Max Temp"
  
      };

      var initLine2 = {

        x: years,
        y: Object.values(data[0].alabama.min_temp),
        type: 'scatter',
        name: "Min Temp"

    
        };

     var lineData = [initLine1, initLine2]


     var layoutLine1 = {
      title: {text:'Changes in Average Temperature by Year',font: {    
          family: 'Arial',  size: 20},},
      xaxis: {title: {text: 'Years',font: {
        family: 'Arial', size: 14, color: '#7f7f7f'    
          }},},
      yaxis: {title: {text: 'Temperature (C)',font: {
                family: 'Arial', size: 14, color: '#7f7f7f'
              }}}};

    //Plot the initial bubble chart
    Plotly.newPlot("line", lineData, layoutLine1)

    let initBar2 = [{
      type: 'bar',
      x: years, 
      y:Object.values(data[0].alabama.wind_speed),
      name: "Wind Speed by Year"
    }]
    
    var layoutBar2 = {
      title: {text:'Wind Speed by Year',font: {    
          family: 'Arial',    
          size: 20    
        },},
      xaxis: {title: {text: 'Years',font: {
        family: 'Arial',    
            size: 14,    
            color: '#7f7f7f'    
          }},},
      yaxis: {title: {text: 'Wind Speed',font: {
                family: 'Arial',
                size: 14,
                color: '#7f7f7f'
              }}}};


   // plot the initial bar chart
   Plotly.newPlot('bar2', initBar2, layoutBar2)

  };
 
  //call the initial function to get the charts to show up initially
  init();

  // match the dropdown to a function
  var dropdown = document.getElementById("selDataset")
  dropdown.onchange = function optionChanged() {
  
    var selectedValue = document.getElementById("selDataset").value


    let years = Object.keys(data[0].alabama.precip)
    let precipValue = Object.values(data[0][selectedValue].precip)
    let maxTemp = Object.values(data[0][selectedValue].max_temp)
    let minTemp = Object.values(data[0][selectedValue].min_temp)
    let windSpeed = Object.values(data[0][selectedValue].wind_speed)

    console.log(maxTemp)

    let Bar1 = [{
      type: 'bar',
      x: years, 
      y:precipValue,
      name: "Precipitation by Year"
    }]
    
    var layoutBar1 = {
      title: {text:'Precipitation by Year',font: {    
          family: 'Arial',    
          size: 20    
        },},
      xaxis: {title: {text: 'Years',font: {
        family: 'Arial',    
            size: 14,    
            color: '#7f7f7f'    
          }},},
      yaxis: {title: {text: 'Precipitation',font: {
                family: 'Arial',
                size: 14,
                color: '#7f7f7f'
              }}}};

   // plot the bar chart
   Plotly.newPlot('bar', Bar1, layoutBar1)



   var lineOne = {

    x:years,
    y:maxTemp,
    type: 'scatter',
    name: "Max Temp"

    };

    var lineTwo = {

      x: years,
      y: minTemp,
      type: 'scatter',
      name: "Min Temp"

  
      };

   var doubleLines = [lineOne, lineTwo]


   var layoutLines = {
    title: {text:'Changes in Average Temperature by Year',font: {    
        family: 'Arial',  size: 20},},
    xaxis: {title: {text: 'Years',font: {
      family: 'Arial', size: 14, color: '#7f7f7f'    
        }},},
    yaxis: {title: {text: 'Temperature (C)',font: {
              family: 'Arial', size: 14, color: '#7f7f7f'
            }}}};

  //Plot the double line chart
  Plotly.newPlot("line", doubleLines, layoutLines)

  let barTwo = [{
    type: 'bar',
    x: years, 
    y:windSpeed,
    name: "Wind Speed by Year"
  }]
  
  var windLayout = {
    title: {text:'Wind Speed by Year',font: {    
        family: 'Arial',    
        size: 20    
      },},
    xaxis: {title: {text: 'Years',font: {
      family: 'Arial',    
          size: 14,    
          color: '#7f7f7f'    
        }},},
    yaxis: {title: {text: 'Wind Speed',font: {
              family: 'Arial',
              size: 14,
              color: '#7f7f7f'
            }}}};


 // plot the initial bar chart
 Plotly.newPlot('bar2', barTwo, windLayout)

  };
