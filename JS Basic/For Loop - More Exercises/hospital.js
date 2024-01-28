function hospital(input) {
    
    let period = Number(input[0]);
    let doctorCount = 7;
    let dayNumber = 0;
    let peapleCount = 0;
    let acceptedPatient = 0;
    let unAcceptedPatient = 0;
    let fullUnAcceptedPatient = 0;

    for (let i = 1; i < input.length; i++) {
        peapleCount = Number(input[i]);
        dayNumber += 1;
        if (dayNumber % 3 === 0 && unAcceptedPatient > doctorCount) {
            doctorCount += 1;
          }
        if (peapleCount > 7) {
            acceptedPatient += doctorCount;
            unAcceptedPatient = peapleCount - doctorCount;
            fullUnAcceptedPatient += unAcceptedPatient;
              
        } else {
            acceptedPatient += peapleCount;
        }
    }

    console.log(`Treated patients: ${acceptedPatient}.`);
    console.log(`Untreated patients: ${fullUnAcceptedPatient}.`);

}

//hospital(["4", "7", "27", "9", "1"]);
hospital(["6", "25", "25", "25", "25", "25", "2"]);
//hospital(["3", "7", "7", "7"]);