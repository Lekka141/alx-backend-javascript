/** Prompt user for their name */
process.stdout.write('Welcome to Holberton School, what is your name?\n');

/** Handle readable events on stdin */
process.stdin.on('readable', () => {
  const chunk = process.stdin.read();
  
  if (chunk) {
    /** Trim input to remove extra newlines or spaces */
    const name = chunk.toString().trim();
    process.stdout.write(`Your name is: ${name}\n`);
  }
});

/** Handle end events on stdin */
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
