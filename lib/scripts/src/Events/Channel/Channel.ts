import { classToPlain } from 'class-transformer';
import { ClassType }    from 'class-transformer/ClassTransformer';

import { createUniqueId }    from '../../Util/id';
import { ChannelSubscriber } from './ChannelSubscriber';

export class Channel<Payload> {
    
    private readonly _payloadModel : ClassType<Payload>;
    private readonly _eventName : string;
    
    constructor(
        payloadModel : ClassType<Payload>,
        eventPrefix ? : string ) {
        this._payloadModel = payloadModel;
        this._eventName    = createUniqueId( eventPrefix ? eventPrefix + '-' : 'event-' );
        console.log( `Channel "${ this._eventName }" created.` );
    }
    
    public subscribe( handler : ( payload : Payload ) => void ) : ChannelSubscriber<Payload> {
        return new ChannelSubscriber<Payload>( this._eventName, this._payloadModel, handler );
    }
    
    public broadcast( payload : Payload ) {
        const detail = classToPlain<Payload>( payload );
        console.log( `Channel "${ this._eventName }" broadcasted.`, detail );
        window.dispatchEvent(
            new CustomEvent( this._eventName, { detail } )
        );
    }
}
