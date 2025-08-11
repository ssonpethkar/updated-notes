const CHAR = 265;
const anagaram = (str1, str2) => {
    const charArr =  new Array(CHAR).fill(0);

    if (str1.length !== str2.length) {
         return false;
    }

    for (let i = 0; i < str1.length; i++) {
        charArr[str1.charCodeAt(i)]++;
        charArr[str2.charCodeAt(i)]--;
    }

    for (let i = 0; i < CHAR; i++) {
        if (charArr[i] !== 0) return false;
    }
    return true;
};

console.log(anagaram('silent', 'listen'));  // true


// Short
const isAnagram = (str1, str2) => {
    const normalize = str =>
      str
        .toLowerCase()
        .replace(/[^a-z0-9]/gi, '')
        .split('')
        .sort()
        .join('');
    return normalize(str1) === normalize(str2);
  };
  console.log(isAnagram('iceman', 'cinema')); 
  console.log(isAnagram('madam', 'madam'));
  

  // optimised solution
  function checkAnagram (str1, str2) {
    if (str1.length !== str2.length) return false;

    let obj1 = {};
    let obj2 = {};

    for (let i = 0; i < str1.length; i++) {
        obj1[str1[i]] = (obj1[str1[i]] || 0) + 1;
        obj2[str2[i]] = (obj2[str2[i]] || 0) + 1;
    }

    for (const key in obj1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }

    return true;
  }

  console.log(checkAnagram("listen", "silent"));    // true
  console.log(checkAnagram("car", "rat"));          // false