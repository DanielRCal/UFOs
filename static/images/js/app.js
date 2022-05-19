// Import the data from data.js
const tableData = data;

//Reference the HTML table usijg d3
let tbody = d3.select('tbody');

// // Simple JavaScript console.log statement
// function printHello() {
//     console.log("Hello there!");
// }

// // Functions can call other functions
// function doubleAddition(c,d) {
//     var total = addition(c,d) * 2;
//     return total;
// }

// // Using Arrow/Fat Arrow functions to Refactor functions
// addition = (a,b) => a + b;

// doubleAddition = (c, d) => addition(c, d) * 2;

function buildTable(data) {
    // Clear any existing data
    tbody.html("");

    // Loop through each object in the data
        // and append a row and cells for each value in the row
    data.forEach((dataRow) => {

        // Append a row to the table body
        let row = tbody.append("tr");

        // Loop through each field in the dataRow
            // and add each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.appen("td");
            cell.text(val);
        }
    );

});

// Create filter to "listen" for user action
function handleClick() {

    // grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredDate = tableData;

    // Check to see if a date was entered and filter
        // the data using that date.
    if (date) {

        // Apply 'filter' to the table data to only keep the
            // rows where the 'datetime' value matches the filter value
        filteredData = filteredData.filter(row => row.datetime === date);
    };
    
    // Rebuild the table using the filtered data
// @Note: If no date was entered, then filteredData will
// simply be the original tableData.
buildTable(filteredData);
}

//Attach an even to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);