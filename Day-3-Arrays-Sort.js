function getSecondLargest(nums) {
    // Complete the function
    nums = nums.sort((a, b)=> b - a);
    console.log(nums)
    for (let i = 0; i < nums.length; i++) {
       if(nums[i] !== nums[i+1]){
           
           return nums[i+1]
       }
        
    }
    
}

getSecondLargest([2, 3, 6, 6, 5])