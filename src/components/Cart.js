
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { DLT, ADD, REMOVE } from '../redux/actions/action'
import "./cart.css"

const Cart = () => {
    const getdata = useSelector((state) => state.cartreducer.carts);
    console.log("getdata", getdata)



    const history = useNavigate();

    const dispatch = useDispatch();

    const send = (e) => {
        dispatch(ADD(e));
    }

    const dlt = (id) => {
        dispatch(DLT(id));
        history("/cart");
    }

    const remove = (item) => {
        dispatch(REMOVE(item))
    }

    return (
        <>
            <h2>My Cart</h2>
            <div className="card-grid">
                {getdata.length < 1 ? history("/") : getdata.map((prod) => {
                    return (
                        
                            <div key={prod.id} >
                                <div key={prod.id} className="card card-shadow">
                                    <div className="card-header card-image">
                                        <img src={prod.image} />
                                    </div>
                                    <div className="card-body">
                                        {prod.title}
                                    </div>
                                    <div className="card-footer">
                                        <button className="btn"  onClick={prod.qnty <= 1 ? () => dlt(prod.id) : () => remove(prod)}>-</button>
                                        <span>{prod.qnty}</span>
                                        <button className="btn" onClick={() => send(prod)}>+</button>
                                        <button className="btn" onClick={() => dlt(prod.id)}>Delete</button>
                                        

                                    </div>
                                </div>


                             </div>
                            

                            )
                })}
                        </div>
        </>
            );
}
            export default Cart;


