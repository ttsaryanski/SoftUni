function browserHistory(obj, arr) {

    for (let row of arr) {
        let token = row.split(" ");
        let command = token[0];
        let websiteName = token[1];
        
        if (command === 'Open') {
            obj["Open Tabs"].push(websiteName);
            obj["Browser Logs"].push(row);
        } else if (command === 'Close') {
            if (obj["Open Tabs"].includes(websiteName)) {
                let idx = obj["Open Tabs"].indexOf(websiteName);
                obj["Open Tabs"].splice(idx, 1);
                obj["Recently Closed"].push(websiteName);
                obj["Browser Logs"].push(row);
            }
        } else if (command === 'Clear') {
            obj["Open Tabs"] = [];
            obj["Recently Closed"] = [];
            obj["Browser Logs"] = [];
        }
    }
    console.log(`${obj["Browser Name"]}`);
    console.log(`Open Tabs: ${obj["Open Tabs"].join(', ')}`);
    console.log(`Recently Closed: ${obj["Recently Closed"].join(', ')}`);
    console.log(`Browser Logs: ${obj["Browser Logs"].join(', ')}`);
    
}

browserHistory(
    {
        "Browser Name": "Google Chrome", "Open Tabs": ["Facebook", "YouTube", "Google Translate"], "Recently Closed": ["Yahoo", "Gmail"],
        "Browser Logs": ["Open YouTube", "Open Yahoo", "Open Google Translate", "Close Yahoo", "Open Gmail", "Close Gmail", "Open Facebook"]
    },
    ["Close Facebook", "Open StackOverFlow", "Open Google"]
);
browserHistory({
    "Browser Name": "Mozilla Firefox", "Open Tabs": ["YouTube"], "Recently Closed": ["Gmail", "Dropbox"],
    "Browser Logs": ["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]
},
    ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]
);