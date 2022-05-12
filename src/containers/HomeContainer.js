//HomeContainer will used to connet redux from react
import Home from '../components/Home';
//Connect function from react-redux
import {connect} from 'react-redux';
//Fetching Addtocart function from the services folder/Actions foder/actions file
import { AddtoCart, RemoveCart} from '../services/Actions/actions';


const mapStateToProps = state =>({
    cartItem: state
});

const mapDispatchToProps = dispatch =>({
    addToCartHandler : (data) =>{dispatch(AddtoCart(data))},
    removeToCartHandler : (data) =>{dispatch(RemoveCart(data))}

})

export default connect(mapStateToProps, mapDispatchToProps)(Home)

// export default Home;