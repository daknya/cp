if (k > 0 && k <= arr.length) {
    // Sort the array in ascending order
    arr.sort((a, b) => a - b);

    // Return the kth smallest element
    return arr[k - 1];
} else {
    // Handle the case when k is out of bounds
    return "Invalid value of k";
}