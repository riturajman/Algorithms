// TODO: write `findAll(..)`
function findAll(x, y){
    let temp = []
    for(let v of y){
		if(Object.is(x, v)){
			// console.log(v + "line 6")
			
				temp.push(v)

			
		}
		else if(x == null && v == null) {
			// console.log(v + "line 10")
			temp.push(v)
		}
		else if(typeof x === 'boolean'){
			if(x === v){
				// console.log(v + "line 15")
				temp.push(v)
			}
		}
		else if(typeof x == 'string' && x.trim() != '' && typeof v == 'number' && !Object.is(v, -0)){
			// console.log(v + "line 17")
			if( x == v){
				temp.push(v)
			}
		}
		else if(typeof x == 'number' && !Object.is(x,-0) && !Object.is(x,NaN) && !Object.is(x,Infinity) && !Object.is(x,-Infinity)
		     && typeof v == 'string' && v.trim() != ''){
			// console.log(v + "line 24")
			if(x == v){
				temp.push(v)

			}
		}
		
		}
		return temp
    }
    


// tests:
var myObj = { a: 2 };

var values = [
	null, undefined, -0, 0, 13, 42, NaN, -Infinity, Infinity,
	"", "0", "42", "42hello", "true", "NaN", true, false, myObj
];

// console.log(findAll(false,values))
// console.log(findAll(-0,values))
console.log(setsMatch(findAll(null,values),[null,undefined]) === true);
console.log(setsMatch(findAll(undefined,values),[null,undefined]) === true);
console.log(setsMatch(findAll(0,values),[0,"0"]) === true);
console.log(setsMatch(findAll(-0,values),[-0]) === true);
console.log(setsMatch(findAll(13,values),[13]) === true);
console.log(setsMatch(findAll(42,values),[42,"42"]) === true);
console.log(setsMatch(findAll(NaN,values),[NaN]) === true);
console.log(setsMatch(findAll(-Infinity,values),[-Infinity]) === true);
console.log(setsMatch(findAll(Infinity,values),[Infinity]) === true);
console.log(setsMatch(findAll("",values),[""]) === true);
console.log(setsMatch(findAll("0",values),[0,"0"]) === true);
console.log(setsMatch(findAll("42",values),[42,"42"]) === true);
console.log(setsMatch(findAll("42hello",values),["42hello"]) === true);
console.log(setsMatch(findAll("true",values),["true"]) === true);
console.log(setsMatch(findAll(true,values),[true]) === true);
console.log(setsMatch(findAll(false,values),[false]) === true);
console.log(setsMatch(findAll(myObj,values),[myObj]) === true);

console.log(setsMatch(findAll(null,values),[null,0]) === false);
console.log(setsMatch(findAll(undefined,values),[NaN,0]) === false);
console.log(setsMatch(findAll(0,values),[0,-0]) === false);
console.log(setsMatch(findAll(42,values),[42,"42hello"]) === false);
console.log(setsMatch(findAll(25,values),[25]) === false);
console.log(setsMatch(findAll(Infinity,values),[Infinity,-Infinity]) === false);
console.log(setsMatch(findAll("",values),["",0]) === false);
console.log(setsMatch(findAll("false",values),[false]) === false);
console.log(setsMatch(findAll(true,values),[true,"true"]) === false);
console.log(setsMatch(findAll(true,values),[true,1]) === false);
console.log(setsMatch(findAll(false,values),[false,0]) === false);

// ***************************

function setsMatch(arr1,arr2) {
	if (Array.isArray(arr1) && Array.isArray(arr2) && arr1.length == arr2.length) {
		for (let v of arr1) {
			if (!arr2.includes(v)) return false;
		}
		return true;
	}
	return false;
}