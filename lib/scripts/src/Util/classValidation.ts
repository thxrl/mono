import {validate} from 'class-validator';
import {classToPlain, plainToClass} from 'class-transformer';
import {ValidationError} from 'class-validator/validation/ValidationError';
import {ValidatorOptions} from 'class-validator/validation/ValidatorOptions';
import {ClassType} from 'class-transformer/ClassTransformer';

export {ClassType} from 'class-transformer/ClassTransformer';
export {ValidationError} from 'class-validator/validation/ValidationError';

export function getInstance<T, V>(cls: ClassType<T>, plain: V): T {
    const instance = plainToClass<T, V>(cls, plain, {enableImplicitConversion: true});

    return instance;
}

export async function getValidatedData<T, V>(cls: ClassType<T>, plain: V, options?: ValidatorOptions): Promise<{}> {
    const instance = await getValidatedInstance<T, V>(cls, plain, options || {});
    const p = classToPlain<T>(instance);

    return p;
}

export async function getValidatedInstance<T, V>(cls: ClassType<T>, plain: V, options?: ValidatorOptions): Promise<T> {
    const instance = plainToClass<T, V>(cls, plain, {enableImplicitConversion: true});
    const errors = await validate(instance, options || {});
    if (errors.length > 0) {
        console.log('Validation Errors: ', errors);
        console.log('Validation Data: ', plain);
        throw new Error('Validation failed.');
    }

    return instance;
}

export async function getValidationErrors<T, V>(cls: ClassType<T>, plain: V, options?: ValidatorOptions): Promise<ValidationError[]> {
    const instance = plainToClass<T, V>(cls, plain);
    const errors: ValidationError[] = await validate(instance, options || {});

    return errors;
}
