package br.edu.cesarschool.pagamento_api.model;

public class MeioPagamento {
    private Long id;
    private String nome;
    private Double valorMaximo;
    private String tipo;
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getNome() {
        return nome;
    }
    public void setNome(String nome) {
        this.nome = nome;
    }
    public Double getValorMaximo() {
        return valorMaximo;
    }
    public void setValorMaximo(Double valorMaximo) {
        this.valorMaximo = valorMaximo;
    }
    public String getTipo() {
        return tipo;
    }
    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    
}