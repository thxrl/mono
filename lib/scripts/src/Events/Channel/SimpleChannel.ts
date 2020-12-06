import { createUniqueId } from '../../Util/id';

export class SimpleChannel {
    
    private readonly _eventName : string;
    
    constructor( eventPrefix ? : string ) {
        this._eventName = createUniqueId( eventPrefix ? eventPrefix + '-' : 'event-' );
        console.log( `SimpleChannel "${ this._eventName }" created.` );
    }
    
    public subscribe( handler : () => void ) {
        const sub = {
            stop : () => window.removeEventListener( this._eventName, handler ),
        };
        window.addEventListener( this._eventName, handler )
        return sub;
    }
    
    public broadcast() {
        console.log( `SimpleChannel "${ this._eventName }" broadcasted.` );
        window.dispatchEvent( new CustomEvent( this._eventName ) );
    }
}
