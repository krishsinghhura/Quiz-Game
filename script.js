let arr=[{
    question:"1. How many companies are a part of Sensex (Stock Exchange Sensitive Index)? ",
    answers:[{text:"20",correct:false},
             {text:"30",correct:true},
             {text:"50",correct:false},
             {text:"100",correct:false}
    ]   
    },
    {
        question:"2. When was NIFTY (National Stock Exchange Fifty) established",
        answers:[{text:"1992",correct:false},
                {text:"1998",correct:false},
                {text:"1996",correct:true},
                {text:"1994",correct:false}
    ]   
    },
    {
        question:"3. The first computerised stock exchange in India was ________.",
        answers:[{text:"Free-Float capitalisation",correct:true},
                {text:"Market capitalisation",correct:false},
                {text:"Authorised share capital",correct:false},
                {text:"Paid-up capital",correct:false}
    ]   
    },
    {
        question:"4. NIFTY and SENSEX are calculated based on ____________.",
        answers:[{text:"Bombay Stock Exchange (BSE)",correct:false},
                {text:"Multi Commodity Exchange (MCX)",correct:false},
                {text:"National Stock Exchange (NSE)",correct:true},
                {text:"Over-the-Counter Exchange of India (OCTEI)",correct:false}
    ]   
    },
];

let ques=document.querySelector(".question");
let ans=document.querySelector(".answers");
let ans1=document.querySelector("#ans1");
let ans2=document.querySelector("#ans2");
let ans3=document.querySelector("#ans3");
let ans4=document.querySelector("#ans4");
let next=document.querySelector(".next button");

let score=0;
function changing(){
    i++;
    if(i==3){
        next.innerHTML="Click for results"
    }
    if(i==4){
        lastOne();
    }
    ques.innerHTML=arr[i].question;
    ans1.innerHTML=arr[i].answers[0].text;
    ans2.innerHTML=arr[i].answers[1].text;
    ans3.innerHTML=arr[i].answers[2].text;
    ans4.innerHTML=arr[i].answers[3].text;

    ans1.style.backgroundColor="white";
    ans2.style.backgroundColor="white";
    ans3.style.backgroundColor="white";
    ans4.style.backgroundColor="white";

    let ans1Call=()=>{
    if(arr[i].answers[0].correct){
        ans1.style.backgroundColor=" rgba(0, 128, 0, 0.815)";
        score++;
        console.log(score);
    } else  {
        ans1.style.backgroundColor="rgba(255, 0, 0, 0.644)";
        ans2.removeEventListener("click",ans2Call);
        ans3.removeEventListener("click",ans3Call);
        ans4.removeEventListener("click",ans4Call);
        }
    }

    let ans2Call=()=>{
        if(arr[i].answers[1].correct){
            ans2.style.backgroundColor=" rgba(0, 128, 0, 0.815)";
            score++;
            console.log(score);
        }else {
            ans2.style.backgroundColor="rgba(255, 0, 0, 0.644)";
            ans1.removeEventListener("click",ans1Call);
            ans3.removeEventListener("click",ans3Call);
            ans4.removeEventListener("click",ans4Call);
        }
    }

    let ans3Call=()=>{
        if(arr[i].answers[2].correct){
            ans3.style.backgroundColor=" rgba(0, 128, 0, 0.815)";
            score++;
            console.log(score);
        }else {
            ans3.style.backgroundColor="rgba(255, 0, 0, 0.644)";
            ans2.removeEventListener("click",ans2Call);
            ans1.removeEventListener("click",ans1Call);
            ans4.removeEventListener("click",ans4Call);
        }
    }

    let ans4Call=()=>{
        if(arr[i].answers[3].correct){
            ans4.style.backgroundColor=" rgba(0, 128, 0, 0.815)";
            score++;
            console.log(score);
        }else {
            ans4.style.backgroundColor="rgba(255, 0, 0, 0.644)";
            ans2.removeEventListener("click",ans2Call);
            ans3.removeEventListener("click",ans3Call);
            ans1.removeEventListener("click",ans1Call);
        }
    }

    ans1.addEventListener("click",ans1Call);
    ans2.addEventListener("click",ans2Call);
    ans3.addEventListener("click",ans3Call);
    ans4.addEventListener("click",ans4Call);

    function lastOne(){
        let el=document.createElement("div");
        cardd.remove();
        el.innerText="Your score is "+score;
        el.setAttribute("class","score");
        container.append(el);
    }
}

let i=-1;
next.addEventListener("click",changing);

cardd=document.querySelector(".card");
container=document.querySelector(".container");
changing();