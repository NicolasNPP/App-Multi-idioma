import React from 'react';
import { Table } from 'reactstrap';
import { useTranslation } from 'react-i18next'

const Resultados = (props) => {
    const [t, i18n] = useTranslation("global");

    return (
        <Table dark>
            <thead>
                <tr>
                    <th>#</th>
                    <th>{t('tabla.equipo')}</th>
                    <th>{t('tabla.liga')}</th>
                    <th>{t('tabla.puntos')}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Real Club Deportivo Español</td>
                    <td>España</td>
                    <td>25</td>


                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Fútbol Club Barcelona</td>
                    <td>España</td>
                    <td>25</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Real Club Deportivo Españo</td>
                    <td>España</td>
                    <td>24</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Paris Saint-Germain Football Club</td>
                    <td>Francia</td>
                    <td>23</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Olympique de Marsella</td>
                    <td>Francia</td>
                    <td>15</td>
                </tr>
            </tbody>
        </Table>
    );
}


export default Resultados;