// Program takes names of signed up people and people who they want to sit by and generates a seating chart based on those arguments

// Variables representing the four tables as empty arrays which will be filled later by the function

$(document).ready(function () {

    var table1 = [];
    var table2 = [];
    var table3 = [];
    var table4 = [];

    var data = [{
            name: "",
            pref: "",
            table: ""
        },
        {
            name: "",
            pref: "",
            table: ""
        },
        {
            name: "",
            pref: "",
            table: ""
        },
        {
            name: "",
            pref: "",
            table: ""
        },
        {
            name: "",
            pref: "",
            table: ""
        },
        {
            name: "",
            pref: "",
            table: ""
        },
        {
            name: "",
            pref: "",
            table: ""
        },
        {
            name: "",
            pref: "",
            table: ""
        },
        {
            name: "",
            pref: "",
            table: ""
        },
        {
            name: "",
            pref: "",
            table: ""
        },
        {
            name: "",
            pref: "",
            table: ""
        },
        {
            name: "",
            pref: "",
            table: ""
        },
        {
            name: "",
            pref: "",
            table: ""
        },
        {
            name: "",
            pref: "",
            table: ""
        },
        {
            name: "",
            pref: "",
            table: ""
        },
        {
            name: "",
            pref: "",
            table: ""
        },
        {
            name: "",
            pref: "",
            table: ""
        },
        {
            name: "",
            pref: "",
            table: ""
        },
        {
            name: "",
            pref: "",
            table: ""
        },
        {
            name: "",
            pref: "",
            table: ""
        },
        {
            name: "",
            pref: "",
            table: ""
        },
        {
            name: "",
            pref: "",
            table: ""
        },
        {
            name: "",
            pref: "",
            table: ""
        },
        {
            name: "",
            pref: "",
            table: ""
        },
    ];

    // Function which takes the people they want to sit by as parameters and uses that to randomly create a seating chart

    function seat() {
        // Key the persons by name and add some extra properties
        const hash = data.reduce((acc, person, i) =>
            acc.set(person.name, Object.assign(person, {
                id: i,
                group: null
            })), new Map);
        const groups = [];
        const free = new Set(hash.values());
        while (free.size) {
            const group = new Set();
            let person = free.values().next().value; // first in Set
            // Add chain of preferrences to same group
            while (person && person.group === null) {
                free.delete(person);
                group.add(person);
                person.group = group;
                person = hash.get(person.pref);
            }
            if (person && person.group !== group) { // merge groups
                group.forEach(p => {
                    p.group = person.group;
                    p.group.add(p);
                });
            } else {
                groups.push(group); // add group
            }
        }
        const counts = [6, 6, 6, 6];
        groups.sort((a, b) => b.size - a.size) // descending size
            .forEach(group => {
                let table = counts.findIndex(count => count >= group.size);
                if (table === -1) {
                    alert('No solution possible');
                    return;
                }
                counts[table] -= group.size;
                // Assign table (table1, table2, table3 or table4)
                group.forEach(person => person.table = 'table' + (table + 1));
            });
    }




    // A series of variable assignments so that an unordered list can be edited with JS in the HTML

    var htable1 = document.getElementById('t1');
    var htable11 = document.getElementById('t11');
    var htable111 = document.getElementById('t111');
    var htable1111 = document.getElementById('t1111');
    var htable11111 = document.getElementById('t11111');
    var htable111111 = document.getElementById('t111111');

    var htable2 = document.getElementById('t2');
    var htable22 = document.getElementById('t22');
    var htable222 = document.getElementById('t222');
    var htable2222 = document.getElementById('t2222');
    var htable22222 = document.getElementById('t22222');
    var htable222222 = document.getElementById('t222222');

    var htable3 = document.getElementById('t3');
    var htable33 = document.getElementById('t33');
    var htable333 = document.getElementById('t333');
    var htable3333 = document.getElementById('t3333');
    var htable33333 = document.getElementById('t33333');
    var htable333333 = document.getElementById('t333333');

    var htable4 = document.getElementById('t4');
    var htable44 = document.getElementById('t44');
    var htable444 = document.getElementById('t444');
    var htable4444 = document.getElementById('t4444');
    var htable44444 = document.getElementById('t44444');
    var htable444444 = document.getElementById('t444444');

    // Function which changes the HTML based on the table arrays

    function changeHTML() {
        htable1.innerHTML = table1[0];
        htable11.innerHTML = table1[1];
        htable111.innerHTML = table1[2];
        htable1111.innerHTML = table1[3];
        htable11111.innerHTML = table1[4];
        htable111111.innerHTML = table1[5];

        htable2.innerHTML = table2[0];
        htable22.innerHTML = table2[1];
        htable222.innerHTML = table2[2];
        htable2222.innerHTML = table2[3];
        htable22222.innerHTML = table2[4];
        htable222222.innerHTML = table2[5];

        htable3.innerHTML = table3[0];
        htable33.innerHTML = table3[1];
        htable333.innerHTML = table3[2];
        htable3333.innerHTML = table3[3];
        htable33333.innerHTML = table3[4];
        htable333333.innerHTML = table3[5];

        htable4.innerHTML = table4[0];
        htable44.innerHTML = table4[1];
        htable444.innerHTML = table4[2];
        htable4444.innerHTML = table4[3];
        htable44444.innerHTML = table4[4];
        htable444444.innerHTML = table4[5];
    }

    function namesdefine() {
        data[0].name = document.getElementById('nameone').value;
        data[1].name = document.getElementById('nametwo').value;
        data[2].name = document.getElementById('namethree').value;
        data[3].name = document.getElementById('namefour').value;
        data[4].name = document.getElementById('namefive').value;
        data[5].name = document.getElementById('namesix').value;
        data[6].name = document.getElementById('nameseven').value;
        data[7].name = document.getElementById('nameeight').value;
        data[8].name = document.getElementById('namenine').value;
        data[9].name = document.getElementById('nameten').value;
        data[10].name = document.getElementById('nameeleven').value;
        data[11].name = document.getElementById('nametwelve').value;
        data[12].name = document.getElementById('namethirteen').value;
        data[13].name = document.getElementById('namefourteen').value;
        data[14].name = document.getElementById('namefifthteen').value;
        data[15].name = document.getElementById('namesixteen').value;
        data[16].name = document.getElementById('nameseventeen').value;
        data[17].name = document.getElementById('nameeighteen').value;
        data[18].name = document.getElementById('namenineteen').value;
        data[19].name = document.getElementById('nametwenty').value;
        data[20].name = document.getElementById('nametwentyone').value;
        data[21].name = document.getElementById('nametwentytwo').value;
        data[22].name = document.getElementById('nametwentythree').value;
        data[23].name = document.getElementById('nametwentyfour').value;
    }

    function prefsdefine() {
        data[0].pref = document.getElementById('prefone').value;
        data[1].pref = document.getElementById('preftwo').value;
        data[2].pref = document.getElementById('prefthree').value;
        data[3].pref = document.getElementById('preffour').value;
        data[4].pref = document.getElementById('preffive').value;
        data[5].pref = document.getElementById('prefsix').value;
        data[6].pref = document.getElementById('prefseven').value;
        data[7].pref = document.getElementById('prefeight').value;
        data[8].pref = document.getElementById('prefnine').value;
        data[9].pref = document.getElementById('preften').value;
        data[10].pref = document.getElementById('prefeleven').value;
        data[11].pref = document.getElementById('preftwelve').value;
        data[12].pref = document.getElementById('prefthirteen').value;
        data[13].pref = document.getElementById('preffourteen').value;
        data[14].pref = document.getElementById('preffifthteen').value;
        data[15].pref = document.getElementById('prefsixteen').value;
        data[16].pref = document.getElementById('prefseventeen').value;
        data[17].pref = document.getElementById('prefeightteen').value;
        data[18].pref = document.getElementById('prefnineteen').value;
        data[19].pref = document.getElementById('preftwenty').value;
        data[20].pref = document.getElementById('preftwentyone').value;
        data[21].pref = document.getElementById('preftwentytwo').value;
        data[22].pref = document.getElementById('preftwentythree').value;
        data[23].pref = document.getElementById('preftwentyfour').value;

    }

    function tabledefine() {
        for (var i = 0; i < data.length; i++) {
            if (data[i].table == "table1") {
                table1.push(data[i].name);
            } else if (data[i].table == "table2") {
                table2.push(data[i].name);
            } else if (data[i].table == "table3") {
                table3.push(data[i].name);
            } else if (data[i].table == "table4") {
                table4.push(data[i].name);
            }
        }
    }

    // Gets the HTML ID 'sbm' which is a Submit button in the form and calls the seat function with the HTML class 'a' as an argument which are the preferences. It also runs the changeHTML function which is referenced above.
    document.getElementById('sbm').addEventListener('click', function (e) {
        e.preventDefault();
        namesdefine();
        prefsdefine();
        seat();
        tabledefine();
        changeHTML();
    });
});