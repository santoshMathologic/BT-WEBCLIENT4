Excel.run(function (context) {
    const sheetName = 'Sheet1';
    const rangeAddress = 'A1:B2';
    const myRange = context.workbook.worksheets.getItem(sheetName).getRange(rangeAddress);

    myRange.load(['address', 'format/*', 'format/fill', 'entireRow']);

    return context.sync()
        .then(function () {
            console.log(myRange.address);              // ok
            console.log(myRange.format.wrapText);      // ok
            console.log(myRange.format.fill.color);    // ok
            //console.log (myRange.format.font.color);  // not ok as it was not loaded
        });
}).then(function () {
    console.log('done');
}).catch(function (error) {
    console.log('Error: ' + error);
    if (error instanceof OfficeExtension.Error) {
        console.log('Debug info: ' + JSON.stringify(error.debugInfo));
    }
});