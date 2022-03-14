const data = {
    nodes: [{ id: 'Income' }, { id: 'Bill' }, { id: 'Food' }, { id: 'Travel' }, { id: 'Going Out' }, { id: 'Misc' }, { id: 'Savings' }, { id: 'Sex' }],
    links: [
        {
            source: 'Income',
            target: 'Bill',
            value: 50,
        },
        {
            source: 'Income',
            target: 'Food',
            value: 10,
        },
        {
            source: 'Income',
            target: 'Travel',
            value: 7,
        },
        {
            source: 'Income',
            target: 'Going Out',
            value: 8,
        },
        {
            source: 'Income',
            target: 'Misc',
            value: 20,
        },
        {
            source: 'Income',
            target: 'Savings',
            value: 45,
        },
        {
            source: 'Bill',
            target: 'Sex',
            value: 25,
        },
    ],
};

export { data };
