const translate = require('./piglatin');


test('Coding Bootcamp should translate into odingcay ootcampbay', () => {
    expect(translate('Coding Bootcamp')).toBe('odingcay ootcampbay')
});

test('LivingSocial Chicago should translate into ivingSociallay hicagocay', () => {
    expect(translate('LivingSocial Chicago')).toBe('ivingSociallay hicagocay')
});

test('Alderman Augusto should translate into aldermanway augustoway', () => {
    expect(translate('Alderman Augusto')).toBe('aldermanway augustoway')
});

test('Apple Pay should translate into Appleway aypay', () => {
    expect(translate('Apple Pay')).toBe('appleway aypay')
});