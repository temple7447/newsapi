
    const category = "science"
    const url =`https://newsapi.org/v2/top-headlines?country=ng&category=${category}&apiKey=4391f42befbb4afab31db42c05367f1d`;
    
        fetch(url)
        .then(res=> res.json() )
        .then((data)=>{
            const {articles} = data
            articles.forEach((article) => {
                console.log(article)
                let {urlToImage,title,source,description,url,publishedAt} = article
                document.querySelector('.output').innerHTML +=`<div style:"padding-top:20px;"><img style="float:left;width:150px;" src="${urlToImage}"><h1>${title}</h1>${source.name}</br>
            ${description} <a href="${url}" target="_blank">${url}</a> </br>${publishedAt}</div>`
            });
        })


