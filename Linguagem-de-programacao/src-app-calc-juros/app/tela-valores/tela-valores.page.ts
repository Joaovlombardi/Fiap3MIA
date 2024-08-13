import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tela-valores',
  templateUrl: './tela-valores.page.html',
  styleUrls: ['./tela-valores.page.scss'],
})
export class TelaValoresPage implements OnInit {

  constructor(private activatedRoute : ActivatedRoute) { }

  prestacao: any;

  ngOnInit() {
    this.prestacao = this.activatedRoute.snapshot.paramMap.get('prestacao')
  }

}
