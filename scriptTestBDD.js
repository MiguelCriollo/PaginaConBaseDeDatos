var fileInput = document.getElementById("fileInput");

fileInput.addEventListener("change", function (event) {
  var file = event.target.files[0];
  var reader = new FileReader();

  reader.onload = function (event) {
    var data = new Uint8Array(event.target.result);
    var workbook = XLSX.read(data, { type: "array" });

    workbook.SheetNames.forEach(function (sheetName) {
      var XLRowObject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
      console.log(XLRowObject);
    });
  };

  reader.readAsArrayBuffer(file);
});