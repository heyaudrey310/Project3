document.onload(function() {
    console.log("hello world");
    // Getting references to the name input and author container, as well as the table body
    const nameInput = document.getElementById("#statue-name");
    const statuesList = document.getElementById("tbody");
    const statueContainer = document.getElementById(".statue-container");
  
    // Getting the initial list of Authors
    getData();

  
    // Function for creating a new list row for authors
    function createFruitInfo(FruitData) {
      //console.log(statueData);
      var newTr = document.getElementById("<tr>");
      newTr.data("statue", FruitData);
      newTr.append("<td>" + FruitData.ASSET_NAME + "</td>");
      newTr.append("<td>" + FruitData.ASSET_ADDR + "</td>");
      newTr.append("<td>" + FruitData.SITE_NAME + "</td>");
      newTr.append("<td>" + FruitData.LATITUDE + "</td>");
      newTr.append("<td>" + FruitData.LONGITUDE + "</td>");
  
      newTr.append(
        "<td><a href='/freshlist/" +
        FruitData.id +
          "' style='cursor:pointer;color:green' class='select select-fruit'>Add + </a></td>"
      );
      console.log(newTr);
      return newTr;
    }
  
    // Function for retrieving authors and getting them ready to be rendered to the page
    function getData() {
      document.get("/api/statues", function(data) {
        var rowsToAdd = [];
        for (var i = 0; i < data.length; i++) {
          rowsToAdd.push(createFruitInfo(data[i]));
        }
        renderFreshList(rowsToAdd);
        nameInput.val("");
      });
    }
  
    // A function for rendering the list of authors to the page
    function renderStatuesList(rows) {
      statuesList
        .children()
        .not(":last")
        .remove();
      statueContainer.children(".alert").remove();
      if (rows.length) {
        //console.log(rows);
        statuesList.prepend(rows);
      } else {
        renderEmpty();
      }
    }
  });