package br.edu.cesarschool.pagamento_api.controller;

import br.edu.cesarschool.pagamento_api.model.MeioPagamento;
import br.edu.cesarschool.pagamento_api.repository.MeioPagamentoRepository;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@RequestMapping("/pagamentos")
@CrossOrigin(origins = "*")

public class MeioPagamentoController {
    private final MeioPagamentoRepository repository;

    public MeioPagamentoController(MeioPagamentoRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<MeioPagamento> listar() {
        return repository.findAll();
    }

    @GetMapping("/{id}")
    public MeioPagamento buscar (@PathVariable Long id) {
        return repository.findById(id).orElseThrow();
    }

    @PostMapping
    public MeioPagamento adicionar (@RequestBody MeioPagamento m) {
        return repository.save(m);
    }

    @PostMapping("/{id}")
    public MeioPagamento atualizar (@PathVariable Long id, @RequestBody MeioPagamento m) {
        m.setId(id);
        return repository.save(m);
    }

    @DeleteMapping("/{id}")
    public void remover (@PathVariable Long id) {
        repository.deleteById(id);
    }



}
