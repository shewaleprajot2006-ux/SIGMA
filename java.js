let arr=[1,23,4,5];
let max_value=arr.reduce((max,el){
    if(max<el){
        return el;
    }else{
        return max;
    }
})
console.log(max_value);                                                                                                                                                                                                                                 