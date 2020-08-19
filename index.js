let cards = document.querySelectorAll(".col-4");
console.log(cards);

document.getElementById("Asia").addEventListener("click", () => {
    cards.forEach((item) => {
        if (item.id != "AsiaCard") {
            item.style.display = "none";
        } else {
            item.style.display = "flex";
        }
    })
});

document.getElementById("Europe").addEventListener("click", () => {
    cards.forEach((item) => {
        if (item.id != "EuropeCard") {
            item.style.display = "none";
        } else {
            item.style.display = "flex";
        }
    })
});
document.getElementById("all").addEventListener("click", () => {
    cards.forEach((item) => {
        item.style.display = "flex";
    })
});
document.getElementById("Oceania").addEventListener("click", () => {
    cards.forEach((item) => {
        if (item.id != "OceaniaCard") {
            item.style.display = "none";
        } else {
            item.style.display = "flex";
        }
    })
});
document.getElementById("North America").addEventListener("click", () => {
    cards.forEach((item) => {
        if (item.id != "NorthAmericaCard") {
            item.style.display = "none";
        } else {
            item.style.display = "flex";
        }
    })
});

document.getElementById("South America").addEventListener("click", () => {
    cards.forEach((item) => {
        if (item.id != "SouthAmericaCard") {
            item.style.display = "none";
        } else {
            item.style.display = "flex";
        }
    })
});

document.getElementById("Africa").addEventListener("click", () => {
    cards.forEach((item) => {
        if (item.id != "AfricaCard") {
            item.style.display = "none";
        } else {
            item.style.display = "flex";
        }
    })
});

document.getElementById("Antartica").addEventListener("click", () => {
    alert("In 1961, the Antarctic Treaty has been drawn up which stipulates that scientific research should take place but that bans military activity on the continent. The continent of Antarctica contains no countries and no country flags.")
});


document.getElementById("search").addEventListener("keyup", () => {
    let query = document.getElementById("search").value.toLowerCase()
    cards.forEach((item) => {
        if (item.querySelector("h4").textContent.toLowerCase().startsWith(query)) {
            item.style.display = "flex"
        } else {
            item.style.display = "none"
        }
    })
})