import { Button } from "@material-ui/core"
import { DataGrid } from "@material-ui/data-grid"
import { Link } from "react-router-dom"

const handleChange = (e) => {
    alert(e.target.value)
}

const columns = [
    { field: 'desc', headerName: 'Description', width: 300 },
    { field: 'responsible', headerName: 'Responsible', width: 200 },
    { field: 'priority', headerName: 'Priority', width: 150 },
    {
        field: 'Actions', headerName: 'Actions', width: 250,
        renderCell: (params) => (
            <Link to={"/edit/" + params._id}>Edit</Link>
        )
    },
]

export default ({ todos }) => {
    console.log(todos)
    return (
        <div style={{ height: 400, width: '80%' }}>
            <DataGrid
                rows={todos}
                columns={columns}
                getRowId={(row) => row._id}
                pageSize={5}
                disableSelectionOnClick
                checkboxSelection
            />
        </div>
    )
}