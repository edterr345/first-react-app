
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";
import App from "../../App";

function Category() {
    return (

        <div className="row">
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Iluminación</h5>
                <p className="card-text">
                  Accede a los mejores productos de iluminación al mejor precio.
                </p>
                <Link to='/categorias/1' className="btn btn-primary">Ir a iluminación</Link>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Cables</h5>
                <p className="card-text">
                Compra el cable que necesites de la mayor calidad al mejor precio.
                </p>
                <Link to={'/categorias/2'} className="btn btn-primary">Ir a cables</Link>
              </div>
            </div>
          </div>
          <Switch>
          <Route path="/categorias/:id" children={<Child />} />
        </Switch>
        </div>
        
      );
    }

    function Child() {
        
        let { id } = useParams();
      
        return (
        <Route exact path="/">
        <App />
      </Route>);
      }


  
  
    export default Category;