var sackboy = document.getElementById("sackboy");
var spider = document.getElementById("spider");
var souls = document.getElementById("souls")
var dirt = document.getElementById("dirt")
var yakuza = document.getElementById("yakuza")
var xiii = document.getElementById("xiii")
var dogs = document.getElementById("dogs")
var all = document.querySelector(".all");

var body = document.querySelector("body");

sackboy.addEventListener('click', () => {
    body.style.backgroundImage = 'url(../images/bg-sackboy.png)'
})
spider.addEventListener('click', () => {
    body.style.backgroundImage = 'url(../images/bg-spider-man.png)'
})
souls.addEventListener('click', () => {
    body.style.backgroundImage = 'url(../images/bg-demons-souls.png)'
})
dirt.addEventListener('click', () => {
    body.style.backgroundImage = 'url(../images/bg-dirt-5.png)'
})
yakuza.addEventListener('click', () => {
    body.style.backgroundImage = 'url(../images/bg-yakuza.png)'
})
xiii.addEventListener('click', () => {
    body.style.backgroundImage = 'url(../images/bg-XIII.png)'
})
dogs.addEventListener('click', () => {
    body.style.backgroundImage = 'url(../images/bg-watch-dogs.png)'
})

