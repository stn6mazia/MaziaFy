import { Component } from '@angular/core';
import { DeezerService } from './maziafy-main/services/deezer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'maziafy';

  constructor(
    private getUserPlaylist: DeezerService
  ) {
    getUserPlaylist.getUserPlaylist().subscribe(
      res => {
        console.log(res)
      }
    )
  }


}
