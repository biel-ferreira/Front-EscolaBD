function MenuBar (props) {
    return (
        <ul>
            {props.items.map( d=> (
                <li
                    onClick={(e) => props.handleClick(d)}
                    className={d.active ? 'active' : ''}
                    key={d.label}
                    >
                        {d.label}
                    </li>
            ))}
        </ul>
    )
}

export default MenuBar;