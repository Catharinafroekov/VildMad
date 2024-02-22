//https://lumyjlzobfetmedfjjvk.supabase.co
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx1bXlqbHpvYmZldG1lZGZqanZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc5MDQxMzYsImV4cCI6MjAyMzQ4MDEzNn0.ZXiU7EEPPrOfTnQRn4VAzqCBf3ULvmz5kQJ0vfTjFZg
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const myCategory = urlParams.get("category"); 
document.querySelector("#monthName h1").textContent = myCategory;


fetch(`https://lumyjlzobfetmedfjjvk.supabase.co/rest/v1/VildMad?month=eq.${myCategory}`, {
  method: "GET",
  headers: {
    apikey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx1bXlqbHpvYmZldG1lZGZqanZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc5MDQxMzYsImV4cCI6MjAyMzQ4MDEzNn0.ZXiU7EEPPrOfTnQRn4VAzqCBf3ULvmz5kQJ0vfTjFZg", // Replace with your actual API key
  },
})
.then((res) => res.json())
.then(showData);

function showData(categories) {
const monthNameSection = document.getElementById("monthName");

categories.forEach(showCategories);

function showCategories(onecat) {
  const template = document.getElementById("category").content;
  const copy = template.cloneNode(true);
  copy.querySelector("h2").textContent = onecat.name;
  copy.querySelector("img").src = onecat.image;
  copy.querySelector("a.button").href = `plante.html?id=${onecat.id}&category=${myCategory}`;

  document.querySelector("main").appendChild(copy);
}
}
