const arr = [1, 12, 6, 7, 17, 10, 21]; 
// filter, map, forEach

// const filterArr = arr.map((val, ind) => val > 10)
// console.log(filterArr); 

const sortArr = arr.sort((a, b) => {
    // < 0, u sortiranom poretku, prvo ce se naci a, pa b 
    // = 0, ne mijenja se redosljed a i b 
    // > 0, u sortiranom poretku, prvo ce se naci b pa a 

    // if (a < b)
    //     return -1; 
    // if (a > b) 
    //     return 1; 
    // return 0; 
    return a - b; 
}); 
console.log(sortArr); 