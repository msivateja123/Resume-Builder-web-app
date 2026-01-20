function generateResume() {
    document.getElementById("r-name").innerText =
        document.getElementById("name").value;

    document.getElementById("r-role").innerText =
        document.getElementById("role").value;

    document.getElementById("r-email").innerText =
        document.getElementById("email").value;

    document.getElementById("r-phone").innerText =
        document.getElementById("phone").value;

    document.getElementById("r-summary").innerText =
        document.getElementById("summary").value;

    const skills = document.getElementById("skills").value.split(",");
    document.getElementById("r-skills").innerHTML =
      "<ul>" + skills.map(skill => `<li>${skill.trim()}</li>`).join("") + "</ul>";

    document.getElementById("r-experience").innerText =
        document.getElementById("experience").value;

    document.getElementById("r-education").innerText =
        document.getElementById("education").value;
}

function downloadPDF() {
    const resume = document.getElementById("resume");
    const name = document.getElementById("name").value || "Resume";

    html2pdf().set({
        filename: name.replace(/\s+/g, "_") + "_Resume.pdf",
        margin: 0.5,
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    }).from(resume).save();
}

