function checkString(s: string): boolean {
    let firstB=false;
   
for(let i=0; i< s.length;i++){
    if(!firstB && s[i]=='b')
        {
             firstB=true;
        }
    if(firstB)
        {
            if(s[i]=='a')
                {
                    return false;
                }
        }
}
    return true;
};
module.exports = checkString;