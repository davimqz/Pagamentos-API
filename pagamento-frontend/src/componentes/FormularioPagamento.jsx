import React, { useEffect, useState } from 'react';
import { incluirPagamento, obterPagamento, alterarPagamento } from '../services/pagamentoService';
import { useNavigate, useParams } from 'react-router-dom';

export default function FormularioPagamento({ modo }) {
  const [dados, setDados] = useState({ nome: '', valorMaximo: '', tipo: 'FÍSICO' });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (modo === 'editar') {
      obterPagamento(id).then(res => setDados(res.data));
    }
  }, [modo, id]);

  const handleChange = (e) => {
    setDados({ ...dados, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (modo === 'editar') {
      alterarPagamento(id, dados).then(() => navigate('/'));
    } else {
      incluirPagamento(dados).then(() => navigate('/'));
    }
  };

  const limpar = () => {
    setDados({ nome: '', valorMaximo: '', tipo: 'FÍSICO' });
  };

  return (
    <div>
      <h2>{modo === 'editar' ? 'Editar' : 'Incluir'} Pagamento</h2>
      <label>Nome: <input name="nome" value={dados.nome} onChange={handleChange} /></label><br />
      <label>Valor Máximo: <input name="valorMaximo" type="number" value={dados.valorMaximo} onChange={handleChange} /></label><br />
      <label>Tipo:
        <select name="tipo" value={dados.tipo} onChange={handleChange}>
          <option value="FÍSICO">Físico</option>
          <option value="ELETRÔNICO">Eletrônico</option>
        </select>
      </label><br />
      <button onClick={limpar}>Limpar</button>
      <button onClick={handleSubmit}>{modo === 'editar' ? 'Alterar' : 'Incluir'}</button>
      <button onClick={() => navigate(-1)}>Voltar</button>
    </div>
  );
}
