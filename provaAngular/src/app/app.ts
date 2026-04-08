import { Component, OnInit } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { livroService } from './LivroService'; 
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet],
  templateUrl: './app.html'
})
export class App implements OnInit {
  novoLivro: string = '';
  listaDeLivros: any[] = [];

  constructor(private service: livroService) {} 

  ngOnInit(): void {
    this.carregarLivros();
  }

  carregarLivros() {
    this.service.listar().subscribe((dados: any) => { 
      this.listaDeLivros = dados;
    });
  }

  adicionar() {
    if (this.novoLivro.trim()) {
      this.service.salvar({ nome: this.novoLivro }).subscribe(() => {
        this.novoLivro = '';
        this.carregarLivros(); 
      });
    }
  }

  remover(id: number) {
    this.service.excluir(id).subscribe(() => {
      this.carregarLivros(); 
    });
  }

editar(livro: any) {
  console.log('Dados do livro recebidos:', livro); 

  const novoNome = prompt("Digite o novo nome do livro:", livro.nome);

  if (novoNome && novoNome.trim() !== '') {
    const idLivro = livro.id; 
    if (idLivro === undefined) {
      alert("Erro: O ID do livro não foi encontrado!");
      return;
    }
    const livroEditado = { id: idLivro, nome: novoNome };
    this.service.atualizar(idLivro, livroEditado).subscribe(() => {
      this.carregarLivros();
    });
  }
}
}