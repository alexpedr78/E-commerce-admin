import List from "../../assets/Components/List/List";
import Form from "../../assets/Components/Form/Form-create";
import "./Home-Page.css";

function HomePage(props) {
  return (
    <div>
      <div className="search">
        <input
          className="inputSearch"
          type="text"
          value={props.searchString}
          placeholder="Search by Title"
          onChange={(event) => props.setSearchString(event.target.value)}
        />
      </div>
      <div>
        <button onClick={() => props.showCreate()}>create</button>
      </div>
      <div className="formContainer">
        {props.showCreateBanner ? <Form setProduct={props.setProduct} /> : null}
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
