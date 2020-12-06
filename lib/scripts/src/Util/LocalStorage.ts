import { classToPlain, plainToClass } from 'class-transformer';
import { ClassType }                  from 'class-transformer/ClassTransformer';
import Lockr                          from "lockr";

// Lockr.prefix = ConfigFactory.get().sessionStorage.prefix;

export class LocalStorage<T> {
    
    readonly type : ClassType<T>;
    readonly key : string;
    
    constructor( type : ClassType<T>, key : string ) {
        this.type = type;
        this.key  = key;
    }
    
    exists() : boolean {
        return Lockr.keys().includes( this.key );
    }
    
    get() : T {
        return plainToClass( this.type, Lockr.get<T>( this.key ) || {} );
    }
    
    set( instance : T ) {
        Lockr.set( this.key, classToPlain<T>( instance ) );
    }
    
    clear() {
        Lockr.rm( this.key );
    }
    
}
