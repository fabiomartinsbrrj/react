import React, {Component} from 'react'
import { reduxForm, Field    } from 'redux-form'

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import labelAndInput from '../common/form/labelAndInput'

class BillingCycleForm extends Component {

    componentWillMount () {
    }

    render() {
        const { handleSubmit } = this.props //decorei com redux-form consigo pegar essa propriedade

        return (

            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='name' component={labelAndInput} /* readOnly={readOnly} */
                        label='Nome' cols='12 4' placeholder='Informe o nome' />
                    <Field name='month' component={labelAndInput} type='number' /* readOnly={readOnly} */
                        label='Mês' cols='12 4' placeholder='Informe o mês' />
                    <Field name='year' component={labelAndInput} type='number' /* readOnly={readOnly} */
                        label='Ano' cols='12 4' placeholder='Informe o ano' />
                </div>
                <div className='box-footer'>
                    <button type='submit' className='btn btn-primary'>Submit</button>
                </div>
            </form>

        )
    }
 
}
 

export default   reduxForm({form: 'billingCycleForm'})(BillingCycleForm)