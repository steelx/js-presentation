var animals = [
	{id: 'animals', category: 'null'},
	{id: 'mammals', category: 'animals'},
	{id: 'dogs', category: 'mammals'},
	{id: 'cats', category: 'mammals'},
	{id: 'bulldog', category: 'dogs'},
	{id: 'pitbull', category: 'dogs'},
	{id: 'kitty', category: 'cats'}
];

function makeTree(list, category){
    var node = {};

    list.filter(item => item.category === category)
        .forEach(item => node[item.id] = makeTree(list, item.id));

    return node;
}

console.log( JSON.stringify(makeTree(animals, 'null'), null, 2) );