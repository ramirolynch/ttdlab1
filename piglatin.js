function translate(str) {

    const vowels = new RegExp(/[aeiou]/)

    str = str.split(' ')
  
    // looping through each word to make them into array
    for (let i=0; i< str.length; i++) {
        
       str[i] = str[i].split('')
      
        if (str[i][0] !== str[i][0].toLowerCase()) {

            str[i][0] = str[i][0].toLowerCase()

            if (vowels.test(str[i][0])) {
                
                str[i].push(`way`)
                str[i] = str[i].join('') 
            }
          
            else {

                let temp = `${str[i][0]}ay` 
                str[i].push(temp)
                str[i].shift()
                str[i] = str[i].join('')
            }
    
        }
        else {

            if (vowels.test(str[i][0])) {
                
                str[i].push(`way`)
                str[i].join('')
            }
            else {

                let temp = `${str[i][0]}ay`
                str[i].push(temp)
                str[i].shift()
                str[i] = str[i].join('')
            }
        }
    }

    str = str.join(' ')
  
    return str;
   
}




console.log(translate('rAmiro lynch'))

module.exports = translate;