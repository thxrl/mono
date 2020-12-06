// requires https://www.npmjs.com/package/babel-plugin-transform-builtin-extend

export class ExtendableError extends Error {
    constructor( message?: string ) {
        super( message );
        this.name = this.constructor.name;
        if ( typeof Error.captureStackTrace === 'function' ) {
            Error.captureStackTrace( this, this.constructor );
        } else {
            this.stack = (new Error( message )).stack;
        }
    }
}

