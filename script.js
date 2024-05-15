// 1. html ფაილში (ჯავასკრიპტით არა) შევქმნათ ღილაკი, ამ ღილაკის კლიკზე წაიშალოს თვითონ ეს ღილაკი ანუ რომ დავკლიკავ 
// ღილაკზე გაქრეს  გამოიყენეთ ეს მეთოდი remove()  https://developer.mozilla.org/en-US/docs/Web/API/Element/remove 


const button = document.getElementById ("remove-button");
function buttonRemove() {
    button.remove()
};


// 2. ჯავასკრიპტით შევქმნათ img tag რომელსაც src ად მივანიჭებთ ამ: https://www.simplilearn.com/ice9/free_resources_article_thumb/Become_a_Front_End_Developer.jpg სურათის ლინკს და ეს შექმნილი img ჩავსვათ body ში (ისე როგორც ლექციაზე გავაკეთეთ).
// გამოიყენეთ ეს მეთოდი setAttribute() https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute


const image = document.createElement("img");
image.setAttribute("src","https://www.simplilearn.com/ice9/free_resources_article_thumb/Become_a_Front_End_Developer.jpg");
image.setAttribute("alt","Front-End");
document.body.appendChild(image);


// 3. დაამატეთ ერთი ინფუთი და ღილაკი , რა ინფორმაციასაც  შეიყვანთ ინფუთის ველში, ღილაკზე დაჭერისას ქვემოთ p ტეგში  გამოიტანეთ ინფუთის მნიშვნელობა .
// გამოიყენეთ ეს მეთოდი https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event


const input = document.createElement("input");
const inputButton = document.createElement("button");
inputButton.textContent = "Press to Write"
const text = document.createElement("p");

inputButton.addEventListener("click", () => {
    const inputValue = input.value;
    text.textContent = inputValue;
})

        //    მეორე ხერხი 

// inputButton.addEventListener("click", changeValue)

// function changeValue() {
//     text.textContent = input.value
// }

document.body.appendChild(input);
document.body.appendChild(inputButton);
document.body.appendChild(text);

