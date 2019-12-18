export class ClientGhostTileComponentSelectors {
  getActiveTileHeader(nativeElement) {
    return nativeElement.querySelector('.tile-header-inactive');
  }

  getImage(nativeElement) {
    return nativeElement.querySelector('img');
  }

  getDataHeader(nativeElement) {
    return nativeElement.querySelector('.no-data-header');
  }

  getNoDataText(nativeElement) {
    return nativeElement.querySelector('.no-data-text');
  }
}
