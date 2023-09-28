import React from "react"
import UpdateList from "./UpdateList";
import DeleteList from "./DeleteList";
import "bootstrap/dist/css/bootstrap.min.css"


function Lists(props){
    let listrows =[];
    props.alldata.forEach(element => {
        listrows.push(
            <tr key={element.id}>
                <td>{element.id}</td>
                <td>{element.title}</td>
                <td>{element.author}</td>
                <td>
                    <UpdateList
                        elementId={element.id}
                        singledata={props.singledata}
                        getList={props.getList}
                        updateList={props.updateList}
                        handleChange={props.handleChange}
                    >
                    </UpdateList>
                </td>
                <td>
                    <DeleteList
                        elementId={element.id}
                        singledata={props.singledata}
                        getList={props.getList}
                        deleteList={props.deleteList}
                        handleChange={props.handleChange}
                    >
                    </DeleteList>
                </td>
            </tr>
        )
    })
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Author</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>{listrows}</tbody>
        </table>
    )
}
export default Lists;