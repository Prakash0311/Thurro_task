function findArray() {
    // Get selected values from the dropdowns
    let size = parseInt(document.getElementById('arrId').value);
    let stNum = parseInt(document.getElementById('arrId1').value);
    let endNum = parseInt(document.getElementById('arrId2').value);

    let arr = [];
    for (let i = 0; i < size; i++) {
        let num = Math.floor(Math.random() * (endNum - stNum + 1)) + stNum;
        arr.push(num);
    }
    console.log(arr)
}