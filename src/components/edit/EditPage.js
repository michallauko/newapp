import React from 'react';

const EditPage = (props) => (
    <div>
        <p>Edit expense under ID: {props.match.params.id}</p>
    </div>
);

export default EditPage;