function longestPalindrome(words: string[]): number {

 let palin:number = 0;


 const permutations = (len, val, existing) => {
    if(len==0){
       res.push(val);
       return;
    }
    for(let i=0; i<words.length; i++){  
       if(!existing[i]){
          existing[i] = true;
          permutations(len-1, val+words[i], existing);
          existing[i] = false;
       }
    }
 }
 let res = [];
 const buildPermuations = (words = []) => {
    for(let i=0; i < words.length; i++){
       permutations(words.length-i, "", []);
    }
 };
 buildPermuations(words);
 res.sort((a, b) => (a.length > b.length ? -1 : 1))
 res.forEach(element => {
     if(element==element.split('').reverse().join(''))
     {
        if(element.length>palin)
        {
            palin=element.length
            return palin;
        }
     }
     
 });

 return palin;


};

module.exports = longestPalindrome;
