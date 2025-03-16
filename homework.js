//question1  
// גם לעבור עלייה בבקשה 

function numbers() {
    let array = [ "56", '3', '89',"2003", "12" ]
    array.sort(function(a,b){return a-b});
    console.log(array)
}

numbers()

// question2
//   לשאול על שאלה 2 האם אפשר לעבור עלייה ?

function findCommonValues(arr1, arr2) {
    let common = []; // מערך לשמירת המספרים המשותפים ללא כפילויות

    // לולאה ראשונה - עוברת על המערך הראשון
    for (let i = 0; i < arr1.length; i++) {
        // לולאה שנייה - מחפשת את הערך בתוך המערך השני
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) { // אם המספר קיים בשני המערכים
                
                // בדיקה אם הערך כבר קיים במערך 'common' ללא includes
                let exists = false;
                for (let k = 0; k < common.length; k++) {
                    if (common[k] === arr1[i]) {
                        exists = true;
                        break;
                    }
                }

                // אם המספר לא נמצא במערך 'common', נוסיף אותו
                if (!exists) {
                    common.push(arr1[i]);
                }
                break; // יוצאים מהלולאה הפנימית ברגע שמצאנו התאמה
            }
        }
    }

    return common; // מחזירים את המערך המסונן
}

//  בדיקות
console.log(findCommonValues([1, 2, 1, 2, 1], [2, 2, 2, 1, 3, 1, 2])); // [1, 2]
console.log(findCommonValues([4, 5, 6], [6, 7, 8, 5])); // [5, 6]
console.log(findCommonValues([10, 20, 30], [40, 50, 60])); // []
console.log(findCommonValues([1, 1, 1], [1, 1, 1, 2])); // [1]


//question3
function average(array) { 
    if (array.length === 0) return 0; 
    const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0); 
    return sum / array.length; 
} 
 

const num = [1, 2, 3, 4, 5]; 
const avg = average(num); 
console.log(avg); 

// question 4

//איך נוכל להשתמש בפופ מכייון שפופ
//  מסיר רק את האיבר 
// האחרון במערך האם יש דרך להתשמש בו?



// arrow function:
// question 1:

let func = (longChack) =>{
    return longChack.length > 5;
}

console.log(func("hello"))
console.log(func("hello fizz"))
console.log(func("hello fizzfiz"))
console.log(func("ho"))

// question2
let checkFirstLast = (arr) => {
    return arr.length > 0 && arr[0]=== arr[arr.length -1];

}
console.log(checkFirstLast([2,3,45,2]))
console.log(checkFirstLast([2,3,45,4]))
console.log(checkFirstLast([255,3,454,255]))


// question3
let upperCase = (arr) => {
let str = arr[0];
let lastLetter = str[str.length - 1];
    return lastLetter === lastLetter.toUpperCase();
}

console.log(upperCase(["assaF"]))
console.log(upperCase(["assaF"]))
console.log(upperCase(["assad"]))
console.log(upperCase(["assaA"]))
console.log(upperCase(["assaF"]))
console.log(upperCase(["assaF"]))
console.log(upperCase(["assaF"]))


//Map/forEach
//question1:
// לא עדיף להשתמש בfilter?
 const numbers1 = [12, 25, 30, 17, 9, 18, 22, 27]
 const newNumbers = numbers1.filter(num => num %3 ===0);
 console.log(newNumbers);


//  question2:
let arr = ["A", "D", "a", 'S', "d", "a", "A", "S",]
let newArr = arr.map((item)=>{
    if(item===item.toUpperCase() ){
        return 'U'
    }
    return 'O';
})
console.log (newArr);


// question3
let abc = ['a','b','c','d','e','f']

let abcIndex = abc.map((item, index) =>{
    return index % 2 === 0 ? index : item
});
console.log(abcIndex)

// filter
// question 4:
let ages = [10,20,22,23,14,45,2]
let newAges = ages.filter ((num) =>
(num > 18));
console.log(newAges);

// question5:
let numnum = [2,4,1,2,7,2,8]
let newNumnum = numnum.filter((num,index)=>
(index !=3))

console.log (newNumnum)

//spread
//question 6

const names = ['assaf','avi','moshe'];
let newNames = [...names,'eli','ilan'];

console.log(newNames)

let nn = ['assaf','lior','shimi'];
let nnn = ['meir','shalom'];
let moreNnn = [...nn,...nnn];
console.log(moreNnn)