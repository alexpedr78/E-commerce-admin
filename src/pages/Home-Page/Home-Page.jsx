import List from "../../assets/Components/List/List";
import Form from "../../assets/Components/Form/Form-create";
import "./Home-Page.css";
function HomePage(props) {
  console.log(props);
  return (
    <div>
      <div className="formContainer">
        <Form setProduct={props.setProduct} />
      </div>
      <List
        handleEdit={props.handleEdit}
        handleDelete={props.handleDelete}
        product={props.product}
      />
    </div>
  );
}

export default HomePage;
