let bodyChildren =  document.body.children;

for (let i = 2;i < bodyChildren.length;i++) {

    if (!Array.from(document.scripts).includes(bodyChildren[i])&& bodyChildren[i].className !== "") {
        bodyChildren[i].id =  `${bodyChildren[i].className}`;

        let specialTitle = document.createElement("h2");
        
        specialTitle.className = "special-title";
        
        specialTitle.innerText = `${bodyChildren[i].className}`
        
        bodyChildren[i].prepend(specialTitle);
        
    }
}

let spans = document.querySelectorAll(".skills span")


window.onscroll = function() {
    if (window.scrollY >= getOffset(skillsSection).top) {
            spans.forEach((ele) => {
            ele.style.width = `${ele.parentElement.getAttribute("data-width")}`
        })
    }
};

let skillsSection = document.querySelector(".skills");


function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY
    };
}