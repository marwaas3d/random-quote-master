let random = document.getElementById("random");
let author = document.getElementById("author");
let quote = document.getElementById("quote");
let share = document.getElementById("share");
let msg = document.getElementById("msg")
random.addEventListener("click",function(){
    fetch(
    "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/3-javascript/challenges/group_1/data/random-quotes.json"
    )
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        let randomnumber = Math.floor(Math.random()* data.length);
        author.innerHTML = data[randomnumber].author;
        quote.innerHTML = data[randomnumber].quote;

        if(!msg.classList.contains("d-none")){
            msg.classList.add("d-none")
        }
    })
    .catch(error=>console.error("Error fetching quotes:", error))
})


share.addEventListener("click",function(){
    navigator.clipboard.writeText(quote.innerText)
    msg.classList.remove("d-none")
})



