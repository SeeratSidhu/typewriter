const sentence = "hello there from lighthouse labs";
let timer = 0;

const printLetter = (letter) => {
  setTimeout(() => {
    process.stdout.write(letter);
  }, timer);
  timer += 50;
}

for (const char of sentence) {
  printLetter(char);
}

setTimeout(() => {
  console.log("\n");
}, timer);
