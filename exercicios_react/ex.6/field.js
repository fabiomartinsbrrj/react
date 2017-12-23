import React, {Component} from 'react'
import   { connect } from 'react-redux'
import   { bindActionCreators } from 'redux'
import { changevalue } from './fieldActions' 

class Field extends Component {
    render() {
        return (
            <div>
                <label>{this.props.value}</label><br/>
                <input   onChange={this.props.changevalue} 
                    value={this.props.value} />
            </div>
        )
    }
}


function mapStateToProps (state) {
    return {
        value : state.field.value
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ changevalue}, dispatch) //vai ficar disponivel na props
}

export default connect(mapStateToProps, mapDispatchToProps)(Field) 
//design pattern decorator