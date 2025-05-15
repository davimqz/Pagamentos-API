import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { obterPagamento } from '../services/pagamentoService';

export default function VisualizarPagamento() {
  const [pagamento, setPagamento] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    obterPagamento(id).then(res => setPagamento(res.data));
  }, [id]);

  return (
    <div>
      <h2>Visualizar Pagamento</h2>
      <p><strong>Nome:</strong> {pagamento.nome}</p>
      <p><strong>Valor Máximo:</strong> {pagamento.valorMaximo}</p>
      <p><strong>Tipo:</strong> {pagamento.tipo}</p>
      <button onClick={() => navigate(-1)}>Voltar</button>
    </div>
  );
}
