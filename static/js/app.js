// from data.js
var tableData = data;

// YOUR CODE HERE!
console.log(data);

data.forEach(function(ufoSights) {
    console.log(ufoSights);
    tbody=d3.select("tbody");
    var row = tbody.append("tr");
    Object.entries(ufoSights).forEach(function([key, value]) {
      console.log(key, value);
      var cell = row.append("td");
      cell.text(value);
    });
  });

  //console.log for each ufo sighting value via Object.entries
  //adding cells and values for each cell in the rows of each table "tr"
  //Appending a cell to the row for each value "td"
  data.forEach(function(ufoSights) {
    console.log(ufoSights);
    tbody=d3.select("tbody");
    var row = tbody.append("tr");
  
    Object.entries(ufoSights).forEach(function([key, value]) {
      console.log(key, value);
      var cell = row.append("td");
      cell.text(value);
    });
  });
  
//Listener 
  element.addEventListener("click", myFunction);
  function myFunction() {
  alert ("UFO Sighting!");
}

  function myFunction() {
    var dataTable = d3.select("#ufo-table");
    var tblBody = dataTable.select("#ufoSeen!");
    tblBody.html("");
    var date1 = document.getElementById("datetime").value;
    console.log(date1)
    var ufosighted = document.getElementById("ufosighted");
    for (var i = 0; i < data.length; i++) {
        if (data[i].datetime == date1) {
            var row = document.createElement("tr");
            ufosighted.append(row);
            Object.entries(data[i]).forEach(([key, value]) => {
                var cell = document.createElement("td");
                cell.append(value);
                row.append(cell);
            }
            )
        }
    }