// Rearrange Array such that even index elements are smaller and odd index elemets are greater
// input = [6, 4, 2, 1, 8, 3]
// output = [4, 6, 1, 8, 2, 3]

const rearrangeElements = (arr) => {
    let temp;

    for (let i = 0; i < arr.length; i ++) {
        if (i % 2 == 0  && arr[i] >= arr[i + 1]) {
            temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
        }

        if (i % 2 != 0 && arr[i] <= arr[i + 1]) {
            emp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
        }
    }

    console.log("After re-arranging: ", arr);
}



let arr = [6, 4, 2, 1, 8, 3];
console.log("Before arranging : ", arr);
rearrangeElements(arr);