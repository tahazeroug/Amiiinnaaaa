//image
let myImage = document.querySelector("img");
myImage.onclick = function() {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "amina.jpg") {
        myImage.setAttribute("src", "amina2.jpg");
    }
    else {
        myImage.setAttribute("src", "amina.jpg");
    }
}

//button
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName () {
    let myName = prompt ("please enter a name.");
    if (!myName) {
        setUserName();
    }
    else {
        localStorage.setItem("name", myName);
        myHeading.textContent = '"Amiiinnaaaa is cool"' + ", " + myName + " said";
    }
}

//name
if (! localStorage.getItem("name")) {
    setUserName();
}
else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = '"Amiiinnaaaa is cool"' + ", " + storedName + " said";
}

myButton.onclick = () => {
    setUserName();
}