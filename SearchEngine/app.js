function makeSearch(){
    document.forms[1 + document.myForm.searchSelect.selectedIndex].elements[0].value = document.myForm.searchText.value;

    document.forms[1 + document.myForm.searchSelect.selectedIndex].submit();



    // let searchEngine = document.getElementById("engineName").selectedIndex + 1;
    // document.getElementById("searchBox").value = document.myForm.searchText.value;
    // document.getElementById("engineName").selectedIndex = document.myForm.searchSelect.value;
    // document.forms[searchEngine].submit();
    console.log("search value: " + document.myForm.searchText.value);
    console.log("amount of forms: " + document.forms.length);
    console.log("selected index: " + document.getElementById("engineName").selectedIndex
    );
    console.log("selected index form: " + document.myForm.searchSelect.selectedIndex
    );

    console.log(document.forms[1 + document.myForm.searchSelect.selectedIndex]);

    // console.log(searchEngine);
    // console.log(document.forms[searchEngine]);
    
    




  }  





    // let formVariable = 1;
    // console.log(document.myForm.SearchText.value);
    
    // document.myForm.submit();
    // console.log(document.forms[1 + searchEngine]);
    // console.log(formValue);
    
    // console.log(searchValue);
    
    
    
    // document.forms[1 + searchEngine].submit();
        // let formValue = document.getElementById("myForm").value;
    // let searchValue = document.getElementById("searchBox").value