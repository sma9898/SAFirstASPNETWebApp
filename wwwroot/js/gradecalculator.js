// Build a JavaScript program that calculates and displays both a final percentage and a letter grade using the
    // "Grade Calculator" form entries based on the weights listed in the syllabus.

function calculateGrade() {
    // Get data from form
    var assignmentsPct = parseFloat(document.getElementById("assignmentsPct").value);
    var groupProjectPct = parseFloat(document.getElementById("groupProjectPct").value);
    var quizzesPct = parseFloat(document.getElementById("quizzesPct").value);
    var examsPct = parseFloat(document.getElementById("examsPct").value);
    var intexPct = parseFloat(document.getElementById("intexPct").value);
    var gradeLetter = "";


    // Calculate the grade percentage
    var assignmentsGrade = assignmentsPct * .5;
    var groupProjectGrade = groupProjectPct * .1;
    var quizzesGrade = quizzesPct * .1;
    var examsGrade = examsPct * .2;
    var intexGrade = intexPct * .1;

    var gradePct = assignmentsGrade + groupProjectGrade + quizzesGrade + examsGrade + intexGrade;

    // Determine the grade letter
    if (gradePct >= 94) {
        gradeLetter = "A";
    }
    else if (gradePct >= 90) {
        gradeLetter = "A-";
    }
    else if (gradePct >= 87) {
        gradeLetter = "B+";
    }
    else if (gradePct >= 84) {
        gradeLetter = "B";
    }
    else if (gradePct >= 80) {
        gradeLetter = "B-";
    }
    else if (gradePct >= 77) {
        gradeLetter = "C+";
    }
    else if (gradePct >= 74) {
        gradeLetter = "C";
    }
    else if (gradePct >= 70) {
        gradeLetter = "C-";
    }
    else if (gradePct >= 67) {
        gradeLetter = "D+";
    }
    else if (gradePct >= 64) {
        gradeLetter = "D";
    }
    else if (gradePct >= 60) {
        gradeLetter = "D-";
    }
    else if ((gradePct < 60) && (gradePct >= 0)) {
        gradeLetter = "E";
    }
    else {
        alert("Error");
        gradeLetter = "Not found";
    }


    // Print the information to the web page
    alert(gradePct + "%, " + gradeLetter);
    document.getElementById("finalPercent").innerHTML = "Final Percentage: " + gradePct + "%";
    document.getElementById("finalGrade").innerHTML = "Final Grade: " + gradeLetter;
}