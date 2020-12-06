import { ClassType }    from "class-transformer/ClassTransformer";
import { plainToClass } from "class-transformer";

export function removeUndefinedProps<T>( obj : any ) : Partial<T> {
    Object.keys( obj ).forEach( key => {
        if ( obj[ key ] === undefined ) {
            delete obj[ key ];
        }
    } );
    return obj;
}

export function removeTrailingSlashes( url : string ) {
    return url.replace( /\/+$/, "" ); //Removes one or more trailing slashes from URL
}

export function removeDuplicateForwardSlashes( url : string ) {
    return url.replace(/([^:]\/)\/+/g, "$1"); // remove duplicate forward slashes
}

// attention in js use encodeURI() for the url, but encodeURIComponent() for params!
// see https://stackoverflow.com/questions/75980/when-are-you-supposed-to-use-escape-instead-of-encodeuri-encodeuricomponent/3608791#3608791

export function encodeUrlParam( str : string ) : string {
    return encodeURIComponent( str );
}

export function decodeUrlParam( str : string ) : string {
    return decodeURIComponent( str );
}

export function encodeObjectasUrlParam( object : any ) : string {
    return encodeURIComponent( JSON.stringify( object ) );
}

export function decodeObjectasUrlParam<T>( t : ClassType<T>, str : string ) : T {
    return plainToClass( t, JSON.parse( decodeURIComponent( str ) ) );
}

export function decodeAnyAsUrlParam( str : string ) {
    return JSON.parse( decodeURIComponent( str ) );
}
