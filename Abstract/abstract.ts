abstract class TakePhoto {
  cameraMode: string;
  filter: string;
  constructor(cameraMode: string, filter: string) {
    this.cameraMode = cameraMode;
    this.filter = filter;
  }

  abstract getSepia(): void;
  getReelTime(): number {
    return 8;
  }
}
class InstaGram extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public video: string
  ) {
    super("zoom", "inverse");
  }
  getSepia(): void {
    console.log("got sepia");
  }
}

const sr = new InstaGram("normal", "sepia", "short");
