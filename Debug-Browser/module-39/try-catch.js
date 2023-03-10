function checkAge() {
  const ageField = document.getElementById("age");
  const ageText = ageField.value;
  const errorTag = document.getElementById("error");
  try {
    const age = parseInt(ageText);
    if (isNaN(age)) {
      throw "please provide a valid number";
    } else if (age < 18) {
      throw "under adult not allowed";
    } else if (age > 30) {
      throw "Your age is to high to enter this area";
    }
  } catch (error) {
    console.log(error);
    errorTag.innerHTML = "Error: " + error;
  } finally {
    console.log("All done inside try catch");
  }
}
