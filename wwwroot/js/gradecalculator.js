$("#submitButton").click(

    // Build a JavaScript program that calculates and displays both a final percentage and a letter grade using the
    // "Grade Calculator" form entries based on the weights listed in the syllabus.

function () { //calculateGrade
        // Get data from form
        var AssignmentsPct = parseFloat($("#AssignmentsPct").val());
        var GroupProjectPct = parseFloat($("#GroupProjectPct").val());
        var QuizzesPct = parseFloat($("#QuizzesPct").val());
        var ExamsPct = parseFloat($("#ExamsPct").val());
        var IntexPct = parseFloat($("#IntexPct").val());
        var GradeLetter = "";


        // Calculate the grade percentage
        var AssignmentsGrade = AssignmentsPct * .5;
        var GroupProjectGrade = GroupProjectPct * .1;
        var QuizzesGrade = QuizzesPct * .1;
        var ExamsGrade = ExamsPct * .2;
        var IntexGrade = IntexPct * .1;

        var GradePct = AssignmentsGrade + GroupProjectGrade + QuizzesGrade + ExamsGrade + IntexGrade;

        // Determine the grade letter
        if (GradePct >= 94) {
            GradeLetter = "A";
        }
        else if (GradePct >= 90) {
            GradeLetter = "A-";
        }
        else if (GradePct >= 87) {
            GradeLetter = "B+";
        }
        else if (GradePct >= 84) {
            GradeLetter = "B";
        }
        else if (GradePct >= 80) {
            GradeLetter = "B-";
        }
        else if (GradePct >= 77) {
            GradeLetter = "C+";
        }
        else if (GradePct >= 74) {
            GradeLetter = "C";
        }
        else if (GradePct >= 70) {
            GradeLetter = "C-";
        }
        else if (GradePct >= 67) {
            GradeLetter = "D+";
        }
        else if (GradePct >= 64) {
            GradeLetter = "D";
        }
        else if (GradePct >= 60) {
            GradeLetter = "D-";
        }
        else if ((GradePct < 60) && (GradePct >= 0)) {
            GradeLetter = "E";
        }
        else {
            alert("Error");
            GradeLetter = "Not found";
        }


        // Print the information to the web page
        alert(GradePct + "%, " + GradeLetter);
        $("#FinalPercent").html("Final Percentage: " + GradePct + "%");
        $("#FinalGrade").html("Final Grade: " + GradeLetter);
    }

);