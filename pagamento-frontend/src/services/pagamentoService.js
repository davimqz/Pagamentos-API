import axios from 'axios';

const API_URL = 'http:/localhost:8080/pagamentos';

export const listarPagamentos = () => axios.get(API_URL);
export const obterPagamento = (id) => axios.get(`${API_URL}/${id}`);
export const incluirPagamento = (dados) => axios.post(API_URL, dados);
export const alterarPagamento = (id, dados) => axios.put(`${API_URL}/${id}`, dados);
export const excluirPagamento = (id) => axios.delete(`${API_URL}/${id}`);