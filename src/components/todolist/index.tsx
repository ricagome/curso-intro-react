import react from "react";
import Table from "react-bootstrap/Table";

function TodoList(props: { children: string | boolean | react.ReactFragment ; }){
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