function flightSchedule(arr) {

    let curList = [];

    for (let curRow of arr[0]) {
        let tmp = curRow.split(' ');
        let separated = [tmp[0], tmp.slice(1).join(' ')];
        let curObj = { num: separated[0], Destination: separated[1], Status: 'Ready to fly'};
        curList.push(curObj);
    }

    for (let curRow of arr[1]) {
        let curFly = curRow.split(' ');
        let flyIsInList = curList.find(f => f.num === curFly[0]);
        if (flyIsInList) {
            flyIsInList.Status = curFly[1];
        }
    }
    let command = String(arr[2]);
    if (command === 'Cancelled') {
        for (let fly of curList) {
            if (fly.Status === 'Cancelled') {
                console.log(`{ Destination: '${fly.Destination}', Status: '${fly.Status}' }`);
            }
        }
    } else {
        for (let fly of curList) {
            if (fly.Status === 'Ready to fly') {
                console.log(`{ Destination: '${fly.Destination}', Status: '${fly.Status}' }`);
            }
        }
    }
    
    
}

flightSchedule([
  [
    "WN269 Delaware",
    "FL2269 Oregon",
    "WN498 Las Vegas",
    "WN3145 Ohio",
    "WN612 Alabama",
    "WN4010 New York",
    "WN1173 California",
    "DL2120 Texas",
    "KL5744 Illinois",
    "WN678 Pennsylvania",
  ],
  [
    "DL2120 Cancelled",
    "WN612 Cancelled",
    "WN1173 Cancelled",
    "SK430 Cancelled",
  ],
  ["Cancelled"],
]);
flightSchedule([
  [
    "WN269 Delaware",
    "FL2269 Oregon",
    "WN498 Las Vegas",
    "WN3145 Ohio",
    "WN612 Alabama",
    "WN4010 New York",
    "WN1173 California",
    "DL2120 Texas",
    "KL5744 Illinois",
    "WN678 Pennsylvania",
  ],
  [
    "DL2120 Cancelled",
    "WN612 Cancelled",
    "WN1173 Cancelled",
    "SK330 Cancelled",
  ],
  ["Ready to fly"],
]);