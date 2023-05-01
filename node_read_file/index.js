import chalk from 'chalk'
import csv from 'csvtojson'
import Participant from './entity/participant.js'


function testing() {
    
    let participants = [];
    console.log(chalk.red(`Hello\nusing ${process.version} node`));
    const converter=csv()
        .fromFile('./Data.csv')
        .then((json)=>
            {
                let currentPartipant;
                json.forEach((row) => {
                    currentPartipant = new Participant();
                    Object.assign(currentPartipant, row);
                    participants.push(currentPartipant);
                });
        })
        .then(() => {
            participants.forEach((people) => {
                console.log(chalk.red(people.Name));
            });
        });
}


testing();