"use strict";

const getElement = selector => document.querySelector(selector); 

const displayErrorMsgs = msgs => {
    const ul = document.createElement("ul");
    ul.classList.add("messages");


    for (let msg of msgs) {
        const li = document.createElement("li");
        const text = document.createTextNode(msg);
        li.appendChild(text);
        ul.appendChild(li);
    }

    
    const node = getElement("ul");
    if (node == null) { 
        const form = getElement("form");
        form.parentNode.insertBefore(ul, form.nextSibling);
    } else {

        node.parentNode.replaceChild(ul, node);
    }  
}

const processEntries = () => {
    const email = getElement("#email_address");
    const phone = getElement("#phone");
    const fName = getElement("#firstName");
    const lName = getElement("#lastName");

    const msgs = [];

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const nameRegex = /^[a-zA-Z\s]+$/;

    if (email.value === "") {
        msgs.push("Please enter an email address.");
    } else if (!emailRegex.test(email.value)) {
        msgs.push("Please enter a valid email address.");
    }

    if (fName.value === "") {
        msgs.push("Please enter your first name.");
    } else if (!nameRegex.test(fName.value)) {
        msgs.push("First name can only contain letters and spaces.");
    }

    if (lName.value === "") {
        msgs.push("Please enter your last name.");
    } else if (!nameRegex.test(lName.value)) {
        msgs.push("Last name can only contain letters and spaces.");
    }


    if (msgs.length === 0) { 
        alert("Thank you! We will be in touch");

    } else {
        displayErrorMsgs(msgs);
    }
};

document.addEventListener("DOMContentLoaded", () => {
    getElement("#register").addEventListener("click", processEntries);
    getElement("#email_address").focus();   
});