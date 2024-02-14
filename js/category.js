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
  categories.forEach(showCategories);

  function showCategories(onecat) {
    console.log(onecat)
    const template = document.querySelector("#category").content;
    const copy = template.cloneNode(true);

    copy.querySelector("h2").textContent = onecat.name;
    copy.querySelector("p").textContent = onecat.category;
    copy.querySelector(
      "img"
    ).src = onecat.image;

    document.querySelector("main").appendChild(copy);
  }
}
