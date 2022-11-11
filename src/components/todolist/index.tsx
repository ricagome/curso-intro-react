import react from "react";
import Table from "react-bootstrap/Table";

function TodoList(props: { children: string | number | boolean | react.ReactElement<any, string | react.JSXElementConstructor<any>> | react.ReactFragment | react.ReactPortal | null | undefined; }){
    return(
        <section>
            <Table striped>
                <tbody>
                <tr>
                    <td>{props.children}</td>
                </tr>
                </tbody>
            </Table>
        </section>
    );
}

export { TodoList };