import React , { Component } from 'react'

import Grid from '../common/layout/grid'
import {Field} from 'redux-form'
import Input from '../common/form/input'


class CreditList extends Component   {

    renderRows() {
        return (

            <tr>
                <td><Field name='credits[0].name' component={ Input } readOnly={ this.props.readOnly}
                    placeholder="Inform o nome"/></td>
                <td><Field name='credits[0].value' component={ Input } readOnly={ this.props.readOnly}
                    placeholder="Inform o valor"/></td>
                <td></td>
            </tr>

        )
    }

    render () {
        return (
            <Grid cols={this.props.cols}>
                <fieldset>
                    <legend>Créditos</legend>

                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Valor</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            { this.renderRows() }
                        </tbody>
                    </table>

                </fieldset>
            </Grid>
        )
    }
}

export default CreditList