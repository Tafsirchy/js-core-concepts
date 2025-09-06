// callback
function pakhibhai (callMeBack,patro, patri) {
    // console.log('callMeBack', callMeBack);
    console.log('value of patro', patro);
    if(patri) {
        // console.log('Pakhi is a good girl');
        console.log(callMeBack);
        callMeBack(patro);
    }
    else {
        console.log("Tor kopale biye nai")
    }
}

// pakhibhai('Pakhi is a good girl', true);


function callSomeOne(person) {
    console.log('calling ', person);
}

// callSomeOne('jodhu')

// return a function to another function as parameter

pakhibhai(callSomeOne, 'jodhu', 'madhu');


/////////////////////
// myButton.addEventListener('click',function(){
//     console.log('click event')
// })

const addFive = (x) => x+5;
[1,2,3,4,5].map(addFive);
// [1,2,3,4,5].map(x => x+5);