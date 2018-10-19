function art () {
	for (var i = 0; i < 5; i++){
		console.log(i)
    }
    console.log(i)
}
art()

console.log(i)
/*------------------------------
0
1
2
3
4
5 // from outside the loop
error Uncaught ReferenceError: i is not defined
// var's declaration(ONLY AND ONLY declaration not definition) is hoisted atop the function(LEXICALLLY SCOPED) BUT ITS NOT AVAILABLE OUTSIDE OF THE FUNCTION
// VAR also allows for OVERSHADOWING i.e. multiple time declaration with var is allowed but not with let and const(BLOCK SCOPED)
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/

function art () {
	for (let i = 0; i < 5; i++){
		console.log(i)
    }
    cosole.log(i) // this gives an error
}
art()
/*------------------------------
0
1
2
3
4
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/


