export default function LowercaseAndHyphenize(str:string) {
    const lowercaseStr = str.toLowerCase();
    const hyphenizedStr = lowercaseStr.replace(/ /g, '-');
    return hyphenizedStr;
  }
  