
async function generateVideo() {
  const text = document.getElementById("textInput").value;
  const responseBox = document.getElementById("response");

  const response = await fetch("http://localhost:3000/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text })
  });

  const data = await response.json();
  responseBox.innerText = data.message || "Video Generated Successfully!";
}
