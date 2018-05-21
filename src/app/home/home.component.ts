import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  public datas =
  [
    {
      "id": 1,
      "judul": "KontraS Minta Evaluasi Penanganan Teroris Terbuka",
      "description": "Jakarta - Komisi untuk Orang Hilang dan Korban Tindak Kekerasan (KontraS) meminta pemerintah mengevaluasi pemberantasan terorisme dan menyampaikan ke publik secara menyeluruh. Ada beberapa evaluasi kasus terorisme yang menurut KontraS harus disampaikan secara detail ke publik",
      "date": "Sabtu 19 Mei 2018, 15:07 WIB",
      "image": '../assets/image/berita1.jpeg'
    },
    {
      "id": 2,
      "judul": "Mewahnya Deretan Istana yang Dihuni Keluarga Kerajaan Inggris",
      "description": "Buckingham Palace merupakan kediaman resmi untuk anggota kerajaan Inggris. Terdapat 775 kamar yang terdiri dari 19 kamar utama, 52 kamar kerajaan dan tamu, 188 kamar tidur staf, 92 kantor dan 78 kamar mandi. Royal.uk/Istimewa.",
      "date": "Sabtu 19 Mei 2018, 15:07 WIB",
      "image": '../assets/image/berita2.jpeg'
    }
  ]

public news = [
  {
    "id": 1,
    "judul": "Cantiknya Dekorasi Bunga di Kastil Windsor Lokasi #RoyalWedding",
    "description": "Jakarta - Pernikahan Pangeran Harry dan Meghan Markle bakal digelar secara besar-besaran. Mengutip CNNMoney, Sabtu (19/5/2018), pernikahan keluarga yang tengah jadi sorotan dunia itu diperkirakan menghabiskan biaya yang sangat tinggi bahkan bisa mencapai £ 1 juta (US$ 1,4 juta).",
    "image": '../assets/image/berita4.jpeg'

  },
  {
    "id": 2,
    "judul": "Siapa yang Biayai Pernikahan Mewah Harry-Meghan Markle?",
    "description": "Jakarta - Pernikahan Pangeran Harry dan Meghan Markle bakal digelar secara besar-besaran. Mengutip CNNMoney, Sabtu (19/5/2018), pernikahan keluarga yang tengah jadi sorotan dunia itu diperkirakan menghabiskan biaya yang sangat tinggi bahkan bisa mencapai £ 1 juta (US$ 1,4 juta).",
    "image": '../assets/image/berita4.jpeg'

  }
]

public form =
  [
    {
      "judul": "Royal Wedding",
      "description": "menjadi pasangan suami istri. Pernikahan mereka disebut Royal Wedding ini akan diselenggarakan di Windsor Castle. Venue pernikahan mereka ini sudah dipadati oleh orang-orang yang ingin menyaksikan pernikahan bersejarah ini. Orang-orang yang ingin ,menyaksikan pernikahan Pangeran Harry - Meghan Markle ini biasa disebut dengan well-wishers. Di malam sebelum pernikahannya Pangeran Harry menemui orang-orang yang sudah menunggunya. Sang pangeran ini mengucapkan terima kasih atas ucapan-ucapan"
    }
  ]

ngOnInit() {
  this.datas;
  this.news;
  this.form;
  console.log(this.form)
}

}
