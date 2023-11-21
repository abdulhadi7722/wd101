<script>
    function submitForm(event) {
        event.preventDefault();

        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        var dob = document.getElementById('dob').value;
        var terms = document.getElementById('terms').checked;

        if (terms) {
            var displayEntries = document.getElementById('registrationTableBody');
            var newRow = displayEntries.insertRow(displayEntries.rows.length);

            newRow.insertCell(0).innerHTML = name;
            newRow.insertCell(1).innerHTML = email;
            newRow.insertCell(2).innerHTML = password;
            newRow.insertCell(3).innerHTML = dob;
            newRow.insertCell(4).innerHTML = terms ? 'Yes' : 'No';

            // Clear the form after submission
            document.getElementById('registrationForm').reset();
        } else {
            alert('Please accept the terms and conditions.');
        }
    }
</script>
