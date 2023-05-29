import { CartContext } from "~/Context/CartContext";
import {useContext} from 'react'

function Cart() {
    const { cartItems } = useContext(CartContext);
    return (
        <div class="container" style={{marginTop: '5rem'}}>
        <div class="wrapper wrapper-content animated fadeInRight">
            <div class="row">
                <div class="col-md-9">
                    <div class="ibox">
                        <div class="ibox-title">
                            <span class="pull-right">(<strong>5</strong>) items</span>
                            <h5>Items in your cart</h5>
                        </div>
                        {cartItems.map((cartItem) => (
                             <div>
                             {cartItem.data_moto.map((item) => (
                        <div class="ibox-content">
                            <div class="table-responsive">
                                <table class="table shoping-cart-table">
                                    <tbody>
                                    <tr>
                                        <td width="90">
                                            <div class="cart-product-imitation">
                                            </div>
                                        </td>
                                        <td class="desc">
                                            <h3>
                                            <a href="#" class="text-navy">
                                                {item.name}
                                            </a>
                                            </h3>
                                            <p class="small">
                                                {item.description}
                                            </p>
                                            <dl class="small m-b-none">
                                                <dt>{item.price}s</dt>
                                                <dd>A description list is perfect for defining terms.</dd>
                                            </dl>
        
                                            <div class="m-t-sm">
                                                <a href="#" class="text-muted"><i class="fa fa-gift"></i> Add gift package</a>
                                                |
                                                <a href="#" class="text-muted"><i class="fa fa-trash"></i> Remove item</a>
                                            </div>
                                        </td>
        
                                        <td>
                                            
                                            <s class="small text-muted">$230,00</s>
                                        </td>
                                        <td width="65">
                                            <input type="text" class="form-control" placeholder="1" />
                                        </td>
                                        <td>
                                            <h4>
                                                {item.price}
                                            </h4>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        ))
                    }
                    </div>
                    
                )
                )}
                        <div class="ibox-content">
                            <button class="btn btn-primary pull-right"><i class="fa fa fa-shopping-cart"></i> Checkout</button>
                            <button class="btn btn-white"><i class="fa fa-arrow-left"></i> Continue shopping</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="ibox">
                        <div class="ibox-title">
                            <h5>Cart Summary</h5>
                        </div>
                        <div class="ibox-content">
                            <span>
                                Total
                            </span>
                            <h2 class="font-bold">
                                $390,00
                            </h2>
            </div>
        </div>
        </div>
        </div>
        </div>
        </div>);
}

export default Cart;