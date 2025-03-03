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
    const fName = getElement("#firstName");
    const lName = getElement("#lastName");

    const msgs: string[] = [];

    if (email.value === "") {
        msgs.push("Please enter an email address.");
    } else if (!email.value.includes("@")) {
        msgs.push("Email address must include @.");
    } else if (!email.value.includes(".")) {
        msgs.push("Email address must include a dot (.).");
    }
    if (fName.value === "") {
        msgs.push("Please enter your first name."); 
    }
    if (lName.value === "") {
        msgs.push("Please enter your last name."); 
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