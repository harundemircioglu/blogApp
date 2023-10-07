import { Component } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
@Component({
  selector: 'app-new-blog',
  templateUrl: './new-blog.component.html',
  styleUrls: ['./new-blog.component.scss']
})
export class NewBlogComponent {
  uploader: FileUploader = new FileUploader({ url: 'YOUR_UPLOAD_API_URL' });

  uploadFiles() {
    this.uploader.uploadAll();
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log('Yükleme tamamlandı:', item, status, response);
      // Dosya yükleme işlemi tamamlandığında yapılması gereken işlemler burada gerçekleştirilebilir.
    };
  }
}
