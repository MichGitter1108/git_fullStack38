let studentsArray = [];

class student
{
    firstName = '';
    lastName = '';
    id = 0;
    phone = 0;
    email = '';
    studentLesson = [];

    constructor(firstName, lastName, id, age)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
        this.phone = phone;
        this.email = email;
    }

    attendance( date, yesOrNo ) //*function of attendance of the student at every lesson from the form
    {
        let oneLesson = 
        {
            date: date,
            yesOrNo: yesOrNo
        }
        this.studentLesson.push(oneLesson);
    }
}

function submitStudent(fn, ln, id, p, e)
{
    let newStudent = new student(fn, ln, id, p, e);
    studentsArray.push(newStudent);
}

function submitAttendance(studentID, time, attendance )
{
    let ifWas = '';
    if (attendance == 0) //*value of the option selector
    {
        ifWas = 'No';
    }
    else
    {
        ifWas = 'Yes';
    }

    let findStudent = studentsArray.find(student =>
        {
            return ( studentID == student.id );
        }
    )

    findStudent.attendance(time, ifWas);
    console.log(studentsArray);
}

