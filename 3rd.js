function reverse(num) {
    let res=0;
    while(num != 0)
    {
        res = res * 10 + (num%10);
        num=Math.floor(num/10);
    }
    return res;
}

var number=149;
console.log(reverse(number));