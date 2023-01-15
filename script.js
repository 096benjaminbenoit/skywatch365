fetch("https://api.nasa.gov/planetary/apod?api_key=zX3Mvfcz7iJYZeGozyZyHqh4Z8HctwcK2ZURplqK")
.then(function(response) {
    return response.json()
})

.then (function(data) {
    const infos = data
    //console.log(data)


    const mainInfos = document.getElementById('main-infos');

    const newDivInfos = document.createElement('div');
    mainInfos.append(newDivInfos);
    newDivInfos.classList.add('infos');

    const newTitle = document.createElement('h2');
    newDivInfos.append(newTitle);
    newTitle.innerHTML = data.title;

    const link = document.createElement('a');
    newDivInfos.append(link);
    link.href = data.hdurl;
    link.getAttribute('target', 'blank');

    const img = document.createElement('img');
    link.append(img);
    img.src = data.url;

    const newDivSubInfos = document.createElement('div');
    newDivSubInfos.classList.add('sub-infos');
    newDivInfos.append(newDivSubInfos);

    const copyright = document.createElement('h4');
    newDivSubInfos.append(copyright);
    copyright.innerHTML = data.copyright || "Unknown";

    const date = document.createElement('h4');
    newDivSubInfos.append(date);
    date.innerHTML = data.date;

    const description = document.createElement('p');
    mainInfos.append(description);
    description.innerHTML = data.explanation;

})
