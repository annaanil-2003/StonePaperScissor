const container = document.querySelector(".container"),
userResult = document.querySelector(".userResult img"),
botResult = document.querySelector(".botResult img"),
result = document.querySelector(".result"),
option = document.querySelectorAll(".option");

option.forEach((image,index) =>{
    image.addEventListener("click",(e) =>{
        image.classList.add("active");

        option.forEach((image2,index2)=>{
            index !== index2 && image2.classList.remove("active");
        });
        let imgsrc = image.querySelector("img").src;

        userResult.src = imgsrc;
        
        let randnum = Math.floor(Math.random()*3);
        let botImg = ["rock.png","paper.png","scissors.png"];
        botResult.src =  botImg [randnum];
        let botvalue = ["R","P","S"][randnum];
        let uservalue = ["R","P","S"][index];
        let outcome= {
            RR: "DRAW",
            RP: "BOT",
            RS: "YOU",
            PP: "DRAW",
            PS: "BOT",
            PR: "YOU",
            SS: "DRAW",
            SR: "BOT",
            SP: "YOU",
        };
        let outcomesvalue = outcome[uservalue + botvalue];
        result.textContent=uservalue === botvalue?"DRAW": `${outcomesvalue}  won`;
        
    });
});