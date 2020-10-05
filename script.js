//fonctionMin
function Min(a,b)
{
    return Math.min(a,b);
}
let resultMin=Min(15,15);
console.log('le minimum est'+resultMin); 


//fonctionMax
function Max(a,b)
{
    return Math.max(a,b);
}
let resultMax=Max(30,15);
console.log('le maximum est'+resultMax);

//fonctionreduc
let num[2,14];
function reduce(numbers,fn)
|{
    let result=numbers[0];
    for(let i=1;i<numbers.length;i++)
    {
        result=fn(result,numbers[i]);
    }
    return result;
}