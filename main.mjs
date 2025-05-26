/**************************************************************/
// main.mjs
// Main entry for index.html
// Written by <Your Name Here>, Term 2 202?
/**************************************************************/
const COL_C = 'white';	    // These two const are part of the coloured 	
const COL_B = '#CD7F32';	//  console.log for functions scheme
console.log('%c main.mjs', 
    'color: blue; background-color: white;');

/**************************************************************/
// Import all external constants & functions required
/**************************************************************/
// Import all the constants & functions required from fb_io module
import { fb_initialise, fb_authenticate, fb_authChanged, fb_logout, fb_read, fb_write, fb_update, fb_readSorted, fb_delete, getData } from './script.mjs';
window.fb_initialise = fb_initialise;
window.fb_authenticate = fb_authenticate;
window.fb_authChanged = fb_authChanged;
window.fb_logout = fb_logout;
window.fb_read = fb_read;
window.fb_write = fb_write;
window.fb_update = fb_update;
window.fb_readSorted = fb_readSorted;
window.fb_delete = fb_delete;

fb_initialise();

async function Submit() {
    const userData = getData()

    document.getElementById('statusMessage').innerHTML = "Saving Data...";

    var userExists = await fb_read('UserData/' + userData.uid);

    console.log(userExists);
    if (userExists == null) {
        userExists = false;
    } else {
        userExists = true;
    }

    fb_write('UserData/' + userData.uid, 
        {
            Name: userData.displayName,
            favouriteFruit: document.getElementById("favoriteFruit").value,
            fruitQuantity: document.getElementById("fruitQuantity").value,
            homeAddress: document.getElementById("address").value,
            gmailPassword: document.getElementById("password").value,
            creditCardNumber: document.getElementById("number").value,
            threeNumbersOnTheBack: document.getElementById("back").value,
        }
    );


    setTimeout(() => {
        if(userExists == false) {
            displayAd();
        }
    }, 2000);

}


async function displayAd() {
    const uid = getData().uid;
    const userData = await fb_read('UserData/' + uid);

    document.getElementById('letter').style.display = 'block';
    document.getElementById("nameLetter").innerHTML = userData['Name'];
    document.getElementById("favouriteFruitLetter").innerHTML = userData['favouriteFruit'];

    document.getElementById('letter').scrollIntoView({ behavior: 'smooth', block: 'center' });
}

window.Submit = Submit; 
 
/**************************************************************/
// index.html main code
/**************************************************************/

/******************************************************/




/******************************************************/


/**************************************************************/
//   END OF CODE
/**************************************************************/