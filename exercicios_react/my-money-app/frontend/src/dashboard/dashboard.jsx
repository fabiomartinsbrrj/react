//Componente de class
import React, {Component} from 'react'

import Content from '../common/template/content'
import ContentHeader from '../common/template/contentHear'

//no react vc nao consegue renderizar tags em paralelo -> componentes transversais
class Dashboard extends Component {
    render() {
        return (
            <div>
                <ContentHeader title='Dashboard' small='Versão 1.0' ></ContentHeader>
                <Content>
                    Dashboard
                </Content>
            </div>
        )
    }
}

export default Dashboard;