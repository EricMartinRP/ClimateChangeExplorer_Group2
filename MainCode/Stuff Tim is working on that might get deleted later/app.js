const filePath = 'C:\Users\mybub\Dropbox\PC\Desktop\Group_Project_3\ClimateChangeExplorer_Group2\MainCode\JSON Files\Averages.json'

// Promise Pending
const dataPromise = d3.json(filePath);
console.log("Data Promise: ", dataPromise);

// Fetch the JSON data and console log it
d3.json(filePath).then(function(data) {
    console.log(data);
}
);

