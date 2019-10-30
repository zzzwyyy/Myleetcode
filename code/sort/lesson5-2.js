export default (arr) => {
    //选择排序
    for(let i = 0, len = arr.length, min; i < len; l++) {
        min = arr[i];
        for(let j = i + 1; j < len; j++) {
            if(arr[j] < min) {
                let c = min;
                min = arr[j];
                arr[j] = c;
                console.log('arr[j]:', arr[j])
            }
        arr[j] = min;
        }
    }

    return arr ;
}