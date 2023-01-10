const data = [
    {
        name: "Shakh",
        salary: 2000,
        expenses: 1500,
        date: "May 4, 2022",
    },
    {
        name: "Adina",
        salary: 2000,
        expenses: 1500,
        date: "May 4, 2022",
    },
    {
        name: "Ulan",
        salary: 1000,
        expenses: 800,
        date: "April 7, 2022",
    },
    {
        name: "mikhail",
        salary: 1500,
        expenses: 1100,
        date: "June 7, 2022",
    },
    {
        name: "Islam",
        salary: 1200,
        expenses: 700,
        date: "September 22, 2022",
    },
    {
        name: "albert",
        salary: 900,
        expenses: 1000,
        date: "May 21, 2022",
    },
];

const sortSalary = [...data].sort((a, b) => {
    return a.salary - b.salary;
});
// sortSalary()

const sortData = [...data].sort((a, b) => {
    const firstDate = new Date(a.date);
    const secondDate = new Date(b.date);
    return firstDate - secondDate;
});
// console.log(sortData)

const sortAlph = [...data].sort((a, b) => {
    const nameFirst = a.name.toLowerCase();
    const nameSecond = b.name.toLowerCase();

    if (nameFirst < nameSecond) {
        return -1;
    }
    if (nameFirst > nameSecond) {
        return 1;
    }
    return 0;
});
// console.log(sortAlph);

const sortExpenses = [...data].sort((a, b) => {
    return b.expenses - a.expenses;
});
// console.log(data)
// console.log(sortExpenses)

//получаем все ключи из data
let keys = data.reduce(
    (container, obj) => [...container, ...Object.keys(obj)],
    []
);
//берём из полученных только уникальные ключи
let uniqueKeys = [...new Set(keys)];
// console.log(uniqueKeys);

// суём ключики в LS
localStorage.setItem("uniqueKeys", JSON.stringify(uniqueKeys));

//парсим ключи из LS
const selectData = JSON.parse(localStorage.getItem("uniqueKeys"));
console.log(selectData);

