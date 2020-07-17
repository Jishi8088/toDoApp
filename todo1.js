var selectedRow = null

function onFormSubmit() {
 
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    
}

function readFormData() {
    var formData = {};
    formData["task"] = document.getElementById("task").value;
   
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("list").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.task;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = `<a onClick="onEdit(this)"><b>EDIT</b></i></a>
                       <a onClick="onDelete(this)"><b>DELETE</b></i></a>`;
    
   
}

function resetForm() {
    document.getElementById("task").value = "";
  
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("task").value = selectedRow.cells[0].innerHTML;
   
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.task;
    
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("list").deleteRow(row.rowIndex);
        resetForm();
    }
}
