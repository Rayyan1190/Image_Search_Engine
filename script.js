
const searchForm = document.getElementById("search_engine_box");
const searchBox = document.getElementById("search_box");
const searchResult = document.getElementById("search_result");
const showMore = document.getElementById("show_more");

let keyword = "";
    let pagee = 1;

async function searchImages() {
    
    keyword = searchBox.value;
    const accessKey = "FbxNH-L_6n-qxz6G4m6F8xZAswkAa8MsKNBWj3LnkRU";
    const url = `https://api.unsplash.com/search/photos?page=${pagee}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();
    if(pagee===1)
    {
        searchResult.innerHTML="";
    }
    const results=data.results;

    results.map((result)=>{
        const image=document.createElement("img");
        image.src=result.urls.small;
        const imageLink=document.createElement("a");
        imageLink.href=result.links.html;
        imageLink.target="_blank";
        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    })
    showMore.style.display="block";
}

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    pagee = 1;
    searchImages();
});

showMore.addEventListener("click",()=>{
    pagee++;
    searchImages();
})
