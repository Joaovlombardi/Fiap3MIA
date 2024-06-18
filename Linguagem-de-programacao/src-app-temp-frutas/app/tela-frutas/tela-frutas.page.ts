import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tela-frutas',
  templateUrl: './tela-frutas.page.html',
  styleUrls: ['./tela-frutas.page.scss'],
})
export class TelaFrutasPage implements OnInit {

  res:any;
  fruta:any;

  constructor(private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.res = this.activatedRoute.snapshot.paramMap.get("media");
    this.fruta = this.activatedRoute.snapshot.paramMap.get("plantio");
  }

}
