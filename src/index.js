
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if(arguments.length == 0){
        return [];
    }

    let modifiedMatrix = matrix.map((item, index) => {
        if(index % 2 != 0){
            return item.reverse();
        } else{
            return item;
        }
    });
    let res = [];
    for(let i = 0; i < modifiedMatrix.length; i++){
        for (let j = 0; j < modifiedMatrix[i].length; j++){
            res.push(modifiedMatrix[i][j]);
        }
    }
    return res;
}
