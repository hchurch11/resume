function hireMe() {
  let name = prompt("What is your name?");
  let job = prompt("Are you hiring currently?");

  if (job === "no") {
    alert("Thank you " + name + ", please contact me when you have openings!");
  } else if (job === "yes") {
    let email = prompt("contactInfo.html");
    alert(
      "Thank you " +
        name +
        ", I will contact you at " +
        email +
        " within a few days!"
    );
  }
}

let hireButton = document.querySelector("button");
hireButton.addEventListener("click", hireMe);
