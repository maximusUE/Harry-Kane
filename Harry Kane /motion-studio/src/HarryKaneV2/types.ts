export interface V2HeadlineCard {
  imageSrc: string;
  label?: string;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
}

export interface V2Shot {
  from: number;
  durationInFrames: number;
  mediaType: "video" | "image";
  mediaSrc: string;
  subhead?: string;
  headline?: string;
  accentColor?: string;
  headlineCard?: V2HeadlineCard;
  zoomFrom?: number;
  zoomTo?: number;
  panX?: [number, number];
  videoLoopFrames?: number;
}

export interface V2SfxCue {
  from: number;
  src: string;
  volume?: number;
  durationInFrames?: number;
}

export interface V2BlockConfig {
  bloque: 1 | 2 | 3 | 4 | 5 | 6;
  durationInFrames: number;
  audioSrc: string;
  dossierName: string;
  telemetryTag: string;
  musicVolume?: number;
  shots: V2Shot[];
  sfx: V2SfxCue[];
}

