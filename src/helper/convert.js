class Convert {
  static binaryToDecimal(bin) {
    return bin.split('').reverse().reduce((total, value, index) => total += (2 ** index) * value, 0);
  }
}

export default Convert;
