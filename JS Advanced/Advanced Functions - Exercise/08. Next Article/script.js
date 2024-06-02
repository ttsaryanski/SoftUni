function getArticleGenerator(articles) {

    let index = 0;
    
    return function () {
        if (index < articles.length) {
            const content = document.getElementById('content');
            const article = document.createElement('article');

            article.textContent = articles[index];
            content.appendChild(article);

            index++;
        }
    }


}