//пилим отрисовку элементов
const rendSort = () => {
    const output = document.createElement("div");
    output.classList.add("output");

    const mySelect = document.createElement("select");
    mySelect.classList.add("my__select");

    const rndSlctSrtRow = document.createElement("div");
    rndSlctSrtRow.classList.add("rndSlctSrtRow");

    let tracksName = document.createElement("div");
    let tracksSalary = document.createElement("div");
    let tracksExpenses = document.createElement("div");
    let tracksDate = document.createElement("div");

    tracksName.classList.add("tracksName");
    tracksSalary.classList.add("tracksSalary");
    tracksExpenses.classList.add("tracksExpenses");
    tracksDate.classList.add("tracksDate");

    rndSlctSrtRow.append(tracksName, tracksSalary, tracksExpenses, tracksDate);
    output.append(mySelect);
    document.body.append(output, rndSlctSrtRow);

    let countName = sortAlph.length;
    let countSalary = sortAlph.length;
    let countExpenses = sortExpenses.length;
    let countData = sortData.length;

    //рисуем сортировку по name
    const rndSlctSrtName = () => {
        let innerName = "";
        let innerSalary = "";
        let innerExpenses = "";
        let innerDate = "";
        // const nameEl = el.name;
        for (let i = 0; i < countName; i++) {
            let name = sortAlph[i].name.toUpperCase();
            let salary = sortAlph[i].salary;
            let expenses = sortAlph[i].expenses;
            let date = sortAlph[i].date;

            innerName += `<h4> ${name} </h4>`;
            innerSalary += `<p> ${salary} </p>`;
            innerExpenses += `<p> ${expenses} </p>`;
            innerDate += `<p> ${date} </p>`;

            document.querySelector(".tracksName").innerHTML = innerName;
            document.querySelector(".tracksSalary").innerHTML = innerSalary;
            document.querySelector(".tracksExpenses").innerHTML = innerExpenses;
            document.querySelector(".tracksDate").innerHTML = innerDate;
        }
    };

    //рисуем сортировку по salary
    const rndSlctSrtSalary = () => {
        let innerName = "";
        let innerSalary = "";
        let innerExpenses = "";
        let innerDate = "";

        for (let i = 0; i < countSalary; i++) {
            let name = sortSalary[i].name.toUpperCase();
            let salary = sortSalary[i].salary;
            let expenses = sortSalary[i].expenses;
            let date = sortSalary[i].date;

            innerName += `<h4> ${name} </h4>`;
            innerSalary += `<p> ${salary} </p>`;
            innerExpenses += `<p> ${expenses} </p>`;
            innerDate += `<p> ${date} </p>`;

            document.querySelector(".tracksName").innerHTML = innerName;
            document.querySelector(".tracksSalary").innerHTML = innerSalary;
            document.querySelector(".tracksExpenses").innerHTML = innerExpenses;
            document.querySelector(".tracksDate").innerHTML = innerDate;
        }
    };

    //рисуем сортировку по expenses
    const rndSlctSrtExpenses = () => {
        let innerName = "";
        let innerSalary = "";
        let innerExpenses = "";
        let innerDate = "";

        for (let i = 0; i < countExpenses; i++) {
            let name = sortExpenses[i].name.toUpperCase();
            let salary = sortExpenses[i].salary;
            let expenses = sortExpenses[i].expenses;
            let date = sortExpenses[i].date;

            innerName += `<h4> ${name} </h4>`;
            innerSalary += `<p> ${salary} </p>`;
            innerExpenses += `<p> ${expenses} </p>`;
            innerDate += `<p> ${date} </p>`;

            document.querySelector(".tracksName").innerHTML = innerName;
            document.querySelector(".tracksSalary").innerHTML = innerSalary;
            document.querySelector(".tracksExpenses").innerHTML = innerExpenses;
            document.querySelector(".tracksDate").innerHTML = innerDate;
        }
    };

    //рисуем сортировку по date
    const rndSlctSrtDate = () => {
        let innerName = "";
        let innerSalary = "";
        let innerExpenses = "";
        let innerDate = "";

        for (let i = 0; i < countData; i++) {
            let name = sortData[i].name.toUpperCase();
            let salary = sortData[i].salary;
            let expenses = sortData[i].expenses;
            let date = sortData[i].date;

            innerName += `<h4> ${name} </h4>`;
            innerSalary += `<p> ${salary} </p>`;
            innerExpenses += `<p> ${expenses} </p>`;
            innerDate += `<p> ${date} </p>`;

            document.querySelector(".tracksName").innerHTML = innerName;
            document.querySelector(".tracksSalary").innerHTML = innerSalary;
            document.querySelector(".tracksExpenses").innerHTML = innerExpenses;
            document.querySelector(".tracksDate").innerHTML = innerDate;
        }
    };

    //пустая строка под опции селекта
    let selectHTML = "";

    //суём спарсенные из LS ключики в строку
    const fillSelectOption = () => {
        for (const key in selectData) {
            selectHTML += ` <option value="${selectData[key]}" >${selectData[key]}</option>`;
            // selectHTML += ` <option value="${key}" >${selectData[key]}</option>`;
        }
    };
    fillSelectOption();

    //кладём строку в опции селекта
    document.querySelector(".my__select").innerHTML = selectHTML;

    //чекаем в LS наличие сохранённого value
    let LoadCheck = localStorage.getItem("keyVal");

    //грузим из LS сохранённый value (при его наличии) или выводим по умолчанию date
    const LoadSelectValue = () => {
        if (LoadCheck === "name") {
            rndSlctSrtName();
        }
        if (LoadCheck === "salary") {
            rndSlctSrtSalary();
        }
        if (LoadCheck === "expenses") {
            rndSlctSrtExpenses();
        }
        if (LoadCheck === "date") {
            rndSlctSrtDate();
        }
        if (LoadCheck === null) {
            rndSlctSrtName();
        } 
    };

    //ставим выбранный пункт меню
    // const setUserOption = () => {
    let selectCheck = document.querySelector(".my__select");
    selectCheck.value = LoadSelectValue(selectCheck);
    // };

    //слушаем и сохраняем в LS измененния юзером меню селекта, заодно вызываем сортировку
    mySelect.addEventListener("change", () => {
        const SaveSelectValue = () => {
            localStorage.setItem("keyVal", mySelect.value);
        };
        SaveSelectValue();
        console.log(localStorage.getItem("keyVal"));

        //вызываем сортировку в зависимости от выбранного пункта
        if (mySelect.value === "name") {
            rndSlctSrtName();
        }
        if (mySelect.value === "salary") {
            rndSlctSrtSalary();
        }
        if (mySelect.value === "expenses") {
            rndSlctSrtExpenses();
        }
        if (mySelect.value === "date") {
            rndSlctSrtDate();
        }
    });
};
rendSort();
