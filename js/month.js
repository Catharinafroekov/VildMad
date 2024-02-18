//https://lumyjlzobfetmedfjjvk.supabase.co
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx1bXlqbHpvYmZldG1lZGZqanZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc5MDQxMzYsImV4cCI6MjAyMzQ4MDEzNn0.ZXiU7EEPPrOfTnQRn4VAzqCBf3ULvmz5kQJ0vfTjFZg

fetch("https://lumyjlzobfetmedfjjvk.supabase.co/rest/v1/VildMad", {
  method: "GET",
  headers: {
    apikey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx1bXlqbHpvYmZldG1lZGZqanZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc5MDQxMzYsImV4cCI6MjAyMzQ4MDEzNn0.ZXiU7EEPPrOfTnQRn4VAzqCBf3ULvmz5kQJ0vfTjFZg", // Replace with your actual API key
  },
})
  .then((res) => res.json())
  .then(showData);

function showData(categories) {
 /*  console.log("her kommer mine categories: " + categories) */
  categories.forEach(showCategories);

  function showCategories(onecat) {
    /* console.log(onecat); */
    const template = document.querySelector("#category").content;
    const copy = template.cloneNode(true);
    copy.querySelector("h1").textContent = onecat.month;
    copy.querySelector("h2").textContent = onecat.name;
    copy.querySelector("img").src = onecat.image;
    copy.querySelector("a.button").href = `plante.html?id=${onecat.id}` ;

    document.querySelector("main").appendChild(copy);
  }
}
