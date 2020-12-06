import { ClassType as Model } from 'class-transformer/ClassTransformer';
import { classToPlain }       from 'class-transformer';
import { plainToClass }       from 'class-transformer';
import deepmerge              from 'deepmerge' // TODO replace this?

export function deepMerge<C>(
    model : Model<C>,
    target : C,
    partial : Partial<C> | any ) : C {
    
    const plainTarget  = classToPlain<C>( target );
    const plainPartial = classToPlain<Partial<C>>( partial );
    const plain        = deepmerge( plainTarget, plainPartial ) as C; // TODO casting == bad
    
    return plainToClass<C, {}>( model as Model<C>, plain );
}
