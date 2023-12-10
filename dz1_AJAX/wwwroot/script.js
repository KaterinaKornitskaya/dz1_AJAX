"use strict"

let sect3 = document.getElementById("sect3");
let sect4 = document.getElementById("sect4");
let sect2 = document.getElementById("sect2");
let btn2 = document.getElementById("btn2");

let str1 = "http://www.omdbapi.com/?apikey=58ef636c&t=";
let txtInput = document.getElementById("txtInput");
let str2 = "";

let imgPoster = document.getElementById("imgPoster");

btn2.addEventListener("click", () => {
    
    str2 = txtInput.value;  
    let str3 = str1 + str2;

    fetch(str3).then(response => {      
        return response.json();
    }).then(film => {
     
        //let arr = ["Title", "Year", "Rated", "Released", "Runtime", "Genre", "Director",
        //    "Writer", "Actors", "Plot", "Country", "Awards", "Ratings",
        //    "imdbRating", "Type", "totalSeasons", "Response"];
        //for (let x = 0; x < 10; x++) {
        //    for (let i = 0; i < document.getElementsByClassName("divForText").length; i++) {
        //        document.getElementsByClassName("divForText")[i].textContent = film.arr[x];
        //    }
        //}

        sect3.style.visibility = "visible";
        sect4.style.visibility = "visible";
        document.getElementsByClassName("divForText")[0].textContent = "Title: " + film.Title;
        document.getElementsByClassName("divForText")[1].textContent = "Year: " + film.Year;
        document.getElementsByClassName("divForText")[2].textContent = "Rated: " + film.Rated;
        document.getElementsByClassName("divForText")[3].textContent = "Released: " + film.Released;
        document.getElementsByClassName("divForText")[4].textContent = "Genre: " + film.Genre;
        document.getElementsByClassName("divForText")[5].textContent = "Director: " + film.Director;
        document.getElementsByClassName("divForText")[6].textContent = "Writer: " + film.Writer;
        document.getElementsByClassName("divForText")[7].textContent = "Actors: " + film.Actors;
        document.getElementsByClassName("divForText")[8].textContent = "Plot: " + film.Plot;
        document.getElementsByClassName("divForText")[9].textContent = "imdbRating: " + film.imdbRating;
        imgPoster.src = film.Poster;       
    })   
});
