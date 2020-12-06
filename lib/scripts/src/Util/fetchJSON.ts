import axios from 'axios';

export async function fetchJSON( url : string ) : Promise<JSON> {
    
    let jsonString = null;
    try {
        
        const response = await axios.request( {
            url,
            method  : "GET",
            headers : {
                "Content-Type" : "application/json;charset=UTF-8"
            }
        } );
        
        jsonString = response.data;
    } catch ( e ) {
        console.error( e );
        throw new Error( "Could not fetch JSON from url." );
    }
    
    let json = null;
    try {
        json = JSON.parse( JSON.stringify( jsonString ) );
    } catch ( e ) {
        console.error( jsonString );
        console.error( e );
        throw new Error( "Could parse fetched JSON." );
    }
    
    return json;
    
}
