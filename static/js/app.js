// from data.js
var tableData = data;

// select the filter type
var filterType = d3.select("#filter-type");

var filterTypeValue = d3.select("#filter-type-value");

// Select the submit button
var submit = d3.select("#filter-btn");


// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the alients data from data.js
console.log(tableData);

// Use d3 to automatically populate tableData by creating table rows
// and cells.

tableData.forEach((alients) => {
    // Creating table rows for each row of alients data
    var row = tbody.append("tr");
    //Iterating thru each row for key and values
    Object.entries(alients).forEach(([key, value]) => {
        // Creating cells for posting table data
        var cell = row.append("td");
        cell.text(value);
    });
});

//function to invoke on selection of an item from dropdown
filterType.on("change", function() {
    var filterValue = filterType.property("value");
    d3.select("label")
      .attr("for",filterValue)
      .text(`Enter a value for  ${filterValue.toUpperCase()}`);

});

// Function to invoke on clicking the filter button
submit.on("click", function() {

        // Prevent the page from refreshing
        d3.event.preventDefault();

        // Clearing the previous table data
        tbody.html("");

        //get the data entered in text box
        var inputElement = d3.select("#datetime");
         
        var inputValue = inputElement.property("value");
        alert(inputValue);
        //Filter the data based on the input value
        var typeVal = d3.select("label").attr("for");
        alert(typeVal)
        var filteredData = tableData.filter(alients => alients[typeVal] === inputValue.toLowerCase());

        console.log(filteredData);

        //Displaying the data for the selection
        filteredData.forEach((alients) => {
            // Creating table rows for each row of alients data
            var row = tbody.append("tr");
            //Iterating thru each row for key and values
            Object.entries(alients).forEach(([key, value]) => {
                // Creating cells for posting table data
                var cell = row.append("td");
                cell.text(value);
            });
        });



})


