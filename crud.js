//////////////// CRUD => Create, Read, Update, Delete ///////////////

let workers = [
  { id: 1, name: "Jim", year: 1990, country: "Canada", salary: 2500 },
  { id: 2, name: "Mark", year: 1988, country: "Australia", salary: 2800 },
  { id: 3, name: "Anton", year: 1996, country: "Russia", salary: 2400 },
  { id: 4, name: "Ahmed", year: 1995, country: "Turkey", salary: 2700 },
  { id: 5, name: "Maks", year: 1981, country: "Kirgiz", salary: 3000 },
  { id: 6, name: "Simon", year: 1987, country: "China", salary: 3200 },
  { id: 7, name: "Jahongir", year: 1983, country: "Uzbekistan", salary: 3100 },
  { id: 8, name: "Viktor", year: 1990, country: "Chile", salary: 2600 },
  { id: 9, name: "Diego", year: 1988, country: "Venesuela", salary: 2900 },
  { id: 10, name: "Jamas", year: 1989, country: "Fhilipin", salary: 3300 },
];

/////////////// Create ///////////////////

const addNewWorker = (worker) => {
  workers = [
    ...workers,
    {
      id: workers.length + 1,
      name: "Jonny",
      year: 1992,
      country: "Korea",
      salary: 3000,
    },
  ];
};

addNewWorker();

console.log(workers);

//////////// Read /////////////

workers.map(({ id, name, year, country, salary }) => {
  console.log(id, name, year, country, salary);
});

const sort = () => {
  return workers.sort((a, b) => a.year - b.year);
};
console.log(sort());

const sortingName = () => {
  return workers.sort((a, b) => a.name.localeCompare(b.name));
};
console.log(sortingName());

const sort = () => {
  return workers.sort((a, b) => a.salary - b.salary);
};
console.log(sort());

////////////// Update ////////////////

const toUpdate = (worker) => {
  let updated = workers.map((value) =>
    value.id === worker.id
      ? { ...value, [worker.key]: worker.value, status: "Manager" }
      : value
  );
  console.log(updated);
};

toUpdate({ id: 1, key: "country", value: "Spain" });

//////////// Dalete ////////////

const onDelete = (ids) => {
  let filter = workers.filter((value) => value.id !== ids);
  console.log(filter);
};

onDelete(3);
