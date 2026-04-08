package ProvaJava.ProvaJava.Repository;

import ProvaJava.ProvaJava.Entity.Livro;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RepositoryLivro extends JpaRepository<Livro, Long> {
}
