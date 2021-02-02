import React from "react";
import style from './headerlist.module.css'

function HeaderList(props) {
    let newPost = React.createRef();

    let addPost = (props) => {
        let text = newPost.current.value;
        return text
    }

    return (
        <div className={style.first_block}>
            <span className={style.span}>Task:</span>
            <input ref={newPost} className={style.input}></input>
            <button onClick={addPost} className={style.button}>+Add+
            </button>
        </div>
    )

}

export default HeaderList