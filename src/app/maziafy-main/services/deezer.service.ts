import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DeezerService {

  baseUri = environment.deezerUrl

constructor(
  private http: HttpClient
) { }

getUserDetails() {
  return this.http.get<any>(`${this.baseUri}/3640780742`).pipe(
    tap()
  )
}

getUserPlaylist() {
  return this.http.get<any>(`${this.baseUri}/me`).pipe(
    tap()
  )
}

}
