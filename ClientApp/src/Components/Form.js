import { useState, useEffect } from "react";

const Form = ({ data, addEmployee, editEmployee }) => {


    const [values, setValues] = useState(""); //form datas
    const [updateFormButton, setUpdateFormButton] = useState(false); //bool val,true if update selected and false for insert button

    useEffect(() => {
        const p = {
            name: data.name,
            value: data.value,
        };
        setValues(p);
        //checking if its update or insert call
        setUpdateFormButton(p.name !== "");

    }, [data]);


    //tracking changes in the employee form
    const handleInput = (e) => {
        var { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    };


    //insert new employee button clicked to add one
    const handleSubmit = () => {
        addEmployee(values);

    };

    //updating the existing one with name as primary key
    const handleUpdate = () => {
        editEmployee(values);
    }

    const clearField = () => {
        const p = {
            name: "",
            value: "",
        };
        setValues(p);
        setUpdateFormButton(false);
    }


    return (
        <div className="col-md-4 col-sm-12 container p-5 bg-light border rounded-3">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">
                        Name
                    </label>
                    {updateFormButton ? <input
                        type="text"
                        className="form-control"
                        id="dis_name"
                        aria-describedby="emailHelp"
                        value={values.name}
                        name="name"
                        disabled
                    /> :
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            value={values.name}
                            name="name"
                            onChange={handleInput}

                        />}
                </div>

                <div
                    className="mb-3">
                    <label className="form-label">Value</label>
                    <input
                        id="value"
                        type="number"
                        className="form-control"
                        value={values.value}
                        onChange={handleInput}
                        name="value"
                    />
                </div>


                <div className="text-center mb-3">
                    {updateFormButton ?
                        <button onClick={() => handleUpdate()} className="btn btn-success">
                            Update
                        </button> : <button onClick={() => handleSubmit()} className="btn btn-success">
                            Create
                        </button>
                    }
                </div>

                <div className="text-center">
                    <button className="btn btn-danger" onClick={() => clearField()}>
                        Clear
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Form;
