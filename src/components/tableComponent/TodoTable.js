import {
    Table
    , TableBody
    , TableCell, TableContainer
    , TableHead,
    TableRow, Paper
} from "@material-ui/core";
import { Link } from "react-router-dom";

export default ({ todos }) => {
    return (
        <TableContainer>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Description</TableCell>
                        <TableCell>Responsible</TableCell>
                        <TableCell>Priority</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {todos.map(todo =>
                        <TableRow hover={true}>
                            <TableCell>{todo.desc}</TableCell>
                            <TableCell>{todo.responsible}</TableCell>
                            <TableCell>{todo.priority}</TableCell>
                            <TableCell><Link to={"/edit/" + todo._id}>Edit</Link></TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    )
}