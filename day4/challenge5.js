function estPalindrome(text){
    let rev_text = "";
    for(let i=text.length-1 ; i>=0 ; i--){
        rev_text += text[i];
    }
    if(rev_text == text) return true;
    else return false
}
if(estPalindrome("kayak")) console.log("Ce mot est Palindrome")
else console.log("Ce mot n est pas Palindrome")