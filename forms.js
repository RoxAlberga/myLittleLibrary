/* -----ACCESSO AL FORM-----*/


document.forms[0] /*tramite index*/
document.forms.length /*per capire quanti forms ci sono*/
getElementById('id')
getElementByName('name') /*restituisce un array, perché name può essere sempre utilizzato*/

/*-----ACCESSO AGLI ELEMENTI---*/


let form = document.forms.nomeForm;
let controllo = form.elements.nomeControllo  /*usare ELEMENTS per prendere un controllo, 
poi puoi usare tranquillamente value per vederlo, come sopra*/
console.log(controllo.value);

/** se abbiamo un radio Button, quindi STESSO NOME, basta usare l'indice. Name ci restituisce un array, quindi */
console.log(controllo[0]);

/* --- ACCESSO AI VALORI INSERITI ---*/

document.forms.nomeForm.nomeControllo.value /* accesso più o meno a tutti i valori del form, 
versione che più estesa di così si muore, se il valore è una STRINGA*/
document.forms.nomeForm.nomeRadio.checked = true; /*per il radio button*/


/* --- METODI DROPDOWN MENU --*/


select.options /** TUTTE LE OPZIONI */
select.value /** IL VALORE DELL'OPZIONE SELEZIONATA - value HTML non TESTO*/
select.selectedIndex /*l'indice dell'opzione selezionata*/

/* se vogliamo settarne una, per esempio come default, sono tre i metodi*/
/*uno*/
let selOption = document.forms.nomeForm.nomeControlloSelect.options[2];
selOption.selected = true;

/*due*/
document.forms.nomeForm.nomeControlloSelect.selectedIndex = 2;

/*tre*/
document.forms.nomeForm.nomeControlloSelect.value = 'nomevalue';

/*valore TESTUALE del dropdown menu*/


    let selIndex = document.forms.nomeForm.nomeControllo.selectedIndex; /*prende l'indice del valore selezionato*/
    let selItem; /*creo variabile per inserire nome valore*/
    if (selIndex > -1){
        selItem = document.forms.nomeForm.nomeControllo.options[selIndex];
        console.log(selItem.text);
    }

/* se dropdown prevede SELEZIONI MULTIPLE */

    let options = document.forms.nomeForm.nomeControllo.options; /*seleziono tutte le opzioni*/
    let selectedOptions = []; /*apro un array*/
    for (let i=0, i=options.length, i++){
        if (options[i].selected){
        selectedOptions.push(options[i].value);
        }
    }

    /* oppure*/

    let selected = Array.from(select.options)
    .filter(option => option.selected)
    .map(option => option.value);

    alert(selected);




/*--- IMPOSTARE VALORE DI DEFAULT --- * /

/* radio button */
getElementById('id').checked = true;

/*dropdown*/
document.forms.nomeForm.nomeControllo.selectedIndex = 0;

/*---VALIDAZIONE---*/
                    DA CONTROLLARE


