var api="https://newsapi.org/v2/everything?q=tesla&from=2024-09-04&sortBy=publishedAt&apiKey=API_KEY"
var apiKey="&apiKey=9b7f8cd594e74d2a89e783fda4041922"
var rapi="https://newsapi.org/v2/everything?q=";
var inputv=document.querySelector(".input");
var inputnews=document.querySelector(".inputtop")
var inputval;
var blogcontainer=document.querySelector("#blog-container")
// if (inputnews.value.trim() === "") {
//     inputval = inputv;
//     console.log("hello"+inputnews.value);
//   }else {
//     inputval= inputnews;
//     console.log("nil pointer")

// }
function findcitynews(){
    inputval=inputv;
    find(inputval)
}
function findnews(){
    inputval=inputnews;
    find(inputval);
}
async function find(inputval) {
    var res=await fetch(rapi+inputval.value+apiKey);
    
    // if (!res.ok){
    //     alert("error on api");
        
    // }
    // else{
    const data=await res.json();
    console.log(data)
    articles=data.articles;
    display(articles)

    
//}
    

}
function display(articles){
    blogcontainer.innerHTML=""
    articles.forEach(article => {
        const blogcard=document.createElement("div");
        blogcard.classList.add("blog-card");
        const img=document.createElement("img");
        img.src=article.urlToImage
        img.alt=article.title
        const title=document.createElement("h2");
        const turntitle= article.title.length > 30 ? article.title.slice(0,30)+"....":article.title;
        title.textContent=turntitle;
        const des=document.createElement("p");
        const turndes=article.description.length >120?article.description.slice(0,120)+"...":article.description;
        des.textContent=turndes;

        blogcard.appendChild(img)
        blogcard.appendChild(title)
        blogcard.appendChild(des)
        blogcontainer.appendChild(blogcard)
        blogcard.addEventListener("click",()=>{
            window.open(article.url,"_blank")
        })
    });
}