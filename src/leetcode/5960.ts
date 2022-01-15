function capitalizeTitle(title: string): string {

    let newArr:string [] = [];
    title.split(' ').forEach(element => {
        let word = element.toLowerCase();;
        if(element.length>2){
        word=word.substring(0,1).toUpperCase()+word.substring(1).toLocaleLowerCase();
        }
        
        newArr.push(word);
    });
    return newArr.join(' ');

};

module.exports = capitalizeTitle;
