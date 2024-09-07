import _ from 'underscore'



export const tiposDeCartas = [ 'Hola', 'Este', 'Es']; 

// Esta función crea un nuevo deck

/**
 * 
 * @param {Array<String>} tiposDeCarta Ejemplo:  ['C','D','H','S']
 * @param {Array<String>} tiposEespeciales Ejemplo: ['A','J','Q','K']
 * @returns {Array<String>} Retorna un nuevo deck de cartas
 */


export const crearDeck = ( tiposDeCarta,tiposEespeciales) => {
    
    if( !tiposDeCarta || tiposDeCarta.length === 0) 
        throw new Error( 'TiposDeCarta es obligatorio como un arreglo de strings');
    if( !tiposEespeciales || tiposEespeciales.length === 0) 
        throw new Error( 'TiposEspeciales es obligatorio como un arreglo de strings');
    

    let deck = [];
    
    for( let i = 2; i <= 10; i++ ) {
        
        
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }
    
    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEespeciales ) {
            deck.push( esp + tipo);
        }
    }
    
    deck = _.shuffle( deck );
 
    return deck;
}
