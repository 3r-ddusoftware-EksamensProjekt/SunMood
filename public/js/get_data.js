const el = document.querySelector("body");

fetch("/data/get")
    .then((response) => response.json())
    .then((data) => {
        for (row of data.results) {
            el.innerHTML += "<br> " + row.value;
        }
    });
