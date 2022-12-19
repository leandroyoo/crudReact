import React from "react";
import Header from "../../Components/Header/Header";
import { useForm } from 'react-hook-form';
import './AddConteudo.css';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import axios from 'axios';


const validacaoForms = yup.object().shape({
    title: yup.string().required("O título é obrigatório!").max(40, "O título precisa ter menos de 40 caracteres!"),

    

    
    
    preço: yup.string().required("O preço é obrigatório!").min(4, "O preço precisa ter menos de 5 caracteres!")
})


function Post(){

    const { register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(validacaoForms)
    })

    const addPost = data => axios.post("https://json-server-inky-nine.vercel.app/tribal", data)
    .then(() => {
        console.log("Deu certo!")
        alert('Deu certo')
    })
    .catch(() => {
        console.log("Deu errado!")
   
    })

    return(
        <div>
            <Header />

            <main>
                <div className="card-post">
                    <h1>Criar postagem</h1>
                    <div className="line-post"></div>

                    <div className="card-body-post">

                        <form onSubmit={handleSubmit(addPost)}>
                            <div className="fields">
                                <label>Título</label>
                                <input type="text" name="title" {...register("title")} />
                                <p className="error-message">{errors.title?.message}</p>

                                <label>Link da Imagem</label>
                                <input type="text" name="imagem" {...register("imagem")} />
                                <p className="error-message">{errors.imagem?.message}</p>

                                <label>Descrição da Imagem</label>
                                <textarea type="text" name="descrição" {...register("descrição")}></textarea>
                                <p className="error-message">{errors.descrição?.message}</p>

                                
                                <label>Preço</label>
                                <input type="text" name="preço" {...register("preço")}/>
                                <p className="error-message">{errors.preço?.message}</p>

                                <div className="btn-post">
                                    <button type="submit">Enviar</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>


            </main>

            
        </div>
    )
}
export default Post