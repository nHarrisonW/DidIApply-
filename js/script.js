// console.log('its alive!');


const date_new = document.querySelector('#dateInp');
const job_new = document.querySelector('#jobInp');
const location_new = document.querySelector('#locationInp');
const first_contact_new = document.querySelector('#firstContact');
const second_contact_new = document.querySelector('#secondContact');
const thank_you = document.querySelector('#thankYou');
const edit_btn = document.querySelector('#edit');
const add_btn = document.querySelector('#add-btn')


// function for our edit buttons!
function editMe() {
    console.log('lets make an edit!')

}

add_btn.addEventListener('click', function () {
    // Declare our variable values
    const date_change = date_new.value
    const job_change = job_new.value
    const location_change = location_new.value

    let row = document.getElementsByTagName('tr')[0];
    let x = row.insertCell(1);
    var elementid = document.getElementsByTagName("td").length
    x.setAttribute('id', elementid);
    x.innerHTML = date_change;



    // creating elements!
    const tRow = document.createElement('tr')
    const tDeck = document.createElement('td')






    console.log('success!')
})
