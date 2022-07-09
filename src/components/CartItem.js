import './cartItem.css'

function CartItem({id, image, title, price, quantity=0}) {

  return (
    <div className="cartItem">
      <img className="cartItem__image" src={image} alt='item'/>

      <div className="cartItem__info">
        <p className="cartItem__title">{title}</p>
        <p className="cartItem__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='cartItem__incrDec'>
          <button>-</button>
          <p>{quantity}</p>
          <button>+</button>
        </div>
        <button className='cartItem__removeButton'>Remove</button> 
      </div>
    </div>
  )
}

export default CartItem