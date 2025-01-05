import chalk from "chalk";

// make console outputs visually appealing.
console.log(chalk.green('Success!'));
console.log(chalk.red('Error!'));
console.log(chalk.blue.bold('Info: ') + chalk.yellow('This is important.'));