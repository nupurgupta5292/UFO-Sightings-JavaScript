// from data.js
var tableData = data;
console.log(tableData);

// Referencing to tbody element of the HTML file
var tbody = d3.select("tbody");

// Populating data in the table body
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

// Selecting the form for filter
var form = d3.select("form");

// Creating event handlers 
button.on("click", runFilter);
form.on("submit", runFilter);

// Completing event handler function for the form
function runFilter() {

  // To prevent the page from refreshing
  d3.event.preventDefault();
  
  // Selecting the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Getting the value property of the input element
  var inputValue = inputElement.property("value");

  // Logging the input value
  console.log(inputValue);

  // Filtering the table based on inpt value
  var filteredData = tableData.filter(alienSighting => alienSighting.datetime === inputValue);

  // Logging filtered data on the console
  console.log(filteredData);
 
  // Populating the filtered data in the table
  populateTableData(filteredData);

};