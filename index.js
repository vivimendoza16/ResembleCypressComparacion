const compareImages = require('resemblejs/compareImages');
const fs = require("mz/fs");

async function getDiff(){
    const options = {
        output: {
            errorColor: {
                red: 255,
                green: 0,
                blue: 255
            },
            errorType: 'flat',
            largeImageThreshold: 1200,
            useCrossOrigin: false,
            outputDiff: true
        },
        output1: {
            errorColor: {
                red: 255,
                green: 0,
                blue: 255
            },
            errorType: 'flat',
            largeImageThreshold: 1200,
            useCrossOrigin: false,
            outputDiff: true
        },
        output2: {
            errorColor: {
                red: 255,
                green: 0,
                blue: 255
            },
            errorType: 'flat',
            largeImageThreshold: 1200,
            useCrossOrigin: false,
            outputDiff: true
        },
        scaleToSameSize: true,
        ignore: ['less'],
    };

    // The parameters can be Node Buffers
    // data is the same as usual with an additional getBuffer() function
    const data = await compareImages(
        await fs.readFile('../../Taller2/Parte1/cypress/screenshots/screen11prueba1.png'),
        await fs.readFile('../../Taller2/Parte1/cypress/screenshots/screen21prueba1.png'),
        options
    );
    const data1 = await compareImages(
        await fs.readFile('../../Taller2/Parte1/cypress/screenshots/screen11prueba2.png'),
        await fs.readFile('../../Taller2/Parte1/cypress/screenshots/screen21prueba2.png'),
        options
    );    
    const data2 = await compareImages(
        await fs.readFile('../../Taller2/Parte1/cypress/screenshots/screen11prueba3.png'),
        await fs.readFile('../../Taller2/Parte1/cypress/screenshots/screen21prueba3.png'),
        options
    );

    var json = JSON.stringify(data);
    fs.writeFile('data.json', json);
    var json1 = JSON.stringify(data1);
    fs.writeFile('data1.json', json1);
    var json2 = JSON.stringify(data2);
    fs.writeFile('data2.json', json2);


    await fs.writeFile('./output.png', data.getBuffer());
    await fs.writeFile('./output1.png', data1.getBuffer());
    await fs.writeFile('./output2.png', data2.getBuffer());
}

getDiff();