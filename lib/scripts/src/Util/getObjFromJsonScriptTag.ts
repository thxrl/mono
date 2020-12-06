
export function getObjFromJsonScriptTag( el : HTMLScriptElement ) : object | void {
    
    if ( !el ) {
        throw new Error( 'Could not parse JSON from nothing.' );
    }
    
    try {
        return JSON.parse( el.innerHTML );
    } catch ( e ) {
        console.error( el, el.innerHTML );
        throw new Error( 'Could not parse JSON from an elements innerHTML.' );
    }
}
