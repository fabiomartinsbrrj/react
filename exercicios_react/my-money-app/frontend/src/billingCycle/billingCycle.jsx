import React, {Component} from 'react'

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import ContentHeader from '../common/template/contentHear'
import Content from '../common/template/content'
import Tabs from '../common/tab/tabs'
import TabsHeader from '../common/tab/tabsHeader'
import TabsContent from '../common/tab/tabsContent'
import TabHeader from '../common/tab/tabHeader'
import TabContent from '../common/tab/tabContent'


import { create, update, remove, init } from './billingCycleAction'

import List from './billingCycleList'
import Form from './billingCycleForm' 


class BillingCycle extends Component {

    componentWillMount () {
        this.props.init();
    }

    render() {

        return (
            <div>
                <ContentHeader title='Ciclos de Pagamentos' small='Cadastro' ></ContentHeader>
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label='Listar' icon='bars' target='tabList'></TabHeader>
                            <TabHeader label='Incluir' icon='plus' target='tabCreate'></TabHeader>
                            <TabHeader label='Alterar' icon='pencil' target='tabUpdate'></TabHeader>
                            <TabHeader label='Excluir' icon='trash-o' target='tabDelete'></TabHeader>
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id='tabList' >
                                <List></List>
                            </TabContent>
                            <TabContent id='tabCreate' >
                                <Form onSubmit={this.props.create}
                                    submitLabel='Incluir' submitClass='primary'
                                />
                            </TabContent>
                            <TabContent id='tabUpdate' >
                                <Form onSubmit={this.props.update}  submitLabel='Alterar' submitClass='info' ></Form>   
                            </TabContent>
                            <TabContent id='tabDelete' >
                                <Form onSubmit={this.props.remove} submitLabel='Exlcuir' submitClass='danger' readOnly={true}></Form>
                            </TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }

}

const mapDispacthToProps = dispatch => bindActionCreators({
        create, update, remove, init
    }, dispatch)

export default connect(null,  mapDispacthToProps)(BillingCycle)