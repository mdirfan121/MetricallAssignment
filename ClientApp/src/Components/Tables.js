import { useState, useEffect } from "react";
import { Button } from "bootstrap";

const Table = ({ dataSet, handleEdit }) => {


    const handleEditRow = (a) => {
        handleEdit(a);

    };


    return (
        <div
            className="
            col-md-7 col-sm-12
            offset-md-1
            my-0
            p-1
            bg-light
            border
            overflow-auto
            list
          "
        >
            <h4 className="text-center text-primary">Lists</h4>

            <table className="table">
                <thead className="bg-primary text-white">
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Value</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {dataSet &&
                        dataSet.map((eachItem) => (
                            <tr>
                                <td>{eachItem.name}</td>
                                <td>{eachItem.value}</td>
                                <td><button className="btn btn-primary" onClick={() => handleEditRow(eachItem)}>Edit</button></td>

                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
