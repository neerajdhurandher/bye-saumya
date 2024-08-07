function calculateDaysLeft(targetDate) {
    const today = new Date();
    const futureDate = new Date(targetDate);
    const timeDiff = futureDate - today;
    const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); // Convert milliseconds to days
    return daysLeft;
}
function set_remaining_date(){
    const targetDate = "August 20, 2024";
    let daysLeft = calculateDaysLeft(targetDate);
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

updateDateTime();
setInterval(updateDateTime, 1000); // Update every second



let page = document.querySelector(".date-page");


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

let count = 0;
const maxCount = 5;

const intervalId = setInterval(() => {
  if (count < maxCount) {
    hidden();
    count++;
  } else {
    set_remaining_date();
    clearInterval(intervalId);
  }
}, 700);
