import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {DatasourceService} from "./datasource.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  dataSource: any = new MatTableDataSource<any>();
  dataSourceBdReal: any = new MatTableDataSource<any>();

  displayedColumns: string[] = ['nome', 'idade', 'sexo', 'endereco'];
  displayedColumnsBdReal: string[] = ['id', 'nome', 'email', 'siglaUf', 'siglaPartido'];

  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort!: MatSort;

  @ViewChild(MatPaginator, {static: true}) paginatorDb!: MatPaginator;
  @ViewChild(MatSort, {static: true}) sortDb!: MatSort;

  deputados: any [] = []


  public show: boolean = false;


  constructor(private service: DatasourceService) {
  }

  ngOnInit() {

    //Tinha criado esse primeiro data estatico para testar vou mante-lo apenas para informações futuras.

    // const data: any[] = [
    //   {nome: 'Alice', idade: 28, sexo: 'Feminino', endereco: 'Rua das flores'},
    //   {nome: 'Carol', idade: 22, sexo: 'Feminino', endereco: 'Rua da Praia'},
    //   {nome: 'Frank', idade: 40, sexo: 'Masculino', endereco: 'Rua da Montanha'},
    //   {nome: 'Grace', idade: 33, sexo: 'Feminino', endereco: 'Avenida dos Lagos'},
    //   {nome: 'Henry', idade: 28, sexo: 'Masculino', endereco: 'Rua das Colinas'},
    //   {nome: 'David', idade: 30, sexo: 'Masculino', endereco: 'Avenida Central'},
    //   {nome: 'Eva', idade: 25, sexo: 'Feminino', endereco: 'Travessa das Árvores'},
    //   {nome: 'Ivy', idade: 29, sexo: 'Feminino', endereco: 'Avenida dos Jardins'},
    //   {nome: 'Jack', idade: 32, sexo: 'Masculino', endereco: 'Rua da Praça'},
    //   {nome: 'Bob', idade: 35, sexo: 'Masculino', endereco: 'Avenida Principal'},
    // ];

    // this.dataSource = new MatTableDataSource(data);
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;


    this.fetchDeputados();
  }


  fetchDeputados() {
    this.service.getDeputados().subscribe(
      (res) => {
        if (res.dados) {
          this.deputados = res.dados;
          //aqui basicamente é simples, somente trazer a instancia do datasource criado e instanciar o
          //data source do material passando os dados. [simples]
          this.dataSourceBdReal = new MatTableDataSource(this.deputados);
          //aqui vc seta informações de paginação que o proprio matTable possui passando os parados definidos acima.
          this.dataSourceBdReal.paginator = this.paginatorDb;
          this.dataSourceBdReal.sort = this.sortDb;
          console.log("dados", res)
        }
      },
      (error) => {
        console.error('Erro ao buscar deputados:', error);
      }
    );
  }


}
