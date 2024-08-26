function onclickbtn() {
    let checkbtn = document.querySelector("#check-btn");

    // Add an event listener to the button
    checkbtn.addEventListener("click", function() {   
        let inputText = document.querySelector('#text-input');
        isPalindrome(inputText.value);
    });
}

function isPalindrome(strVal) {  
    if(strVal == '')
    {
        alert(`"Please input a value"`);
        return;
    }
    // Remove non-alphabetic characters and convert to lowercase
    let cleanedString = strVal.replace(/[^a-zA-Z]/g, '').toLowerCase();

    // Reverse the cleaned string
    let reversedString = cleanedString.split('').reverse().join('');

    // Check if the cleaned string is equal to the reversed string
    let ans = cleanedString === reversedString;

    // Display the result
    let res = document.querySelector('#result');
    if (ans) {
        res.innerText = `"${strVal} is a palindrome"`;
    } else {
        res.innerText = `"${strVal} is not a palindrome"`;
    }
}

onclickbtn();



