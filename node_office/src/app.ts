import createReport from 'docx-templates';
import fs from 'fs';


const template = fs.readFileSync('ALETemplate.docx');

const bufferAux = 
    await createReport({
        template,
        data: {
            ALEName: 'ale from node',
            ALESurname: 'fuuuuu',
        }
    });

fs.writeFileSync('my-report.docx', buffer);
