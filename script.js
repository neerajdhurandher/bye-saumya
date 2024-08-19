const targetDate = "August 20, 2024";

let page_heading_text = "Bye Bye Saumya!"
let page_heading_element = document.getElementById("page-heading")
let cloud_container_element = document.querySelector(".cloud-container")
let main_container_element = document.querySelector(".main-container")
let page = document.querySelector(".date-page");
let count = 0;
const maxCount = 5;
let daysLeft = undefined

function calculateDaysLeft(targetDate) {
    const today = new Date();
    const futureDate = new Date(targetDate);
    const timeDiff = futureDate - today;
    const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); // Convert milliseconds to days
    return daysLeft;
}

function set_remaining_date(){
    if (daysLeft == undefined){
        daysLeft = calculateDaysLeft(targetDate);
    }
    if(daysLeft < 0){
        daysLeft = 0
    }
    document.getElementById("days-left").textContent = daysLeft;
}

function updateDateTime() {
    const footer = document.getElementById('current-timestamp');
    const dateTime = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    const formattedDateTime = dateTime.toLocaleDateString('en-US', options);
    footer.textContent = `Today's Date and Time: ${formattedDateTime}`;
}

function hidden(){
    page.style.transform = 'translate(-30px,150px)';
    page.style.opacity = "0";
    setTimeout(visible, 200);
}

function visible(){
    page.style.transform = 'translate(0px, 0px)';
    setTimeout(()=>{
        page.style.opacity = "0.8";
    }, 400)
}



const intervalId = setInterval(() => {
  if (count < maxCount) {
    hidden();
    count++;
  } else {
    set_remaining_date();
    clearInterval(intervalId);
  }
}, 700);


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function add_character(alphabet, element) {
    const node = document.createTextNode(alphabet);
    const para = document.createElement("span");
    para.appendChild(node);
    element.appendChild(para);
    return para;
}

async function type_writer(word, element, repeat) {
    let node_list = []
    for (let char of word) {
        await sleep(200);
        try {
            node = add_character(char, element)
            node_list.push(node)
        } catch { }
    }

    if (repeat) {
        await sleep(1500)
        for (let i = node_list.length - 1; i > -1; i--) {
            try {
                element.removeChild(node_list[i])
                await sleep(200);
            } catch { }
        }
        for (let i = 0; i < node_list.length; i++) {
            try {
                element.appendChild(node_list[i])
                await sleep(200);
            } catch { }
        }
    }

}

updateDateTime();
setInterval(updateDateTime, 1000); // Update every second
type_writer(page_heading_text, page_heading_element, false)

daysLeft = calculateDaysLeft(targetDate);

if (daysLeft <= 0){
    main_container_element.style.display = "none" 
    cloud_container_element.style.display = "block" 
}else{
    main_container_element.style.display = "block" 
    cloud_container_element.style.display = "none" 

}


