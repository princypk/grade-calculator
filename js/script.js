function calculateGrade() {
    let totalMarks = 0;
    let subjects = 5;

    for (let i = 1; i <= subjects; i++) {
        let mark = parseFloat(prompt(`Enter marks for Subject ${i}:`));

        while (isNaN(mark) || mark < 0 || mark > 100) {
            mark = parseFloat(prompt(`Invalid input. Please enter valid marks for Subject ${i} (0-100):`));
        }

        totalMarks += mark;
    }

    let average = totalMarks / subjects;
    let grade = "";

    if (average >= 90) {
        grade = "A+";
    } else if (average >= 80) {
        grade = "A";
    } else if (average >= 70) {
        grade = "B";
    } else if (average >= 60) {
        grade = "C";
    } else if (average >= 50) {
        grade = "D";
    } else {
        grade = "F";
    }

    alert(`Total Marks: ${totalMarks}
Average Marks: ${average.toFixed(2)}
Grade: ${grade}`);
}
