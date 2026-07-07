console.log("Connected successfully");

const startDate = new Date("2026-03-14");

const today = new Date();

const difference = today.getTime() - startDate.getTime();

const daysTogether = Math.floor(
    difference / (1000 * 60 * 60 * 24)
);

document.getElementById("days").innerHTML =
daysTogether + " Days ❤️";