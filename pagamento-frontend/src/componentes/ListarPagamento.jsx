import React, {useEffect, useState} from 'react';
import { listarPagamentos, excluirPagamento } from '../services/pagamentoService';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEye, faTrash, faEdit} from '@fortawesome/free-solid-svg-icons';

export default function ListaPagamentos() {
    const [pagamentos, setPagamento] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        carregarPagamentos();
    }, []);

    const carregarPagamentos = assync () => {
        const resposta = await listarPagamentos();
        setPagamentos(resposta.data);
    };

    const confirmarExclusao = async (id) => {
        if (window.confirm("Você deseja excluir?")) {
            await excluirPagamento(id);
            carregarPagamentos;
        }
    };

    return (
        <div>
            <h2>Meio de Pagamentos</h2>
            <table>
            <tr>
                <th>Nome</th>
                <th>Valor Máximo</th>
                <th>Tipo</th>
                <th>Ações</th>
            </tr>
            <tbody>
                {pagamentos.map(p => (
                    <tr key={p.id}>
                        <td>{p.nome}</td>
                        <td>{p.valorMaximo}</td>
                        <td>{p.tipo}</td>
                        <td>
                            <button onClick={() => navigate(`/visualizar/${p.id}`)}><FontAwesomeIcon icon={faEye}/></button>
                            <button onClick={() => confirmarExclusao(p.id)}><FontAwesomeIcon icon={faTrash}/></button>
                            <button onClick={() => navigate(`/editar/${p.id}`)}><FontAwesomeIcon icon={faEdit}/></button>
                        </td>
                    </tr>
                ))}
            </tbody>
            </table>
            <button onClick={() => navigate('/incluir')}>Incluir</button>
        </div>
    )
}