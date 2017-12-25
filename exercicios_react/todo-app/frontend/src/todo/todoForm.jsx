import React, {Component} from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeDescritption, search, add, clear } from './todoActions'

class TodoForm extends Component {
    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    componentWillMount () {
        this.props.search();
    }

    keyHandler(e) {
        const { add, search, description, clear } = this.props

        if (e.key === 'Enter') {
            e.shiftKey ? search( ) : add( description )
        } else if (e.key === 'Escape') {
            clear()
        }
    }

    render () {
        const { add, search, description } = this.props // usando o destructuring do ecmascript 2016

        return (
            <div role='form' className='todoForm'>
                <Grid cols="12 9 10">
                <input id='description' className='form-control'
                        placeholder='Adicione uma tarefa' 
                        onChange={this.props.changeDescritption}
                        value={this.props.description}
                        onKeyUp={this.keyHandler}/>
                </Grid>
        
                <Grid cols="12 3 2">
                    <IconButton style='primary' icon='plus'
                        onClick={ () => add(description) } ></IconButton>
        
                    <IconButton style='info' icon='search'
                        onClick={ search /*como nao recebe mais parametro nao precisa ser chamado por uma funcao*/} ></IconButton>
        
        
                    <IconButton style='default' icon='close'
                        onClick={this.props.clear} ></IconButton>
                </Grid>
            </div>
        )
    }

}


const mapStateToProps = state => ({description: state.todo.description})

const mapDispatchToProps = dispatch => bindActionCreators({changeDescritption, search, add, clear}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)