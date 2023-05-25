// console.log('its alive!');
date_current = new Date().toLocaleDateString();
console.log(date_current)
// function for our edit buttons!
function editMe() {


    alert('Under construction!')

}


const date_new = document.querySelector('#dateInp');
const job_new = document.querySelector('#jobInp');
const location_new = document.querySelector('#locationInp');
const first_contact_new = document.querySelector('#firstContact');
const second_contact_new = document.querySelector('#secondContact');
const thank_you = document.querySelector('#thankYou');
const edit_btn = document.querySelector('#edit');
const add_btn = document.querySelector('#add-btn')
const table_body = document.querySelector('#myTbl tbody')

// Load entries from local storage
function loadEntries() {
    const savedEntries = localStorage.getItem('entries');
    if (savedEntries) {
        table_body.innerHTML = savedEntries;
    }
}

// Save entries to local storage
function saveEntries() {
    localStorage.setItem('entries', table_body.innerHTML);
}

// adding a new row to the table: date, company name, location, first contact?, second contact?, thank you?
function AddEntry() {
    if (job_new.value === '' || location_new.value === '') {
        alert('Please fill in the required fields.');
        return;
    }

    // Create row element
    const new_row = document.createElement('tr');
    new_row.className = 'myTbl';

    // Create table cells, aka DECKS
    const location_cell = document.createElement('td');
    location_cell.textContent = location_new.value;
    new_row.appendChild(location_cell);

    const job_applied_cell = document.createElement('td');
    job_applied_cell.textContent = job_new.value;
    new_row.appendChild(job_applied_cell);

    const date_applied_cell = document.createElement('td');
    date_applied_cell.textContent = date_new.value;
    new_row.appendChild(date_applied_cell);

    // FIRST CONTACT
    const first_cell = document.createElement('td');
    const first_status = document.createElement('img');
    if (first_contact_new.checked === true) {
        first_status.src = '../Assets/green_checkmark.svg.png';
    } else {
        first_status.src = '../Assets/Red_X.svg.png';
    }
    first_cell.appendChild(first_status);
    new_row.appendChild(first_cell);

    // SECOND CONTACT
    const second_cell = document.createElement('td');
    const second_status = document.createElement('img');
    if (second_contact_new.checked === true) {
        second_status.src = '../Assets/green_checkmark.svg.png';
    } else {
        second_status.src = '../Assets/Red_X.svg.png';
    }
    second_cell.appendChild(second_status);
    new_row.appendChild(second_cell);

    //   THANK YOU CELL
    const thanks_cell = document.createElement('td');
    const thanks_status = document.createElement('img');
    if (thank_you.checked === true) {
        thanks_status.src = '../Assets/green_checkmark.svg.png';
    } else {
        thanks_status.src = '../Assets/Red_X.svg.png';
    }
    thanks_cell.appendChild(thanks_status);
    new_row.appendChild(thanks_cell);



    //   NEW EDIT BUTTON
    const edit_cell = document.createElement('td');
    const new_edit_btn = document.createElement('button');
    new_edit_btn.textContent = 'Edit?';
    new_edit_btn.className = 'edit-btn';
    new_edit_btn.addEventListener('click', editMe);
    edit_cell.appendChild(new_edit_btn);
    new_row.appendChild(edit_cell);

    // Append the new row
    table_body.appendChild(new_row);

    // Save entries to local storage
    saveEntries();

    // Reset values
    date_new.value = '';
    job_new.value = '';
    location_new.value = '';
    first_contact_new.checked = false;
    second_contact_new.checked = false;
    thank_you.checked = false;
}

function handle_save() {
    AddEntry();
}

add_btn.addEventListener('click', handle_save);

// Load entries from local storage on page load
loadEntries();
