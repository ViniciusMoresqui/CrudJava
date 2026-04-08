package ProvaJava.ProvaJava.Controller;

import ProvaJava.ProvaJava.Entity.Livro;
import ProvaJava.ProvaJava.Service.ServiceLivro;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/livros")
@CrossOrigin(origins = "http://localhost:4200")
public class ControllerLivro {

    @Autowired
    private ServiceLivro serviceLivro;

    @GetMapping
    public List<Livro> listar() {
        return serviceLivro.listarTodos();
    }

    @PostMapping
    public Livro salvar(@RequestBody Livro livro){
        return serviceLivro.salvar(livro);
    }

    @PutMapping("/{id}")
    public Livro atualizar(@PathVariable Long id, @RequestBody Livro livro) {
        return serviceLivro.atualizar(id, livro);
    }

    @DeleteMapping("/{id}")
    public void deletar(@PathVariable Long id) {
        serviceLivro.deletar(id);
    }

}
