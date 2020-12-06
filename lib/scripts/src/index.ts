import 'reflect-metadata'; // needed for decorators to work - do not include twice

// Events

export { loginEvent }              from './Events/commonEvents';
export { logoutEvent }             from './Events/commonEvents';
export { bookingItemRemovedEvent } from './Events/commonEvents';
export { bookingItemAddedEvent }   from './Events/commonEvents';
export { bookingInitEvent }        from './Events/commonEvents';
export { routeChangeEvent }        from './Events/commonEvents';
export { Channel }                 from './Events/Channel/Channel';
export { SimpleChannel }           from './Events/Channel/SimpleChannel';

export { formatPrice }                   from './Util/formatting';
export { clone }                         from './Util/clone';
export { getObjFromJsonScriptTag }       from './Util/getObjFromJsonScriptTag';
export { deepMerge }                     from './Util/deepMerge';
export { createUniqueId }                from './Util/id';
export { slugify }                       from './Util/slugify';
export { removeDuplicateForwardSlashes } from './Util/url';
export { removeTrailingSlashes }         from './Util/url';
export { removeUndefinedProps }          from './Util/url';
export { encodeObjectasUrlParam }        from './Util/url';
export { decodeAnyAsUrlParam }           from './Util/url';
export { conditionalStyles }             from './Util/conditionalStyles';
export { pause }                         from './Util/pause';
export { fetchJSON }                     from './Util/fetchJSON';
