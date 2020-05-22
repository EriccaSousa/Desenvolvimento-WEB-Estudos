import React, { Component } from 'react'
import axios from 'axios'

import TableRow from './TableRow'

export default class List extends Component {

    constructor(props) {
        super(props)
        this.state = { estudantes: [] }
        this.apagarElementoPorId = this.apagarElementoPorId.bind(this)
    }

    componentDidMount() {
        axios.get('http://localhost:3002/estudantes/list') //express
            //axios.get('http://localhost:3001/estudantes') //json-server
            .then(
                (res) => {
                    //console.log(res.data)
                    this.setState({ estudantes: res.data })
                    //console.log(this.state.estudantes)
                }
            )
            .catch(
                (error) => {
                    console.log(error)
                }
            )
    }

    montarTabela() {
        if (!this.state.estudantes) return
        return this.state.estudantes.map(
            (est, i) => {
                return <TableRow estudante={est}
                    key={i}
                    apagarElementoPorId={this.apagarElementoPorId} />
            }
        )
    }

    apagarElementoPorId(id) {
        let tempEstudantes = this.state.estudantes
        for (let i = 0; i < tempEstudantes.length; i++) {
            if (tempEstudantes[i]._id === id) {
                tempEstudantes.splice(i, 1)
            }
        }
        this.setState({ estudantes: tempEstudantes })
    }

    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3>Listar Estudantes</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Curso</th>
                            <th>IRA</th>
                            <th colSpan="2"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.montarTabela()}
                    </tbody>

                </table>


            </div>
        )
    }
}