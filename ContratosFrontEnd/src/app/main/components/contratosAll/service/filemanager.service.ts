import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilemanagerService {
  baseUrl = 'http://localhost:8080/gestiones/'
  baseUrl2 = 'http://localhost:8080/files/'


  constructor(private http: HttpClient) {
  }


  uploadFile(contratoId: number, file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file);

    return this.http.post(`${this.baseUrl}${contratoId}/file/upload`, formData);
  }

  listFiles(contratoId: number): Observable<any> {
    return this.http.get(this.baseUrl + contratoId + '/files');
  }

  deleteFile( fileId: number): Observable<any> {
    return this.http.delete(this.baseUrl2 + fileId);

  }
  downloadFile(fileId: number): Observable<Blob> {
    return this.http.get(`${this.baseUrl2}download/${fileId}`, {
      responseType: 'blob'
    });
  }



}
