import { Button, ButtonGroup, Typography } from "@material-ui/core"
import { useEffect, useState } from "react"
import axios from 'axios'
import { Link } from "react-router-dom";
import TodoTable from "../tableComponent/TodoTable";
import TodoGrid from "../tableComponent/TodoGrid";


const Todos = () => {
    const [todos, setTodos] = useState([]);
    useEffect(function () {
        axios.get('http://172.24.143.19:4000/todo/')
            .then(function (res) {
                setTodos(res.data)
            }).catch(function (err) {
                console.log(err)
            })
    }, [])

    return (
        <div>
            <Typography
                gutterBottom
                variant="h6"
            >
                Todos List
            </Typography>
            <ButtonGroup size="small" variant="text" color="primary" aria-label="text primary button group">
                <Button>Table</Button>
                <Button>GridTable</Button>
            </ButtonGroup>
            <div style={{ marginTop: "20px" }}>
                {/* <TodoTable todos={todos} /> */}
                <TodoGrid todos={todos} />
            </div>
        </div>
    )
}
export default Todos