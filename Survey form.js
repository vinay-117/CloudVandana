<script>
    function submitForm() {
      // Perform necessary validations here
      // For simplicity, assume all fields are valid in this example

      // Get form values
      var firstName = document.getElementById('firstName').value;
      var lastName = document.getElementById('lastName').value;
      var dob = document.getElementById('dob').value;
      var country = document.getElementById('country').value;
      var gender = document.querySelectorAll('input[name="gender"]:checked');
      var profession = document.getElementById('profession').value;
      var email = document.getElementById('email').value;
      var mobileNumber = document.getElementById('mobileNumber').value;

      // Display values in the popup
      var popupContent = `
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Date of Birth:</strong> ${dob}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Gender:</strong> ${Array.from(gender).map(g => g.value).join(', ')}</p>
        <p><strong>Profession:</strong> ${profession}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile Number:</strong> ${mobileNumber}</p>
      `;

      document.getElementById('popupContent').innerHTML = popupContent;
      document.getElementById('popup').style.display = 'block';

      // Reset the form
      resetForm();
    }

    function resetForm() {
      document.getElementById('surveyForm').reset();
    }

    function closePopup() {
      document.getElementById('popup').style.display = 'none';
    }
  </script>