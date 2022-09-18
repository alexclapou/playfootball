// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

// check if the device theme is dark
const systemIsDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
const userSelectedTheme = localStorage.getItem("theme");
document.body.classList.add('salmon');

if (userSelectedTheme == "dark") {
    console.log(document.body.classList.toggle("dark"));
} else if (userSelectedTheme == "light") {
    console.log(document.body.classList.toggle("light"));
} else if (systemIsDarkMode){
    console.log(document.body.classList.toggle("dark"));
} else {
    console.log(document.body.classList.toggle("light"));
}
$( "body" ).addClass( "myClass yourClass" );

localStorage.setItem('theme', theme)