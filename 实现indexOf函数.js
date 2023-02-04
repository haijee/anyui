// 完全不用 API
var getIndexOf = function (s, t) {
    let n = s.length;
    let m = t.length;
    if (!n || !m || n < m) return -1;
    for (let i = 0; i < n; i++) {
        let j = 0;
        let k = i;
        if (s[k] === t[j]) {
            k++; j++;
            while (k < n && j < m) {
                if (s[k] !== t[j]) break;
                else {
                    k++; j++;
                }
            }
            // 找到即可返回
            if (j === m) return i;
        }
    }
    return -1;
}

// 测试
console.log(getIndexOf("Hello World", "rl"))
