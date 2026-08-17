function sendMail() {
    var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value
    };

const serviceID = "service_8c4t8le";
const templateID = "template_4ufyr8q";

email.js.send(serviceID, templateID, params)
.then(
    res => {
    documennt.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
    console.log(res);
    alert("Your message sent successfully");
    }
)
.catch(err=> conspole.log(err));
}