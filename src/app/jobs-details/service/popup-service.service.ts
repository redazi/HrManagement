import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopupService {
  private isPopupVisible: boolean = false;

  showPopup() {
    this.isPopupVisible = true;
  }

  hidePopup() {
    this.isPopupVisible = false;
  }

  isPopupVisibleStatus() {
    return this.isPopupVisible;
  }
}
