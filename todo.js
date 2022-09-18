var task = document.getElementById("task"); //input 
// var taskToDo = document.getElementById("taskToDo"); //span id
var selectingUl = document.getElementById("workToDo"); //ul id
var addButton = document.getElementById("add"); 
var tickButton = document.getElementById("tick");
// var list = document.createElement("li");
// taskToDo.innerText = input.value;

function addingListItems()
{
    //create li
    var listItem = document.createElement("li");  
    selectingUl.appendChild(listItem);
    //creating span
    var creatingSpan = document.createElement("span");
    listItem.appendChild(creatingSpan);
    //creating edit button
    var editButton = document.createElement("button");
    
    editButton.setAttribute("class", "text_btn");
    editButton.setAttribute("onClick", "editList(event)");
    editButton.setAttribute("id", "edit");
    console.log(editButton.id);
    editButton.innerText = "EDIT";
    listItem.append(editButton);
    //creating image cross button
    var imageButton = document.createElement("button");
    //setting image in button
    imageButton.setAttribute("onClick", "deletingList(event)"); // calling function
    imageButton.setAttribute("id", "cross");
    imageButton.setAttribute("class", "img_btn");
    var crossImage = document.createElement("img");
    crossImage.setAttribute("src", "./plus_1.png");
    imageButton.appendChild(crossImage);
    listItem.appendChild(imageButton);
    creatingSpan.innerText = task.value;
    task.value = "";
    
};
// add-button click event
addButton.addEventListener("click", function(){
    addingListItems();
});

function deletingList(event)
{
    //pointing li tag //button then Li
    // listToRemove = event.target.parentNode.parentNode.tagName;
    // alert(listToRemove);
    //pointing span value
    // listToRemove = event.target.parentNode.previousSibling.previousSibling.innerText;
    //pointing li // button then Li
    var listToRemove = event.target.parentNode.parentNode;
    listToRemove.style.display = "none";
};

function editList(event)
{
    // event.target -> button previousSibling ->span
    var spanValue = event.target.previousSibling.innerText;
    task.value = spanValue;
    addButton.style.display = "none";
    tickButton.style.display = "flex";
    tickButton.addEventListener("click" , function(){
        //putting input in span value
        event.target.previousSibling.innerText = task.value;
        event = null;
        task.value = "";
        addButton.style.display = "flex";
        tickButton.style.display = "none";
        return;
    });
    return;
};


// function edit(event)
// {
//     event.target.previousSibling.innerText = task.value;
//     addButton.style.display = "flex";
//     tickButton.style.display = "none";
// };
var body = document.getElementById("body");
var container = document.getElementById("container");
var changeToDark = document.getElementById("light");
var mode = false;
changeToDark.addEventListener("click",function(){
    if (mode === false)
    {
        changeToDark.classList.add("moveLightMode");
        body.classList.add("darkLight");
        container.classList.add("darkLight");   
        mode = true;
    }
    else 
    {
        changeToDark.classList.remove("moveLightMode");
        body.classList.remove("darkLight");
        container.classList.remove("darkLight");
        mode = false;
    }
});
