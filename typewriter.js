const sentence = "hello there from lighthouse labs\n";
let seconds = 1;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, 1000 * (seconds / 10));
  seconds++;
}
