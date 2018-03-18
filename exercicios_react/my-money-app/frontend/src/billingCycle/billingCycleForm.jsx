import React, {Component} from 'react'
import { reduxForm, Field , formValueSelector   } from 'redux-form'

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import LabelAndInput from '../common/form/labelAndInput'

import {init} from './billingCycleAction'

import ItemList from './itemList';

class BillingCycleForm extends Component {

    componentWillMount () {
    }

    render() {
        const { handleSubmit, readOnly , credits, debts } = this.props //decorei com redux-form consigo pegar essa propriedade
          
        return (

            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='name' component={LabelAndInput} readOnly={readOnly} 
                        label='Nome' cols='12 4' placeholder='Informe o nome' />
                    <Field name='month' component={LabelAndInput} type='number' readOnly={readOnly} 
                        label='Mês' cols='12 4' placeholder='Informe o mês' />
                    <Field name='year' component={LabelAndInput} type='number'  readOnly={readOnly} 
                        label='Ano' cols='12 4' placeholder='Informe o ano' />
                        
                    <ItemList cols='12 6' readOnly={ readOnly } 
                        list={credits} field='credits' legend="Créditos"  />

                    <ItemList cols='12 6' readOnly={ readOnly } 
                        list={debts} field='debts' legend="Débitos" showStatus={true}/>

                </div>
                <div className='box-footer'>
                    <button type='submit' className={ `btn btn-${this.props.submitClass}` }> 
                        {this.props.submitLabel}
                    </button>
                    <button type='button' className='btn btn-default' 
                        onClick={this.props.init}
                        >Cancelar</button>
                </div>
            </form>

        )
    }
 
}
 
BillingCycleForm =  reduxForm({form: 'billingCycleForm', destroyOnUnmount:false })(BillingCycleForm) //decoro com redux-form
const selector = formValueSelector('billingCycleForm')// oegar a informacao do form
const mapStateToProps = state => ({ 
    credits : selector(state, 'credits'),
    debts : selector( state, 'debts')
}) //fazendo um bind
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch) //decoro novamente com os metodos novos
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm)