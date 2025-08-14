function sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value,
    }
    emailjs.send("service_xa6awsn","template_eu1x47s",parms).then(alert("email sent!! "))
}