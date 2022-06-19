import React, { useEffect } from 'react'

function Menu(props) {

    useEffect(() => {
        const allLi = document
            .querySelector(".MenuContainer ul")
            .querySelectorAll("li");

        function changeMenuActive(x) {
            allLi.forEach(li => li.classList.remove("active"));
            this.classList.add("active")
        }

        allLi.forEach(li => li.addEventListener('click', changeMenuActive))
    }, [])

    const { title, menuObject } = props;

    let menuList = menuObject.map((m) => <li key={m.id}>
        {" "}
        <a href='#' key={m.id}>
            <i>{m.icon}</i>
            <span>{m.name}</span>
        </a>
    </li>)

    return (
        <div className='MenuContainer'>
            <p className='title'>{title}</p>
            <ul>{menuList}</ul>
        </div>

    )
}

export { Menu }