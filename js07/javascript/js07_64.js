function callRoll(student) {
    if (!Array.isArray(student)) return;

    student.forEach((student) => {
        console.log(`Are tou here, ${student}`);
    });
}

const student = ['Jun', 'Ali', 'Murry', 'Toby'];
callRoll(student);