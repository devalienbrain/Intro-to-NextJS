const DynamicItemById = ({ params }) => {
  console.log(params);
  return (
    <div>
      <h3>This is the item id: {params.itemid}</h3>
    </div>
  );
};

export default DynamicItemById;
