import { plainToClass } from "class-transformer";
import { ClassType }    from 'class-transformer/ClassTransformer';

export class ChannelSubscriber<P> {
    
    private readonly _handler : ( event : CustomEvent<P> ) => void;
    
    constructor(
        private eventName : string,
        private payloadModel : ClassType<P>,
        handler : ( payload : P ) => void ) {
        
        this._handler = ( event : Event ) => {
            const detail  = ChannelSubscriber.extractDetail( event );
            const payload = plainToClass<P, {}>( this.payloadModel, detail );
            handler( payload );
        };
        
        this._handler.bind( this );
        
        window.addEventListener( this.eventName, this._handler as EventListener );
    }
    
    public stop() {
        window.removeEventListener( this.eventName, this._handler as EventListener );
    }
    
    private static extractDetail( event : Event ) : Object {
        const detail = ( event as CustomEvent ).detail || {};
        const isObj  = ( detail instanceof Object && !( detail instanceof Array ) );
        if ( isObj ) {
            return detail;
        }
        throw new Error( 'Event detail must be an object and can not be an array!' );
    }
    
}
