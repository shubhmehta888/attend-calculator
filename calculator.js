function calculate() {

    let total = Number(document.getElementById("total").value);
    let attended = Number(document.getElementById("attended").value);
    let target = Number(document.getElementById("target").value);

    let percentage = (attended / total) * 100;

    document.getElementById("percentage").innerText = percentage.toFixed(1) + "%";

    if (percentage >= target) {
        document.getElementById("status").innerText = "Attendance is good";
        document.getElementById("message").innerText = "You are above the required attendance.";
    } else {
        document.getElementById("status").innerText = "Attendance is low";
        document.getElementById("message").innerText = "You need to attend more classes.";
    }

    document.getElementById("result").style.display = "block";
}


function recover() {

    let total = Number(document.getElementById("rTotal").value);
    let attended = Number(document.getElementById("rAttended").value);
    let target = Number(document.getElementById("rTarget").value);

    let percentage = (attended / total) * 100;

    if (percentage >= target) {

        document.getElementById("recoveryTitle").innerText = "You are already above your target";
        document.getElementById("classesNeeded").innerText = "0";
        document.getElementById("recoveryMessage").innerText = "No recovery is needed.";

    } else {

        let classes = Math.ceil(
            ((target / 100) * total - attended) / (1 - target / 100)
        );

        document.getElementById("recoveryTitle").innerText = "Classes to attend";
        document.getElementById("classesNeeded").innerText = classes;
        document.getElementById("recoveryMessage").innerText = "Attend these classes without missing one.";
    }

    document.getElementById("recoveryResult").style.display = "block";
}