export default (arr) => {
    // 用数组实现堆栈结构，pop、push
    let result = []
    // 保存上轮分数
    let pre1
    // 保存上上轮分数
    let pre2
    // 遍历数组，遍历的目的是处理得分
    arr.forEach(item => {
        switch(item) {
            case 'C': 
              if(arr.length) {
                result.pop()
              }
              break
            case 'D':
              if(arr.length) {
                // 从堆栈中将上一轮数据pop，目的是要放到pre1变量中
                pre1 = result.pop()
                // 上一轮数据已经被pop了，一定要注意将这个数据重新push到堆栈中
                result.push(pre1, pre1 * 2)
              }
              break
            case '+':
              if(arr.length) {
                pre1 = result.pop()
                pre2 = result.pop()
                result.push(pre2, pre1, pre2 + pre1)
              }
              break
              default:
                    result.push(item * 1)
        }
    })
    return result.reduce((total, num) => { return total + num })
}