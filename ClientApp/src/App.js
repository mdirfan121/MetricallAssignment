
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useEffect, useState } from 'react';

import Form from "./Components/Form";
import Table from './Components/Tables';

function App() {


  //apis call start ----------------------------------------------------------------------------------------
  async function getEmployees() {
    return fetch("/employees").then(response => response.json());
  }

  async function createEmployee(name, value) {
    return fetch("/employees", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: name, value: value })
    });
  }

  async function updateEmployee(name, value) {
    return fetch("/employees", {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: name, value: value })
    });
  }

  //apis call end -------------------------------------------------------------------------------------------



  //form data for update/insert employee
  const [formData, setFormData] = useState({
    name: "",
    value: "",
  });

  //list of employees
  const [dataSet, setDataSet] = useState()

  //getting the employees for the first time when page loads
  useEffect(() => {
    //get data fun call
    (async () => {
      let employeesData = await getEmployees();
      setDataSet(employeesData)
    })()
  }, [])



  //when edit row button clicked in the table, it will fill the form data to the same for edit
  const onChangeOrEdit = (val) => {
    setFormData({ ...val });
  };


  //submit button clickedin the form
  const addEmployee = async (inputs) => {
    //calling add employee api
    await createEmployee(inputs);

    //getting the updated data back
    let employeesData = await getEmployees();
    setDataSet(employeesData)
    setFormData({ name: "", value: "" })
  }


  const editEmployee = async (inputs) => {
    //updating the data in the db
    await updateEmployee(inputs);

    //getting the updated data back
    let employeesData = await getEmployees();
    setDataSet(employeesData)
    setFormData({ name: "", value: "" })
  }

  return (
    <div className="App">
      <div className="container p-5 bg-light border rounded-3">
        <div className="row">
          <Form data={formData} addEmployee={addEmployee} editEmployee={editEmployee}></Form>
          <Table handleEdit={onChangeOrEdit} dataSet={dataSet}></Table>
        </div>
      </div>
    </div>
  );
}

export default App;
