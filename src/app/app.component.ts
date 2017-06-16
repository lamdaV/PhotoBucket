import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

interface PhotoCaption {
  imageUrl: string;
  caption: string;
  $key?: string;
};

const PHOTO_CAPTION_PATH = '/photoCaption';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  formPhotoCaption: PhotoCaption = {
    imageUrl: '',
    caption: ''
  };

  bucketStream: FirebaseListObservable<PhotoCaption[]>
  constructor(db: AngularFireDatabase) {
    this.bucketStream = db.list(PHOTO_CAPTION_PATH);
  }

  onSubmit() {
    try {
        console.log(this.formPhotoCaption);
      if (this.formPhotoCaption.$key) {
        const key = this.formPhotoCaption.$key;
        const data = Object.assign({}, {imageUrl: this.formPhotoCaption.imageUrl, caption: this.formPhotoCaption.caption});
        this.bucketStream.update(key, data);
      } else {
        this.bucketStream.push(this.formPhotoCaption);
      }

      this.formPhotoCaption = {
        imageUrl: '',
        caption: ''
      };
    } catch (error) {
      console.log('[ ERROR ]', error.message);
    }
  }

  edit(photoCaption: PhotoCaption) {
    this.formPhotoCaption = Object.assign({}, photoCaption, {$key: photoCaption.$key});
  }

  delete(photoCaption: PhotoCaption) {
    const key = photoCaption.$key;
    this.bucketStream.remove(key);
  }
}
