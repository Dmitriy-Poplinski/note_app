import { Fragment } from "react";
import { Form } from "../components/From";
import { Notes } from "../components/Notes";

export function Home() {
    const notes = new Array(3)
        .fill('')
        .map((_, i)=> ({id: i, title: `Note ${i + 1}`}))
    return (
        <Fragment>
            <Form />
            <hr />
            <Notes notes={notes}/>
        </Fragment>
    )
}