$("#myform").submit(function (event) {
  const data = $(this).serializeArray();
  event.preventDefault();

  const formattedData = data.reduce((acc, { name, value }) => {
    acc[name] = value.trim();

    return acc;
  }, {});

  db.collection("leads")
    .doc()
    .set(formattedData)
    .then(function () {
      console.log("Document successfully written!");
      alert(
        "Thank you " +
          formattedData.fullName +
          ", I will contact you at " +
          formattedData.emailAddress +
          " within a few days!"
      );
      window.location.reload();
    })
    .catch(function (error) {
      console.error("Error, try again.  ", error);
    });
});
