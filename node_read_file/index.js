import Chalk from 'chalk';

function testing() {
    console.log(Chalk.red(`Hello\nusing ${process.version} node`));
}

testing();