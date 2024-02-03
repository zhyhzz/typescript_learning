/*
 * @Descripttion: 
 * @Author: zuohy
 * @Date: 2024-01-27 16:37:57
 * @LastEditors: zuohy
 * @LastEditTime: 2024-01-27 16:43:03
 */
function getLength(args) {
    return args.length;
}

console.log(getLength("aaaaaa"));
console.log(getLength(["abc", "cba", "nba"]));

console.log(getLength(123));