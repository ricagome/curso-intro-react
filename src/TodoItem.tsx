import react from "react";

function TodoItem(props: { text: string | number | boolean | react.ReactFragment | react.ReactPortal | react.ReactElement<any, string | react.JSXElementConstructor<any>> | null | undefined; }) {
    return (
        <li>
            <span>C</span>
                <p>{props.text}</p>
            <span>X</span>
        </li>
    );
}

export { TodoItem };