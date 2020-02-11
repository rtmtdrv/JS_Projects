function makeSearch(){
    document.forms[1 + document.myForm.searchSelect.selectedIndex].elements[0].value = document.myForm.searchText.value;

    document.forms[1 + document.myForm.searchSelect.selectedIndex].submit();
  }  
