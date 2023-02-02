let num = [1, 2, 3, 4, 5, 6, 7, 8]

function d_bt_2(num) {
    return num % 2
}

const otpt=num.filter(d_bt_2)
console.log(otpt)


const otpt2 = num.filter((num)=>{ return num>4})
console.log(otpt2)