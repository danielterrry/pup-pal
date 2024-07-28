const Categories = () => {
  const data = [
    {
      id: 1,
      title: 'Category 1',
    },
    {
      id: 2,
      title: 'Category 2',
    },
    {
      id: 3,
      title: 'Category 3',
    },
  ];

  const selections = data.map((item) => <div>active category {item.id}</div>);

  return selections;
};

export default Categories;
