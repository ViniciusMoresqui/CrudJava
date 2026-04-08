import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class livroService {
  private readonly API = 'http://localhost:8080/livros';

  constructor(private http: HttpClient) {}

  listar(): Observable<any[]> {
    return this.http.get<any[]>(this.API);
  }

  salvar(livro: any): Observable<any> {
    return this.http.post<any>(this.API, livro);
  }

  excluir(id: number): Observable<any> {
    return this.http.delete<any>(`${this.API}/${id}`);
  }

  atualizar(id: number, livro: any): Observable<any> {
    return this.http.put<any>(`${this.API}/${id}`, livro);
  }
}