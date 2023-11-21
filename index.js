<script>
    document.addEventListener("DOMContentLoaded", function () {
    // Load existing data from localStorage
    loadTableData();

    document.getElementById("registrationForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Your additional date of birth validation logic
        let dobInput = document.getElementById("dob");
        let dobValue = new Date(dobInput.value);
        let age = new Date().getFullYear() - dobValue.getFullYear();

        if (age < 18 || age > 55) {
            alert("You must be between 18 and 55 years old.");
            return;
        }

        // Add the form data to the table and save to localStorage
        addRowToTable();
        saveTableData();
    });

    function addRowToTable() {
        // Retrieve form values
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        let dob = document.getElementById("dob").value;
        let acceptTerms = document.getElementById("acceptTerms").checked;

        // Create a new table row
        let table = document.getElementById("dataTable");
        let newRow = table.insertRow(-1);

        // Insert cells into the new row
        let cell1 = newRow.insertCell(0);
        let cell2 = newRow.insertCell(1);
        let cell3 = newRow.insertCell(2);
        let cell4 = newRow.insertCell(3);
        let cell5 = newRow.insertCell(4);

        // Populate cells with form data
        cell1.innerHTML = name;
        cell2.innerHTML = email;
        cell3.innerHTML = password;
        cell4.innerHTML = dob;
        cell5.innerHTML = acceptTerms ? "Yes" : "No";

        // Clear the form
        document.getElementById("registrationForm").reset();
    }

    function loadTableData() {
        // Load data from localStorage
        let data = JSON.parse(localStorage.getItem("formData")) || [];

        // Populate the table with existing data
        let table = document.getElementById("dataTable");
        data.forEach(rowData => {
            let newRow = table.insertRow(-1);
            Object.values(rowData).forEach(value => {
                let cell = newRow.insertCell();
                cell.innerHTML = value;
            });
        });
    }

    function saveTableData() {
        // Save data to localStorage
        let table = document.getElementById("dataTable");
        let data = [];

        for (let i = 1; i < table.rows.length; i++) {
            let rowData = {};
            for (let j = 0; j < table.rows[i].cells.length; j++) {
                let header = table.rows[0].cells[j].innerHTML.toLowerCase();
                let value = table.rows[i].cells[j].innerHTML;
                rowData[header] = value;
            }
            data.push(rowData);
        }

        localStorage.setItem("formData", JSON.stringify(data));
    }
});

</script>
