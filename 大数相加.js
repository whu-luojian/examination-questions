function add(a, b) {
  let carry = 0
  let result = []
  let len = Math.max(a.length, b.length)
  let i = len
  while (i--) {
    let sum = (+a[i - len + a.length]||0) + (+b[i - len + b.length]||0) + carry;
    carry = parseInt(sum / 10);
    result.unshift(sum % 10);
  }
  if (carry) result.unshift(carry);
  return result.join('');
}
console.log(add("12", "223"))


