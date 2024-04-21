function comments(arr) {
    
    let listArticleObj = {};

    let userNamesArr = [];
    let articleNameArr = [];

    for (let row of arr) {
        let token = row.split(" ");

        if (token[0] === "user") {
            if (!userNamesArr.includes(token[1])) {
                userNamesArr.push(token[1]);
            }
        } else if (token[0] === "article") {
            if (!articleNameArr.includes(token[1])) {
                articleNameArr.push(token[1]);
                listArticleObj[token[1]] = [];
            }
        } else if (token[1] === "posts") {
            let articleName = token[3].slice(0, token[3].length - 1);
            let user = token[0];
            let comment = token.slice(4).join(" ");
            if (userNamesArr.includes(user) && articleNameArr.includes(articleName)) {
                listArticleObj[articleName].push([user, comment]);
            }
        }
    }

    let sortedList = Object.entries(listArticleObj).sort((a, b) => b[1].length - a[1].length);

    for (let [article, info] of sortedList) {
        console.log(`Comments on ${article}`);
        let sortedInfo = info.sort((a, b) => a[0].localeCompare(b[0]));
        for (let [name, text] of sortedInfo) {
            let [title, content] = text.split(", ");
            console.log(`--- From user ${name}: ${title} - ${content}`);
        }
    }
}

comments([
    "user aUser123",
    "someUser posts on someArticle: NoTitle, stupidComment",
    "article Books",
    "article Movies",
    "article Shopping",
    "user someUser",
    "user uSeR4",
    "user lastUser",
    "uSeR4 posts on Books: I like books, I do really like them",
    "uSeR4 posts on Movies: I also like movies, I really do",
    "someUser posts on Shopping: title, I go shopping every day",
    "someUser posts on Movies: Like, I also like movies very much",
]);
comments([
    "user Mark",
    "Mark posts on someArticle: NoTitle, stupidComment",
    "article Bobby",
    "article Steven",
    "user Liam",
    "user Henry",
    "Mark posts on Bobby: Is, I do really like them",
    "Mark posts on Steven: title, Run",
    "someUser posts on Movies: Like",
]);
