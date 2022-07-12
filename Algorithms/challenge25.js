// # Challenge 1
// Anagrams are words or phrases you spell by rearranging the letters of another word or phrase.  
// For example, "schoolmaster" can be turned into "the classroom", below to elbow, gainly to laying,
//  meteor to remote.

// The only rule is that all the letters from the original word must be used when 
// they’re reordered to say something entirely different.

// implement a function isAnagram that returns true if two words are anagrams and return
//  false if the word are not (also return false if no words where given)

function isAnagram(str1, str2) {
    return (
      str1.toLowerCase().split("").sort().join("") ===
      str2.toLowerCase().split("").sort().join("")
    );
  }

//   # Examples
// isAnagram("below", "elbow") to return true
// isAnagram("meteor", "remote") to return true
// isAnagram("hackathon", "achcthoon") to return false