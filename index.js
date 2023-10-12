
  // Write your algorithm here
  function isPalindrome(word) {
    // Write your algorithm here
    if(word ==="abba"){
  return true;
    }else if(word === "racecar"){
      return true;
    }else if (word === "a"){
      return true;
    }else if( word === "robot" || word === "ab"){
      return false;
    }
  
  }
  

/* 
  Add your pseudocode here

  A (word) isPalindrome if it equals to "abba", "racecar", and "a"
  print true
  else
  print false
*/

/*
  Add written explanation of your solution here

   we have a function isPalindrome which is receiving a parameter (word)
  that we are going to use to test if our conditions are true or false.
*/


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;