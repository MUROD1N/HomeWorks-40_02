function generateNumbers() {
    const maxNum = 45;
    const totalNums = 6;
    const nums = [];

    while (nums.length < totalNums) {
        const randomNumber = Math.floor(Math.random() * maxNum) + 1;
        if (nums.indexOf(randomNumber) === -1) {
            nums.push(randomNumber);
        }
    }

    nums.sort((a, b) => a - b);

    const circles = document.querySelectorAll('.number__circle');
    circles.forEach((circle, index) => {
        circle.textContent = nums[index];
    });
}
