
//for header

document.body.style.cssText = "margin: 7;  font-family: Tahoma, Arial;";
let header =document.createElement("header")

let logo=document.createElement("div")
let list=document.createElement("ul")

for(let i=0;i<4;i++){
let Li=document.createElement("li")
//let liText=document.createTextNode("home")
list.appendChild(Li)
//Li.appendChild(liText)
}
list.children[0].textContent="Home"
list.children[1].textContent="About"
list.children[2].textContent="Services"
list.children[3].textContent="Contact"

let logotext=document.createTextNode("ELzero")




header.appendChild(logo)
logo.appendChild(logotext)
header.appendChild(list)


//header.style.display="flex"
header.style.backgroundColor="green"
list.style.listStyle="none"
list.style.padding="10px"
list.style.display="flex"
list.style.justifyContent="flex-end"
list.style.transform="translateY(-40px)"
list.style.gap="12px"
list.style.color="white"

list.style.marginBottom="20px"

logo.style.padding="10px"
logo.style.fontSize="20px"
logo.style.color="white"


document.body.appendChild(header)


//for content
let cont =document.createElement("content")

for(let i=0;i<15;i++){
    let divcon =document.createElement("div")
    divcon.className="pro"
    let spandiv=document.createElement("span")
    let pdiv=document.createElement("p")
    let spandivText=document.createTextNode(i+1)
    let pdivText=document.createTextNode("product")

    cont.appendChild(divcon)
    divcon.appendChild(spandiv)
    spandiv.appendChild( spandivText)
    divcon.appendChild(pdiv)
    pdiv.appendChild(pdivText)
    //for styles
divcon.style.width="85%"
divcon.style.backgroundColor="green"
 
 divcon.style.textAlign="center"
divcon.style.padding="8px"
spandiv.style.fontSize="20px"
spandiv.style.color="white"
pdiv.style.opacity="0.7"
pdiv.style.fontSize="10px"
//divcon.style.margin = "5px 20px"

}
cont.style.display="grid"
cont.style.gridTemplateColumns = "repeat(3, 1fr)"
cont.style.backgroundColor="#eee"
cont.style.gap="10px"
cont.style.justifyContent="space-evenly"

document.body.appendChild(cont)

//for footer
let f=document.createElement("footer")
let fdiv=document.createElement("div")
let fdivText=document.createTextNode("Copyright 2024")
f.appendChild(fdiv)
fdiv.appendChild(fdivText)

f.style.textAlign="center"

f.style.backgroundColor = "red"
f.style.color ="white"
f.style.marginTop ="5px"



cont.style.backgroundColor="#eee"
document.body.appendChild(f)


