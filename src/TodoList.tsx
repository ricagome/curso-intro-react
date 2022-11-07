import react from "react";

function TodoList(props: { children: string | number | boolean | react.ReactElement<any, string | react.JSXElementConstructor<any>> | react.ReactFragment | react.ReactPortal | null | undefined; }){
    return(
        <section>
            <ul>
                {props.children}
            </ul>
        </section>
    );
}

export { TodoList };