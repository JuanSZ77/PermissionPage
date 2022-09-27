import axios from "axios";
import React, { Fragment, useState, useEffect } from "react";
import { TableAxios } from "./TableAxios";
import {
    useNavigate
  } from "react-router-dom";

const Formulario = () => {
  const [permisionTypes, setPermissionTypes] = useState([]);
  const URL = "https://localhost:7229/Permission";
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [rol, setRol] = useState(0);
  let history = useNavigate();
  useEffect(() => {
    axios.get(URL+"/types/list").then((response) => {
      const data = response.data;

      setPermissionTypes(data);
    });
  }, []);

  const send = () => {
    //validacion y post aqui
    const body= {
        idPermission: 0,
        personName: name,
        lastName: lastname,
        permissionType: {
          idPermissionType: rol,
          descriptionPermission: ""
        },
        datePermission:null
      }

    axios.post(URL,body).then((response) => {
        history("/")
      });
    console.log("Enviando",{name, lastname, rol})
  };


  return (
    <Fragment>
      <div className="principal">
        <h2 className="text-center h2 mt-3 mb-3">ADD PERMISSION</h2>

        <div className="container form">
          <fieldset>
            <div class="mb-5">
              <label for="disabledTextInput" class="form-label styleid">
                NAME
              </label>
              <input
                type="text"
                id="disabledTextInput"
                class="form-control formPlace"
                placeholder="Enter yor name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
              />
            </div>
            <div class="mb-5">
              <label for="disabledTextInput" class="form-label styleid">
                LAST NAME
              </label>
              <input
                type="text"
                id="disabledTextInput"
                class="form-control formPlace"
                placeholder="Enter yor last name"
                onChange={(e) => setLastname(e.target.value)}
                value={lastname}
                required
              />
            </div>
            <div class="mb-3">
              <label for="disabledSelect" class="form-label styleid">
                PERMISSION TYPE
              </label>
              <select
                id="disabledSelect"
                class="form-select formPlace"
                onChange={(e) => setRol(parseInt(e.target.value))}
                required
              >
                {permisionTypes.map((x) => {
                  return (
                    <option value={x.idPermissionType}>
                      {x.descriptionPermission}
                    </option>
                  );
                })}
              </select>
            </div>
            <button type="submit" class="btn text-light send" onClick={send}>
              SEND DATA
            </button>
          </fieldset>
        </div>
      </div>
    </Fragment>
  );
};

export default Formulario;
