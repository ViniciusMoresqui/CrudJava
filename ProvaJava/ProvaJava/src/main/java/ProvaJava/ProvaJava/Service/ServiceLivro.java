package ProvaJava.ProvaJava.Service;


import ProvaJava.ProvaJava.Entity.Livro;
import ProvaJava.ProvaJava.Repository.RepositoryLivro;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ServiceLivro {

    @Autowired
    private RepositoryLivro repositoryLivro;

    public List<Livro> listarTodos(){
         return repositoryLivro.findAll();
    }

    public Livro salvar (Livro livro){
        return repositoryLivro.save(livro);
    }

    public void deletar(Long id) {
        repositoryLivro.deleteById(id);
    }

    public Livro atualizar(Long id, Livro livroAtualizado) {
        return repositoryLivro.findById(id).map(livro -> {
            livro.setTitulo(livroAtualizado.getTitulo());
            return repositoryLivro.save(livro);
        }).orElseThrow(() -> new RuntimeException("Livro não encontrado com id: " + id));
    }

}
