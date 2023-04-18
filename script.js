let timerEle=document.getElementById("timer");
let randomtextEle=document.getElementById("randomtext");
let submitbtnEle=document.getElementById("submit");
let resetbtnEle=document.getElementById("reset");
let textoutputEle=document.getElementById("textoutput");
let outputEle=document.getElementById("output");

let randomtext=""
let count=0;

function gettime(){
intervel=setInterval(function(){
    count+=1;
    timerEle.textContent= count +" seconds"
},1000)}



function get(){
    let url="https://apis.ccbp.in/random-quote";
    
    let options={
        method:"GET",
    }

    fetch(url,options)
    .then(function(response){
        return response.json()
    })
    .then(function(jsondata){
        randomtext=jsondata.content
        randomtextEle.textContent=randomtext
        gettime()
    })
}

get()


submitbtnEle.addEventListener('click',function(){
    let textoutputValue=textoutputEle.value
    if(textoutputValue===randomtext){
        outputEle.textContent=`you have completed in ${count} seconds`
        outputEle.style.color="green"
        clearInterval(intervel);
        timerEle.textContent="Great...!"
        timerEle.style.color="green";
    }
    else{
        outputEle.textContent="Text Typed was wrong";
        outputEle.style.color="red";
    }
})

resetbtnEle.addEventListener('click',function(){  
    get()
    textoutputEle.value="";
    clearInterval(intervel)
    count=0
    outputEle.textContent=""
})