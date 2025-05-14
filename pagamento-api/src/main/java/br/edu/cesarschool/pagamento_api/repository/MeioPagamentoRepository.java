package br.edu.cesarschool.pagamento_api.repository;

import br.edu.cesarschool.pagamento_api.model.MeioPagamento;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MeioPagamentoRepository extends JpaRepository<MeioPagamento, Long>{
    
}
