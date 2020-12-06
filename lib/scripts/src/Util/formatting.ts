export function formatPrice(
    amount : number,       // 1234.23
    currencyCode : string, // EUR | CAD | ...
    locale : string        // fr-CA | de-DE | en-US | ...
) {
    return (new Intl.NumberFormat( locale, {
        style    : 'currency',
        currency : currencyCode,
    } )).format( amount );
}

// Wut? Intl.NumberFormat ???
// https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat

