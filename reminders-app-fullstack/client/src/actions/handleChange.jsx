
//Utility function 
//takes in an input object (inputObj) - and a change event (event)
//updates inputObj with changes from the event

// This is considered a pure function for text inputs
// Why:  bc it can take any input object - and any event object - and update the 
// values within it according to the event 

// Meaning - we can use it on ANY TEXT INPUT to handleChange to an obj - not just in the cases we have demo'd.

function handleChange(inputObj, event) {
        inputObj = {...inputObj}
        inputObj[event.target.name] = event.target.value
    return inputObj;
}

export default handleChange