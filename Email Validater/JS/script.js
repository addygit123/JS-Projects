console.log("This is a script")
//Submitbtn=document.getElementById("submitBtn")
const result={
    "tag": "",
    "free": true,
    "role": false,
    "user": "adarsh123",
    "email": "adarsh123@gmail.com",
    "score": 0.64,
    "state": "deliverable",
    "domain": "gmail.com",
    "reason": "valid_mailbox",
    "mx_found": true,
    "catch_all": null,
    "disposable": false,
    "smtp_check": true,
    "did_you_mean": "",
    "format_valid": true
}
submitBtn.addEventListener("click", async (e)=> {
    e.preventDefault()
    console.log("clicked")
    resultCont.innerHTML=`<img width="100" src="img/loading.svg" alt="">`
    let key="ema_live_E5md4MGthxDdiqQAuJOxTKLkwEBmkm91QBXz5YIg"
    let email=document.getElementById("email").value 
    url=`https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
    res = await fetch(url)
    let result = await res.json()
    let str =``
    for(key of Object.keys(result)){
        if(result[key] !== "" && result[key] !== " ")
        str = str + `<div>${key}:${result[key]}</div>`
    }
    console.log(str)
    resultCont.innerHTML = str



})
