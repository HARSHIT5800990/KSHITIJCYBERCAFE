function saveData() {
  let name = document.getElementById("name").value;
  let mobile = document.getElementById("mobile").value;
  let service = document.getElementById("service").value;

  if(name === "" || mobile === "" || service === "") {
    alert("Please fill all fields");
    return;
  }

  let data = {
    name: name,
    mobile: mobile,
    service: service
  };

  let allData = JSON.parse(localStorage.getItem("formData")) || [];
  allData.push(data);

  localStorage.setItem("formData", JSON.stringify(allData));

  alert("Form Submitted ✅");

  document.getElementById("name").value = "";
  document.getElementById("mobile").value = "";
  document.getElementById("service").value = "";
}