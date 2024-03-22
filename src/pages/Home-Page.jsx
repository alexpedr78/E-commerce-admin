import List from "../assets/Components/List/List";
import Form from "../assets/Components/Form/Form-create";
function HomePage(props) {
  console.log(props);
  return (
    <div>
      <div>
        <Form setProduct={props.setProduct} />
      </div>
      <List handleDelete={props.handleDelete} product={props.product} />
    </div>
  );
}

export default HomePage;
