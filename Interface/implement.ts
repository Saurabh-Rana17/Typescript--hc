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
  playVdeo(): string {
    return "playing video";
  }
}

const media = new Youtube("", true, 10);
console.log(media.playVdeo());

interface ObjType {
  name: string;
  rollno: number;
}

function test(obj: ObjType): void {
  console.log(obj);
}
