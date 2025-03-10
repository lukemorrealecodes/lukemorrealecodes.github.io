"use strict";

const getElement = selector => document.querySelector(selector); 

const displayErrorMsgs = msgs => {
    // create a new ul element
    const ul = document.createElement("ul");
    ul.classList.add("messages");

    // create a new li element for each error message, add to ul
    for (let msg of msgs) {
        const li = document.createElement("li");
        const text = document.createTextNode(msg);
        li.appendChild(text);
        ul.appendChild(li);
    }

    // if ul node isn't in document yet, add it
    const node = getElement("ul");
    if (node == null) {
        // get the form element 
        const form = getElement("form");

        // add ul to parent of form, before the form
        form.parentNode.insertBefore(ul, form.nextSibling);
    } else {
        // replace existing ul node
        node.parentNode.replaceChild(ul, node);
    }  
}

const processEntries = () => {
    // get form controls to check for validity
    const email = getElement("#email_address");
    const phone = getElement("#phone");
    const fName = getElement("#firstName");
    const lName = getElement("#lastName");

    // create array for error messages
    const msgs = [];

    // check user entries for validity
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

    // submit the form or notify user of errors
    if (msgs.length === 0) {  // no error messages
        alert("Thank you! We will be in touch");
        //getElement("form").submit();
    } else {
        displayErrorMsgs(msgs);
    }
};

document.addEventListener("DOMContentLoaded", () => {
    getElement("#register").addEventListener("click", processEntries);
    getElement("#email_address").focus();   
});