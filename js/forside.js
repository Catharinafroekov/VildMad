fetch("https://lumyjlzobfetmedfjjvk.supabase.co/rest/v1/VildMad", {
  method: "GET",
  headers: {
    apikey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx1bXlqbHpvYmZldG1lZGZqanZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc5MDQxMzYsImV4cCI6MjAyMzQ4MDEzNn0.ZXiU7EEPPrOfTnQRn4VAzqCBf3ULvmz5kQJ0vfTjFZg", // Replace with your actual API key
  },
})
.then((res) => res.json())
.then(showMonths);

function showMonths(month) {
const template = document.querySelector("template").content;
const addedMonths = new Set();

month.forEach((oneMonth) => {
  const monthName = oneMonth.month;

  // Check if the month has already been added
  if (!addedMonths.has(monthName)) {
    console.log("Adding month:", monthName); // Log the month being added

    const clone = template.cloneNode(true);
    clone.querySelector("a").textContent = monthName;
    clone.querySelector("a").href = `month.html?category=${monthName}`;
    document.querySelector(".monthGroup").appendChild(clone);

    // Add the month to the set to mark it as added
    addedMonths.add(monthName);
  }
});
}