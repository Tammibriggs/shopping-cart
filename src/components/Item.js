import './item.css'

function Item({id, title, image, price}) {

  return (
    <div className="item">
      <div className="item__info">
        <p className="item__title">{title}</p>
        <p className="item__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>
      <img
        src={image}
        alt="item"
      />
      <button>Add to Cart</button>
    </div>
  )
}

export default Item