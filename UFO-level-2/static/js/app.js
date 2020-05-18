// from data.js
var tableData = data;
console.log(tableData);

// Referencing to tbody element of the HTML file
var tbody = d3.select("tbody");

// Function to populate data in the table body
function populateTableData(data) {
    // Clearing any existing data in the table body
    tbody.text("");
    data.forEach((alienSighting) => {
        var row = tbody.append("tr");
        Object.entries(alienSighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
        });
    });
};

populateTableData(tableData);

// Selecting the button for filter
var button = d3.select("button");

// Creating event handlers 
button.on("click", runFilter);

// Completing event handler function for the form
function runFilter() {

  // To prevent the page from refreshing
  d3.event.preventDefault();

  //Creating a list of IDs associated with filters
  var listIds = ["datetime","city","state","country","shape"]

  // Setting initial value of filteredData to the whole dataset, so that it can be filtered at each provided filter
  var filteredData = tableData;

  // For loop to filter the data
  for (var i=0; i<listIds.length; i++) {
  
    // Selecting the input element and get the raw HTML node
    var inputElement = d3.select("#"+listIds[i]);

    // Getting the value property of the input element, removing white spaces and ensuring lower case
    var inputValue = inputElement.property("value").trim().toLowerCase();

    // Logging the input value
    console.log(inputValue);

    // Filtering the table based on inpt value
    if(inputValue.length !== 0){
      filteredData = filteredData.filter(alienSighting => alienSighting[listIds[i]] === inputValue);
    };

    // Logging filtered data on the console at every iteration
    console.log(filteredData);
  };

  // Logging final filtered data on the console
  console.log(filteredData);

  // Populating the final filtered data in the table
  populateTableData(filteredData);

};