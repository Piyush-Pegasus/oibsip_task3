const calculateTemp = () => {
    const inputTemp = document.getElementById('temp').value;

    const tempSelected = document.getElementById('temp_in');
    const valueTemp = temp_in.options[tempSelected.selectedIndex].value;
    const temp = document.getElementById('temp_to');
    const value = temp_to.options[temp.selectedIndex].value;

    
    const celToFah = (cel) => {
        let fahrenheit = ((cel * 9 / 5) + 32).toFixed(4);
        return fahrenheit;
    }

    
    const fahToCel = (fah) => {
        let celsius = ((fah - 32) * 5 / 9).toFixed(4);
        return celsius;
    }
    const fahToKel = (fah) => {
        let celsius = ((fah - 32) * 5 / 9);
        let kelvin= (celsius + 273.15).toFixed(4);
        return kelvin;
    }
    const celToKel = (x) => {
        let kelvin= x*1;
        kelvin=(kelvin+273.15).toFixed(4);
        return kelvin;
    }
    const kelToCel = (kel) => {
        let celsius =(kel-273.15).toFixed(4);
        return celsius;
    }
    const kelToFah = (kel) => {
        let celsius = (kel-273.15);
        let fahrenheit = ((celsius * 9 / 5) + 32).toFixed(4);
        
        return fahrenheit;
    }



    if (valueTemp == 'cel' && value=='fah') {
        document.getElementById("output").innerHTML = celToFah(inputTemp);
    }
    else if (valueTemp == 'fah' && value=='cel'){
        document.getElementById("output").innerHTML = fahToCel(inputTemp) ;
    }
    else if (valueTemp == 'kel' && value=='cel'){
        document.getElementById("output").innerHTML = kelToCel(inputTemp) ;
    }
    else if (valueTemp == 'kel' && value=='fah'){
        document.getElementById("output").innerHTML = kelToFah(inputTemp) ;
    }
    else if (valueTemp == 'fah' && value=='kel'){
        document.getElementById("output").innerHTML = fahToKel(inputTemp) ;
    }
    else if (valueTemp == value){
        document.getElementById("output").innerHTML = "" ;
    }
    else if (valueTemp == 'cel' && value== 'kel'){
        document.getElementById("output").innerHTML = celToKel(inputTemp) ;
    }
    
    
}