//Dashboard sem Redux
import React, {Component} from 'react'

import ContentHeader from '../common/template/contentHear'
import Content from '../common/template/content'
import ValueBox from '../common/widget/valueBox'
import Row from '../common/layout/row'

import axios from 'axios'

const BASE_URL = 'http://localhost:3003/api'

export default class Dashboard2 extends Component {

    constructor(props) {//obrigatorio
        super(props)
        this.state = {credit:0, debt:0}
    }

    componentWillMount () {
        axios.get(`${BASE_URL}/billingCycles/summary`)
            .then( resp=> this.setState(resp.data))
    }

    render() {

        const { credit, debt } = this.state

        return (
            <div>
                <ContentHeader title='Dashboard2' small='Versão 2.0' ></ContentHeader>
                <Content>
                    <Row>
                        <ValueBox cols='12 4' color='green' icon='bank'
                            value={`R$ ${credit}`} text='Total de Créditos'></ValueBox>

                        <ValueBox cols='12 4' color='red' icon='credit-card'
                        value={`R$ ${debt}`} text='Total de Créditos'></ValueBox>

                        <ValueBox cols='12 4' color='blue' icon='money'
                            value={`R$ ${credit - debt}`} text='Total de Créditos'></ValueBox>
                    </Row>
                </Content>
            </div>
        )
    }
}
