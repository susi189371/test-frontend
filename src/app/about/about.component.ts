import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  public form =
  [
    {
      "judul": "Royal Wedding",
      "description": "menjadi pasangan suami istri. Pernikahan mereka disebut Royal Wedding ini akan diselenggarakan di Windsor Castle. Venue pernikahan mereka ini sudah dipadati oleh orang-orang yang ingin menyaksikan pernikahan bersejarah ini. Orang-orang yang ingin ,menyaksikan pernikahan Pangeran Harry - Meghan Markle ini biasa disebut dengan well-wishers. Di malam sebelum pernikahannya Pangeran Harry menemui orang-orang yang sudah menunggunya. Sang pangeran ini mengucapkan terima kasih atas ucapan-ucapan"
    }
  ]

ngOnInit() {
  this.form;
  console.log(this.form)
}


}
