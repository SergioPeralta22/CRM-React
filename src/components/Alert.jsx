import React from "react";
import { ErrorMessage } from "formik";

const Alert = ({ name }) => {
    const nombre = name;
    return (
        <ErrorMessage
            name={nombre}
            component="div"
            className="text-center my-4 bg-red-600 text-white rounded-lg p-3 font-bold uppercase"
        />
    );
};

export default Alert;
