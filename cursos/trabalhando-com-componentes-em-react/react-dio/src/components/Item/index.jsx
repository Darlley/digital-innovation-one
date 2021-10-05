//<Item itemValue="Item 1">  {props.itemValue}

const Item = ({children}) => {
    return (
        <li className="bg-dark"><a href="#" className="list-group-item list-group-item-action bg-dark text-light">{children}</a></li>
    )
}

export default Item;