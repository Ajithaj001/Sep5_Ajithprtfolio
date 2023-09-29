import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimecaptureService {

  private readonly popupKey = 'popup_last_closed';

  shouldDisplayPopup(): boolean {
    const lastClosedTimestamp = localStorage.getItem(this.popupKey);

    if (!lastClosedTimestamp) {
      return true; // Display the popup if it was never closed before
    }

    const currentTime = new Date().getTime();
    const oneHour = 60 * 60 * 1000; // 1 hour in milliseconds
    const timeDifference = currentTime - Number(lastClosedTimestamp);

    return timeDifference >= oneHour;
  }

  setPopupClosed(): void {
    localStorage.setItem(this.popupKey, String(new Date().getTime()));
  }
}
