const uniqueIdStore : { [ key : string ] : string } = {};

export function createUniqueId( prefix : string = '', suffix : string = '' ) : string {
    let id : string;
    do {
        id = prefix + Math.random().toString( 36 ).substr( 2, 9 ) + suffix;
    } while ( document.getElementById( id ) || typeof uniqueIdStore[ id ] !== 'undefined' );
    uniqueIdStore[ id ] = id;
    return id;
}
