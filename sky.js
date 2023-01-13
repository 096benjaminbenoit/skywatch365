fetch("https://api.nasa.gov/planetary/apod?api_key=zX3Mvfcz7iJYZeGozyZyHqh4Z8HctwcK2ZURplqK")
.then(function(response) {
    return response.json()
})

.then (function(data) {
    const infos = data
    // console.log(data)

    const mainInfos = document.getElementById('main-infos');
    const newDiv = document.createElement('div');
    mainInfos.append(newDiv);
    const newH2 = document.createElement('h2');
    newDiv.append(newH2);
    const newImg = document.createElement('img');
    newDiv.append(newImg);
    const newP = document.createElement('p');
    mainInfos.append(newP);

    newH2.innerHTML = data.title;
    newImg.src = data.url;
    newP.innerHTML = data.explanation;
})

