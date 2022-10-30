let studentsTests = [];

class studentAndTestDetails
{
    fullName = '';
    testKind = '';
    theGrade = 0;

    constructor(fullName, testKind, theGrade)
    {
        this.fullName = fullName;
        this.testKind = testKind;
        this.theGrade = theGrade;
    }

}

function submitTest( n, t, g )
{
    let newStudentDetails = new studentAndTestDetails( n, t, g );
    studentsTests.push(newStudentDetails);
    console.log(studentsTests);
}

