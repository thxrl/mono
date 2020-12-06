import base64url        from 'base64url';
import { plainToClass } from 'class-transformer';
import { ClassType }    from 'class-transformer/ClassTransformer';

export function encodeBase64( str : string ) : string {
    return base64url.encode( str );
}

export function decodeBase64( str : string ) : string {
    return base64url.decode( str );
}

export function encodeObjectBase64( object : any ) : string {
    return base64url.encode( JSON.stringify( object ) );
}

export function decodeObjectBase64<T>( t : ClassType<T>, str : string ) : T {
    return plainToClass( t, JSON.parse( base64url.decode( str ) ) );
}
