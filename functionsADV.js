/*---- THIS ---*/

/*metodi utili*/
funzioneChiamata.call(oggettoThis, par1, par2, par3);
funzioneChiamata.apply(oggettoThis,[par1, par2];)

function saluta(nomePersona) {
	console.log("Buongiorno " + nomePersona());
}
saluta(persona.nomeCognome.bind(persona));


/*--- ARROW FUNCTION ---*/

let funzione = (par1, par2) => par1 + par 2; /* più parametri */
let funzione = par => par*2; /* un parametro */
let funzione = () => 'Hello world'; /* Nessun parametro */
let funzione = () => {return "Hello world"}; /** Con comando*/