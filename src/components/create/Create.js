import { Button, FormControl, FormControlLabel, FormHelperText, FormLabel, Input, InputLabel, makeStyles, Radio, RadioGroup, TextField, Typography } from "@material-ui/core"
import { mergeClasses } from "@material-ui/styles";
import axios from "axios";
import { useState } from "react";

const useStyle = makeStyles((theme) => ({
    root: {
        '& .MuiTypography-h6': {
            fontWeight: "600"
        }
    },
    form: {
        '& .MuiFormControl-root': {
            display: "flex",
            maxWidth: "450px",
            margin: "10px 0"
        },
        '& .MuiButton-root': {
            width: "150px",
            textTransform: "none"
        },
        '& .MuiFormLabel-root': {
            fontSize: "0.9em"
        },
        '& .MuiInputBase-input': {
            fontSize: "0.8em"
        },
        '& .MuiSvgIcon-root': {
            fontSize: "0.8em"
        },
        '& .MuiFormControlLabel-label': {
            fontSize: "0.8em"
        }
    },

}))

const Create = () => {
    const classes = useStyle()
    const [todo, setTodo] = useState({
        desc: "",
        responsible: "",
        priority: "",
        completed: false
    });
    const onChangeValue = (e) => {
        const { name, value } = e.target
        switch (name) {
            case 'desc':
                setTodo({ ...todo, desc: value })
                break;
            case 'res':
                setTodo({ ...todo, responsible: value })
                break
            case 'priority':
                setTodo({ ...todo, priority: value })
                break;
        }
    }
    const submitForm = (e) => {
        e.preventDefault()
        const newTodo = {
            desc: todo.desc,
            responsible: todo.responsible,
            priority: todo.priority,
            completed: false
        }
        axios.post('http://localhost:4000/todo/createTodo', newTodo)
            .then(function (res) {
                console.log(res.data)
            })
    }
    return (
        <div className={classes.root}>
            <Typography
                gutterBottom
                variant="h6"
            >
                Create New Todo
            </Typography>
            <form onSubmit={submitForm} className={classes.form}>
                <FormControl>
                    <TextField
                        value={todo.desc}
                        onChange={onChangeValue}
                        name="desc"
                        id="outlined-basic" label="Description :" variant="outlined" />
                </FormControl>
                <FormControl>
                    <TextField
                        value={todo.responsible}
                        onChange={onChangeValue}
                        name="res"
                        id="outlined-basic" label="Responsible : " variant="outlined" />
                </FormControl>
                <FormControl component="div">
                    <FormLabel component="legend" style={{ "margin": "10px 0" }}>Priority :</FormLabel>
                    <RadioGroup aria-label="priority" name="priority" value={todo.priority} onChange={onChangeValue}>
                        <FormControlLabel value="low" control={<Radio />} label="Low" />
                        <FormControlLabel value="medium" control={<Radio />} label="Medium" />
                        <FormControlLabel value="high" control={<Radio />} label="High" />
                    </RadioGroup>
                </FormControl>
                <FormControl component="div">
                    <Button
                        variant="contained"
                        type="submit"
                        color="primary">
                        Create Todo
                    </Button>
                </FormControl>
            </form>
        </div>
    )
}
export default Create