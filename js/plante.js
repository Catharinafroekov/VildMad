//https://lumyjlzobfetmedfjjvk.supabase.co
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx1bXlqbHpvYmZldG1lZGZqanZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc5MDQxMzYsImV4cCI6MjAyMzQ4MDEzNn0.ZXiU7EEPPrOfTnQRn4VAzqCBf3ULvmz5kQJ0vfTjFZg
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const myCategory = urlParams.get("category");
document.querySelector("a.month").href = "month.html?category="+myCategory;
document.querySelector("a.month").textContent = myCategory;
const url = 'https://lumyjlzobfetmedfjjvk.supabase.co/rest/v1/VildMad?id=eq.' + id;

console.log(url)

fetch(url, {
  method: "GET",
  headers: {
    apikey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx1bXlqbHpvYmZldG1lZGZqanZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc5MDQxMzYsImV4cCI6MjAyMzQ4MDEzNn0.ZXiU7EEPPrOfTnQRn4VAzqCBf3ULvmz5kQJ0vfTjFZg", // Replace with your actual API key
  },
})
  .then((res) => res.json())
  .then((data) => {
    showPlants(data); // Remove the forEach loop
  });

function showPlants(oneplant) {
  console.log("min oneplant er: ",oneplant[0].name);
  const template = document.querySelector("#planteKort").content;
  const copy = template.cloneNode(true);

  copy.querySelector("h1").textContent = oneplant[0].name;
  copy.querySelector("p.info").textContent = oneplant[0].description;
  copy.querySelector("img").src = oneplant[0].image;

  document.querySelector("main").appendChild(copy);
}

