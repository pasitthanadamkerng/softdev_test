import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { doraemonPage } from '../doraemon/doraemon';
import { pokemonPage } from '../pokemon/pokemon';
import { digimonPage } from '../digimon/digimon';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-Cartoon',
  templateUrl: 'Cartoon.html',
})
export class CartoonPage {
  a:any;
  text:any;

  constructor(public tts: TextToSpeech,public camera:Camera , public navCtrl: NavController, public navParams: NavParams) {
  }
  next(){
    this.navCtrl.push(doraemonPage)
  }
  next_pokemon(){
    this.navCtrl.push(pokemonPage)
  }
  next_digimon(){
    this.navCtrl.push(digimonPage)
  }
  textS(){
    this.tts.speak(this.text)
  .then(() => console.log('Success'))
  .catch((reason: any) => console.log(reason));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartoonPage');
  }

  connCamera(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     this.a = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
    });
  }

}