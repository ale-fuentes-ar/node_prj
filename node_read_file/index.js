import chalk from 'chalk'
import csv from 'csvtojson'


function testing() {
    console.log(chalk.red(`Hello\nusing ${process.version} node`));
    const converter=csv()
        .fromFile('./Data.csv')
        .then((json)=>
            {
                console.log(json);
            });
}


testing();