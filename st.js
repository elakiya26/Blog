// const notesContainer =document.querySelector(".notes-container");
// const createBtn=document.querySelector(".btn");
// // let notes=document.querySelectorAll(".input-box");
// let currentDate=localStorage.getItem("currentDate")||"default";
// let allNotes=JSON.parse(localStorage.getItem("input-box"))||{};

// function showNotes(){
//     // notesContainer.innerHTML =localStorage.getItem("notes");
//     const notesForDate=allNotes[currentDate]|"";
//     notesContainer.innerHTML=notesForDate;

//     }

// showNotes();

// function updateStorage(){
//     // localStorage.setItem("notes",notesContainer.innerHTML);
//      allNotes[currentDate]=notesContainer.innerHTML;
//      localStorage.setItem("input-box",JSON.stringify(allNotes));
// }


// // document.getElementById("dycalendar").addEventListener("dblclick",function(event){
// createBtn.addEventListener("click",()=>{
//     let inputBox=document.createElement("P");
//     let img=document.createElement("img");
    
//     inputBox.className="input-box";
//     inputBox.setAttribute("contenteditable","true");
//     img.src="image/deleted-removebg-preview.png";
    
//     notesContainer.appendChild(inputBox).appendChild(img);
//     updateStorage();
 
    
    
// })



// function onDateClick(dateString) {
//     selectedDate = dateString;

//     const notesContainer = document.getElementById("notes-container");
//     notesContainer.innerHTML = ""; // Clear previous content

//     // Heading
//     const heading = document.createElement("h3");
//     heading.innerText = "Notes for " + dateString;
//     notesContainer.appendChild(heading);

//     // Textarea
//     const textarea = document.createElement("textarea");
//     textarea.id = "note-input";
//     textarea.rows = 4;
//     textarea.cols = 30;
//     notesContainer.appendChild(textarea);

//     // Line break
//     notesContainer.appendChild(document.createElement("br"));

//     // Create SAVE button dynamically
//     const saveBtn = document.createElement("button");
//     saveBtn.innerText = "Save Note";
//     saveBtn.onclick = function () {
//         const note = textarea.value;
//         localStorage.setItem(dateString, note);
//         alert("Note saved for " + dateString);
//         displaySavedNote(dateString);
//     };
//     notesContainer.appendChild(saveBtn);

//     // Display previously saved note, if any
//     displaySavedNote(dateString);

//     // Show notesContainer
//     notesContainer.style.display = "block";
// }

// function displaySavedNote(dateString) {
//     let prevNote = localStorage.getItem(dateString);
//     let savedNoteDiv = document.createElement("div");
//     savedNoteDiv.innerText = prevNote ? "Saved Note: " + prevNote : "No notes yet.";
//     document.getElementById("notes-container").appendChild(savedNoteDiv);
// }







// notesContainer.addEventListener("click",function(e){
//     if(e.target.tagName=="IMG" ){
//         e.target.parentElement.remove();
//          updateStorage();

//     }
//     else if(e.target.tagName=="P"){
//         notes=document.querySelectorAll(".input-box");
//         notes.forEach(nt=>{
//             nt.onkeyup = function() {
//                 updateStorage();
//             }
//         })
//     }
// })

// document.addEventListener("keydown",event=>{
//     if(event.key=="enter"){
//         document.execCommand("insertLineBreak");
//         event.preventDefault();
//     }
// })
// // notesContainer.addEventListener("click",function(e){
// //     if(e.target.tagName=="IMG"){
// //         e.target.parentElement.localStorage.setItem("notes",notesContainer.innerHTML);
// //     updateStorage();
// //     }
// // });
// function changeDate(dycalanderBody){
//     currentDate=dycalanderBody;
//     localStorage.setItem("currentDate",currentDate);
//     showNotes();
// }
// showNotes();
const notesContainer = document.getElementById("notes-container");
const createBtn = document.querySelector(".btn");

let currentDate = localStorage.getItem("currentDate") || "default";
let allNotes = JSON.parse(localStorage.getItem("input-box")) ;

function showNotes() {
    notesContainer.innerHTML = "";

    if (currentDate === "default") {
        notesContainer.innerHTML = "Please select a date to see or add notes.";
        return;
    }

    const notesForDate = allNotes[currentDate] || "";

        notesContainer.innerHTML = notesForDate;
    }


function updateStorage() {
    allNotes[currentDate] = notesContainer.innerHTML;
    localStorage.setItem("input-box", JSON.stringify(allNotes));
}

createBtn.addEventListener("click", () => {
    const inputBox = document.createElement("p");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");

    const img = document.createElement("img");
    img.src = "image/deleted-removebg-preview.png";
    img.style.cursor = "pointer";

    inputBox.appendChild(img);
    notesContainer.appendChild(inputBox);
    updateStorage();
});

notesContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    }
});

notesContainer.addEventListener("keyup", function (e) {
    if (e.target.classList.contains("input-box")) {
        updateStorage();
    }
});

document.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        document.execCommand("insertLineBreak");
        e.preventDefault();
    }
});

function onDateClick(dateString) {
    currentDate = dateString;
    localStorage.setItem("currentDate", currentDate);
    showNotes();
}

showNotes();



   

 