interface TakePhoto {
  camera: string;
  filter: boolean;
  burst: number;
}

interface ShortVideo {
  playVdeo(): void;
}

class Social implements TakePhoto {
  constructor(
    public camera: string,
    public filter: boolean,
    public burst: number
  ) {}
}

class Youtube implements TakePhoto, ShortVideo {
  constructor(
    public camera: string,
    public filter: boolean,
    public burst: number
  ) {}
  playVdeo(): void {}
}
