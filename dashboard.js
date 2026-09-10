fetch("cashflow.json")
    .then(response => response.json())
    .then(data => {

        document.getElementById("dashboard").innerHTML =
            "<h2>Cashflow Data Loaded</h2>" +
            "<pre>" + JSON.stringify(data, null, 2) + "</pre>";

    })
    .catch(error => {

        document.getElementById("dashboard").innerHTML =
            "<p>Unable to load cashflow data.</p>";

        console.error(error);
    });
