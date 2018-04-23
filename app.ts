let a: Array<string> = ["cdab", "dcba", "plate"];
let b: Array<string> = ["abcd","abcd", "ptale"];
let isTwin: boolean;
let output: Array<string> = [];
let swap = (first: Array<string>, second: Array<string>) =>{
    for(let i=0; i<first.length; i++){
        let operation = performOperations(first[i], second[i]);
        if(typeof operation == 'boolean'){
            if(operation)output.push('yes');
        }else{
            first[i] = operation;
            console.log(first[i]);
            if(performOperations(second[i], first[i]) == true){
                output.push('yes');
            }else{
                output.push('no');
            }
        }
    }
    return output;
};
let performOperations = (first:string, second:string) : boolean | string => {
    if(first.length == second.length){
        let firstArr: Array<string> = first.split('');
        let tempEven: string = '';
        let indexEven: number = 0;
        let tempOdd: string = '';
        let indexOdd: number = 0;
        isTwin = false;
        let swapValue: string = firstArr.join('');
        for(let k=0; k<firstArr.length; k++){
            if(k%2==0){
                if(k==0){
                    tempEven = firstArr[0];
                    indexEven = 0;
                }else{
                if(firstArr[k] < tempEven){
                    tempEven = firstArr[k];
                    firstArr[k] = firstArr[indexEven];
                    firstArr[indexEven] = tempEven;
                    indexEven = k;
                }
            }
            }else{
                if(k==1){
                    tempOdd = firstArr[1];
                    indexOdd = 1;
                }else{
                if(firstArr[k] < tempOdd){
                    tempOdd = firstArr[k];
                    firstArr[k] = firstArr[indexOdd];
                    firstArr[indexOdd] = tempOdd;
                    indexOdd = k;
                }
            }
            }
            swapValue = firstArr.join("");
            if(swapValue == second){
                isTwin = true;
                break;
            }
            }
            if(isTwin == false){
                return swapValue;
            }
    }
    return isTwin;
}
console.log(swap(a,b));