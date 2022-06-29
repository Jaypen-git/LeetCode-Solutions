let nums = [1,2,3,1];

var containsDuplicate = function(nums) {
    let hashset = new Set();
    for (let i = 0; i < nums.length; i++){
        if (hashset.has(nums[i])){
            return true;
        }
        hashset.add(nums[i]);
    }
    return false;
};