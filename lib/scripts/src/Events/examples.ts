import { Channel }       from './Channel/Channel';
import { SimpleChannel } from './Channel/SimpleChannel';


// define a data model you want to broadcast

class DataModel {
    constructor(
        private firstName : string,
        private lastName : string
    ) {}
    
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }
}

// create a event channel using the data model

const eventChannel = new Channel<DataModel>( DataModel );

// create the data and use the channel to broadcast it

const eventData = new DataModel( 'Max', 'Muster' );

// start listening

eventChannel.subscribe( eventData => console.log( 'Welcome ' + eventData.fullName ) );

// stop listening

const subscription = eventChannel.subscribe( e => console.log( e ) );
subscription.stop();

// broadcast

eventChannel.broadcast( eventData );

// need to send an event without data?

const simpleEvent = new SimpleChannel();
simpleEvent.subscribe( () => console.log( 'Something happened!' ) );
simpleEvent.broadcast();

// console logging (is done by default, but you can prefix event names)

const s1 = new SimpleChannel();                      // will use "event-g125gx6xq" as event name
const s2 = new SimpleChannel( 'my-simple-channel' ); // will use "my-simple-channel-g125gx6xq" as event name
