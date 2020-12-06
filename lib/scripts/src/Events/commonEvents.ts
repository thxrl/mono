import { Channel }       from './Channel/Channel';
import { SimpleChannel } from './Channel/SimpleChannel';

class AuthState {

}

class B {
}

class Route {
    pathname : string;
    search : string;
}

export const bookingInitEvent        = new Channel<B>( B, 'booking-init' );
export const bookingItemAddedEvent   = new Channel<B>( B, 'booking-item-added' );
export const bookingItemRemovedEvent = new Channel<B>( B, 'booking-item-removed' );
export const checkoutStartedEvent    = new Channel<B>( B, 'checkout-started' );
export const checkoutFinishedEvent   = new Channel<B>( B, 'checkout-finished' )

export const loginEvent  = new Channel<AuthState>( AuthState, 'login' );
export const logoutEvent = new SimpleChannel( 'logout' );

export const routeChangeEvent = new Channel<Route>( Route, 'route-change' );
