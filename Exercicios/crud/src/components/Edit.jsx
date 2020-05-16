import React, { Component } from 'react';
import axios from 'axios';

export default class Edit extends Component{

    constructor(props){
        super(props);

        this.state = {nome:""};
        this.state = {curso: ""};
        this.state = {ira: ""};

        this.setNome = this.setNome.bind(this);
        this.setCurso = this.setCurso.bind(this);
        this.setIra = this.setIra.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount(){
        //console.log("id recebido: " + this.props.match.params.id);
        
        axios.get("http://localhost:3001/estudantes/" + this.props.match.params.id)
        .then(
            (res) => {
                this.setState(
                    {
                        nome: res.data.nome,
                        curso: res.data.curso,
                        ira: res.data.ira
                    }
                )
            }
        )
        .catch(
            (error) => {
                console.log(error);
            }
        )
    }

    setNome(e){
        this.setState({nome: e.target.value});
    }

    setCurso(e){
        this.setState({curso: e.target.value});
    }

    setIra(e){
        this.setState({ira: e.target.value});
    }
 
    onSubmit(e){
        e.preventDefault();
    
        const estudanteEditado = {nome: this.state.nome, 
                                    curso: this.state.curso, 
                                    ira: this.state.ira};

        axios.put("http://localhost:3001/estudantes/" + this.props.match.params.id, estudanteEditado)
        .then(
            (res) =>{
                this.props.history.push('/list');
            }
        )
        .catch(
            (error) =>{
                console.log(error);
            }
        )
    }

    render(){
        return(
            <div style={{marginTop:10}}>
                <h3>Editar Estudante</h3>

                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Nome:</label>
                        <input type="text" className="form-control" 
                            value={this.state.nome} onChange={this.setNome}/>
                    </div>

                    <div className="form-group">
                        <label>Curso:</label>
                        <input type="text" className="form-control"
                            value={this.state.curso} onChange={this.setCurso}/>
                    </div>

                    <div className="form-group">
                        <label>IRA:</label>
                        <input type="text" className="form-control"
                            value={this.state.ira} onChange={this.setIra}/>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Salvar alterações" className="btn btn-primary"/>
                    </div>
                    
                </form>
            </div>
        );
    }
}