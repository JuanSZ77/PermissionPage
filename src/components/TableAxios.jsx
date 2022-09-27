import axios from "axios"
import DataTable from 'react-data-table-component';
import { useState, useEffect } from "react"
import {Link} from "react-router-dom";


export const TableAxios = () => {

    const [permissions, setPermissions] = useState([])

    const URL = 'https://localhost:7229/Permission'

    const getPermission = async () => {
        await axios.get(URL).then((response) => {
            const data = response.data

            setPermissions(data)
        })
    }
    useEffect( () =>{
        getPermission()
    }, [])

    const columns = [
        {
            name: "ID PERMISSION",
            selector: row => row.idPermission,  
        },
        {
            name: "NAME",
            selector: row => row.personName,  
        },
        {
            name: "LAST NAME",
            selector: row => row.lastName,    
        },
        {
            name: "TYPE",
            selector: row => row.permissionType.descriptionPermission,    
        },
         {
            name: "DATE",
            selector: (row) => {return formatDate(row.datePermission)},
        },
        {
            name: "EDIT PERMISSION",
            selector: row =>  <Link className="buttonEdit" to="/add" onClick={() => editPermission(row.idPermission)}><b>EDIT</b></Link>,

        }
]

/*const [editidPermission, seteditidPermissions] = useState(0)

const activatePermissionMod = async (idPermission) => {
    seteditidPermissions(idPermission)
    console.log(editidPermission)
}

const editPermission = async (x) => {
    await axios.put(URL)
}*/

const formatDate = (x) =>{
    var today  = new Date(x);
    let newDate =  today.toLocaleString("en-US")
    return newDate;
}

const customStyles = {
    rows: {
        style: {
            minHeight: '72px',
            backgroundColor:'#adcbe3 ',
            color:"#FAFAFA",

        },
    },
  
    headCells: {
        style: {
            backgroundColor:'#2a4d69 ',
            color:"#FAFAFA",
            fontSize: '15px',
            justifyContent:'center',
            fontFamily: 'Varela Round, sans-serif'
            
        },
    },
    cells: {
        style: {
            backgroundColor:'#4b86b4 ',
            color:"#FAFAFA",
            justifyContent:'center',
            fontFamily: 'Varela Round, sans-serif'
        },
    },
};

return(
    <>
    <h1 className="h1 mt-3 mb-3">TABLE PERMISSIONS</h1>
    <Link className="link btn-primary p-2" to="/add"><b>NEW PERMISSION</b></Link>
        <DataTable
    columns={columns}
    data={permissions}
    customStyles={customStyles}
    />
    </>
)
}

