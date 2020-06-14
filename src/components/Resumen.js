import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import {primeraMayus} from '../helper';

const ContenedorResumen = styled.div`
padding: 1rem;
text-align: center;
background-color: #00838F;
color: #FFF;
margin-top: 1rem;
`;


const Resumen = ({ datos }) => {

    /* Extraer datos */
    const { marca, year, plan } = datos;

    if (marca === '' || year === '' || plan === '') return null;

    return (
        <ContenedorResumen>
            <h2>Resumen de cotizacion</h2>

            <ul>
                <li>Marca: {primeraMayus(marca)} </li>
                <li>Plan: {primeraMayus(plan)}</li>
                <li>Año: {year} </li>
            </ul>
        </ContenedorResumen>

    );
}

Resumen.propTypes = {
    datos: PropTypes.object.isRequired
}


export default Resumen;