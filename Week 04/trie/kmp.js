function kmp(source, pattern){

    // 自重复
    let table = new Array(pattern.length).fill(0)
    // 块状作用域
    {
        let i = 1, j = 0
        while (i < pattern.length) {
            // 如果是存在
            if (pattern[i] === pattern[j]) {
                ++i, ++j;
                table[i] = j
            } else {
                if (j > 0)
                    j = table[j]
                else
                    ++i
            }
        }
    }

    // 自增, 查找是否存在公共字符串
    {
        let i=0,j=0
        while(i < source.length){
            if(pattern[j] === source[i]){
                ++i, ++j
            }else{
                if (j>0)
                    j = table[j]
                else
                    i++    
            }

            if(j === pattern.length) return true
        }

        return false
    }
    
    console.log(table, 'table');
    // abcdabce => [0, 0, 0, 0, 0, 1, 2, 3]
    // aabaaac  => [0, 0, 1, 0, 1, 2, 2]

   
}

console.log(kmp('abv', 'abv'))