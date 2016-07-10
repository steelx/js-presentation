var person  = {
    name: 'ajinkya-borade'
};

var filters = {
    'noslug': x => x.replace('-', ' '),
    'uppercase': x => x.toUpperCase()
};

var input    = 'name | noslug | uppercase'; // AJINKYA BORADE
var sections = input.split('|').map(x => x.trim()); // [name, noslug, uppercase]

var ref      = person[sections[0]];

var output   = sections
    .slice(1)
    .reduce((prev, next) => {
        if (filters[next]) {
            return filters[next].call(null, prev);
        }
        return prev;
    }, ref);

console.log(output);