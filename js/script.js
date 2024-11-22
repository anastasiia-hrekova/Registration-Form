const scriptURL = 'https://script.google.com/macros/s/AKfycbznv3CdzfyhPJLZyglTk6jj3rXH8Dtv_cOMKY_3T8KGC1OwiOuXD3jpTDpMkZVelenWbw/exec'


const form = document.forms['form']


form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => alert("Дані успішно відправлені"))
        .then(() => { window.location.reload(); })
        .catch(error => console.error('Error!', error.message))
})


// КОД В GoogleScript



// const sheetName = 'dataTable'
// const scriptProp = PropertiesService.getScriptProperties()


// function intialSetup () {
//   const activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet()
//   scriptProp.setProperty('key', activeSpreadsheet.getId())
// }


// function doPost (e) {

//    if (!e || !e.parameter) {
//     return ContentService
//       .createTextOutput(JSON.stringify({ 'result': 'error', 'error': 'No parameters in request' }))
//       .setMimeType(ContentService.MimeType.JSON);
//   }

//   const lock = LockService.getScriptLock()
//   lock.tryLock(30000)


//   try {
//     Logger.log(e.parameter);
//     const doc = SpreadsheetApp.openById(scriptProp.getProperty('key'))
//     const sheet = doc.getSheetByName(sheetName)


//     const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0]
//     const nextRow = sheet.getLastRow() + 1


//    function formatDate(date) {
//       const day = String(date.getDate()).padStart(2, '0');
//       const month = String(date.getMonth() + 1).padStart(2, '1'); 
//       const year = date.getFullYear();
//       return `${day}-${month}-${year}`;
//     }

//     const newRow = headers.map(function(header) {
//       if (header === 'Date') {
//         // Используем форматированную дату
//         return formatDate(new Date());
//       } else {
//         return e.parameter[header];
//       }
//     });


//     sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow])


//     return ContentService
//       .createTextOutput(JSON.stringify({ 'result': 'success', 'row': nextRow }))
//       .setMimeType(ContentService.MimeType.JSON)
//   }


//   catch (e) {
//     Logger.log(e); 
//     return ContentService
//       .createTextOutput(JSON.stringify({ 'result': 'error', 'error': e }))
//       .setMimeType(ContentService.MimeType.JSON)
//   }


//   finally {
//     lock.releaseLock()
//   }
// }
