type GoodCode = { code: 200 | 201 | 301; text: string };
type BadCode = { code: 400 | 404 | 500; text: string; printChars?: number };

function printResponse(httpResponse: GoodCode | BadCode): void {
    // switch (httpResponse.code) {
    //     case 200:
    //     case 201:
    //     case 301:
    //         console.log(httpResponse.text);
    //         return;
    //     case 400:
    //     case 404:
    //     case 500:
    //         console.log(httpResponse.text.slice(0, httpResponse.printChars));
    // }

    if ("printChars" in httpResponse) {
        console.log(httpResponse.text.slice(0, httpResponse.printChars));
    } else {
        console.log(httpResponse.text);
    }
}

printResponse({ code: 200, text: "OK" });
printResponse({ code: 201, text: "Created" });
printResponse({ code: 400, text: "Bad Request", printChars: 4 });
printResponse({ code: 404, text: "Not Found" });
printResponse({ code: 404, text: "Not Found", printChars: 3 });
printResponse({ code: 500, text: "Internal Server Error", printChars: 1 });
