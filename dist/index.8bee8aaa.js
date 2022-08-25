function main() {
    let name = "Mohamed";
    let age = 5;
    let married = false;
    let users = [
        "mohamed",
        "ahmed"
    ];
    let user = {
        id: 5,
        name: "Mohamed",
        age: 24
    };
    let allUsers = [
        {
            id: 0,
            name: "x"
        },
        {
            id: 1,
            name: "y",
            age: 15
        }, 
    ];
    const route = {
        name: "r",
        children: [
            {
                name: "x",
                children: []
            }, 
        ]
    };
    console.log(name, age, married, users, user, allUsers);
    function capitalizeName(name, age) {
        const f = name[0].toLocaleUpperCase();
        return f + name.slice(1).toLocaleLowerCase() + " age: " + age;
    }
    console.log(capitalizeName("mOHamed", 4));
    let nodes = [
        {
            id: 0,
            data: "test"
        },
        {
            id: 0,
            data: 5
        },
        {
            id: 0,
            data: false
        }, 
    ];
}
main();

//# sourceMappingURL=index.8bee8aaa.js.map
