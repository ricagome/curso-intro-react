import react, { MouseEventHandler, ReactNode } from "react";
import './TodoItem.css';

function TodoItem(props: {
    onDelete: MouseEventHandler<HTMLSpanElement> | undefined;
    onComplete: MouseEventHandler<HTMLSpanElement> | undefined;
    completed: boolean; text: ReactNode
}) {
    const onComplete = () => {
        alert('Ya completaste el todo ' + props.text);
      };
      const onDelete = () => {
        alert('Borraste el todo ' + props.text);
      };
    return (
        <li className="TodoItem">
            <span
                className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
                onClick={props.onComplete}
            >
                √
            </span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                {props.text}
            </p>
            <span
                className="Icon Icon-delete"
                onClick={props.onDelete}
            >
                X
            </span>
        </li>
    );
}

//{ text: ReactNode; completed:boolean}

export { TodoItem };