let inputEl = document.getElementById("searchInput");
let container = document.getElementById("searchResults");
let spinner = document.getElementById("spinner");

function addel(obj) {
    let {
        title,
        link,
        description
    } = obj;
    //1.add div Element
    let divEl = document.createElement("div");
    divEl.classList.add("result-item");
    container.appendChild(divEl);
    //2.add anchor Element
    let anchor1 = document.createElement("a");
    anchor1.classList.add("result-title");
    anchor1.href = link;
    anchor1.target = "_blank";
    anchor1.textContent = title;
    divEl.appendChild(anchor1);
    //3.adding br
    let br1 = document.createElement("br");
    divEl.appendChild(br1);
    //4.Adding link
    let anchor2 = document.createElement("a");
    anchor2.classList.add("result-url");
    anchor2.href = link;
    anchor2.target = "_blank";
    anchor2.textContent = link;
    divEl.appendChild(anchor2);
    //5.adding br Element
    let br2 = document.createElement("br");
    divEl.appendChild(br2);
    //6.adding description
    let para = document.createElement("p");
    para.textContent = description;
    para.classList.add("link-description");
    divEl.appendChild(para);
}

function fun(data) {
    spinner.classList.toggle("d-none");

    for (let eachitem of data.search_results) {
        addel(eachitem);
    }
}

inputEl.addEventListener("keydown", function(Event) {

    if (Event.key === "Enter") {
        container.textContent = "";
        spinner.classList.toggle("d-none");
        let text = inputEl.value;
        let options = {
            method: "GET"
        }
        fetch("https://apis.ccbp.in/wiki-search?search=" + text, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsondata) {
                fun(jsondata);
            })
    }
})