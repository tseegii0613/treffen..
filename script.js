const weekSelect = document.getElementById("weekSelect");
const dayStep = document.getElementById("dayStep");
const daySelect = document.getElementById("daySelect");
const timeStep = document.getElementById("timeStep");
const timeSelect = document.getElementById("timeSelect");
const placeStep = document.getElementById("placeStep");
const placeInput = document.getElementById("placeInput");
const summaryStep = document.getElementById("summaryStep");
const summaryText = document.getElementById("summaryText");
const confirmBtn = document.getElementById("confirmBtn");
const finalMessage = document.getElementById("finalMessage");
const finalText = document.getElementById("finalText");

const weekOptions = {
  this: ["Баасан", "Бямба","Ням"],
  next: ["Даваа", "Мягмар", "Лхагва", "Пүрэв", "Баасан", "Баасан", "Ням"]
};

const timeOptions = ["13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00"];
const loveMessages = [
  "Tsee Gii цагтаа очно гэдэгт 100% итгээрэй ⏰",
];

weekSelect.addEventListener("change", () => {
  const week = weekSelect.value;
  if (!week) return;

  daySelect.innerHTML = '<option value="">-- Өдөр сонгох --</option>';
  weekOptions[week].forEach(day => {
    const opt = document.createElement("option");
    opt.value = day;
    opt.textContent = day;
    daySelect.appendChild(opt);
  });
  dayStep.classList.remove("hidden");
  timeStep.classList.add("hidden");
  placeStep.classList.add("hidden");
  summaryStep.classList.add("hidden");
  finalMessage.classList.add("hidden");
});

daySelect.addEventListener("change", () => {
  timeSelect.innerHTML = '<option value="">-- Цаг сонгох --</option>';
  timeOptions.forEach(time => {
    const opt = document.createElement("option");
    opt.value = time;
    opt.textContent = time;
    timeSelect.appendChild(opt);
  });
  timeStep.classList.remove("hidden");
  placeStep.classList.add("hidden");
  summaryStep.classList.add("hidden");
  finalMessage.classList.add("hidden");
});

timeSelect.addEventListener("change", () => {
  placeStep.classList.remove("hidden");
  summaryStep.classList.add("hidden");
  finalMessage.classList.add("hidden");
});

placeInput.addEventListener("input", () => {
  if (placeInput.value.trim() !== "") {
    summaryStep.classList.remove("hidden");
    summaryText.innerHTML = `Тэгэхээр бид <strong>${daySelect.value}</strong>-д, <strong>${timeSelect.value}</strong> цагт, <strong>${placeInput.value}</strong> дээр уулзахаар боллоо 😍.<br>Wow, чи ч мэдрэмжтэй сонголт хийлээ шүү Хулан.`;
  } else {
    summaryStep.classList.add("hidden");
  }
});

confirmBtn.addEventListener("click", () => {
  const randomMsg = loveMessages[Math.floor(Math.random() * loveMessages.length)];
  finalText.innerHTML = `Баярлалаа, 💖<br>${randomMsg}`;
  finalMessage.classList.remove("hidden");
});
// Бусад кодуудаа хэвээр хадгална
confirmBtn.addEventListener("click", () => {
    const summary = `Бид ${daySelect.value} гарагт ${timeSelect.value} цагт ${placeInput.value} дээр уулзахаар боллоо.`;
    finalText.textContent = summary;
    finalMessage.classList.remove("hidden");
  
    launchEmojis(["🤩", "🥳", "🌷", "🎂"]);
  });
  
  // Emoji пад хийх
  function launchEmojis(emojis) {
    for (let i = 0; i < 25; i++) {
      const emoji = document.createElement("div");
      emoji.classList.add("emoji-fall");
      emoji.style.left = Math.random() * 100 + "vw";
      emoji.style.top = "-50px";
      emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      document.body.appendChild(emoji);
      setTimeout(() => emoji.remove(), 3000);
    }
  }
  
