type Step = {
  input: string;
  expected: string;
};

const playerVariants = [
  ["main", "player_ias.vflset/en_US/base.js"],
  ["tcc", "player_ias_tcc.vflset/en_US/base.js"],
  ["tce", "player_ias_tce.vflset/en_US/base.js"],
  ["es6", "player_es6.vflset/en_US/base.js"],
  ["es6_tcc", "player_es6_tcc.vflset/en_US/base.js"],
  ["es6_tce", "player_es6_tce.vflset/en_US/base.js"],
  ["tv", "tv-player-ias.vflset/tv-player-ias.js"],
  ["tv_tcc", "tv-player-ias-tcc.vflset/tv-player-ias-tcc.js"],
  ["tv_tce", "tv-player-ias-tce.vflset/tv-player-ias-tce.js"],
  ["tv_es6", "tv-player-es6.vflset/tv-player-es6.js"],
  ["tv_es6_tcc", "tv-player-es6-tcc.vflset/tv-player-es6-tcc.js"],
  ["tv_es6_tce", "tv-player-es6-tce.vflset/tv-player-es6-tce.js"],
  ["phone", "player-plasma-ias-phone-en_US.vflset/base.js"],
  ["phone_tcc", "player-plasma-ias-phone-tcc-en_US.vflset/base.js"],
  ["phone_tce", "player-plasma-ias-phone-tce-en_US.vflset/base.js"],
  ["plasma_es6", "player-plasma-es6-en_US.vflset/base.js"],
  ["plasma_es6_tcc", "player-plasma-es6-tcc-en_US.vflset/base.js"],
  ["plasma_es6_tce", "player-plasma-es6-tce-en_US.vflset/base.js"],
  ["embed", "player_embed.vflset/en_US/base.js"],
  ["embed_tcc", "player_embed_tcc.vflset/en_US/base.js"],
  ["embed_tce", "player_embed_tce.vflset/en_US/base.js"],
  ["embed_es6", "player_embed_es6.vflset/en_US/base.js"],
  ["embed_es6_tcc", "player_embed_es6_tcc.vflset/en_US/base.js"],
  ["embed_es6_tce", "player_embed_es6_tce.vflset/en_US/base.js"],
  ["house", "house_brand_player.vflset/en_US/base.js"],
  ["house_es6", "house_brand_player_es6.vflset/en_US/base.js"],
  ["tcl", "player_ias_tcl.vflset/en_US/base.js"],
  ["es6_tcl", "player_es6_tcl.vflset/en_US/base.js"],
  ["tv_tcl", "tv-player-ias-tcl.vflset/tv-player-ias-tcl.js"],
  ["tv_es6_tcl", "tv-player-es6-tcl.vflset/tv-player-es6-tcl.js"],
  ["phone_tcl", "player-plasma-ias-phone-tcl-en_US.vflset/base.js"],
  ["plasma_es6_tcl", "player-plasma-es6-tcl-en_US.vflset/base.js"],
  ["embed_tcl", "player_embed_tcl.vflset/en_US/base.js"],
  ["embed_es6_tcl", "player_embed_es6_tcl.vflset/en_US/base.js"],
] as const;

export type Variant = (typeof playerVariants)[number][0] & {};

export const players = new Map(playerVariants);

const all = withExcept<Variant>(playerVariants.map((x) => x[0]));
const regular = withExcept(all.filter((v) => !v.endsWith("tcl")));
const tcl = withExcept(all.filter((v) => v.endsWith("tcl")));

export const tests: {
  player: string;
  variants?: Variant[];
  n?: Step[];
  sig?: Step[];
}[] = [
  {
    // 20770
    player: "f9c6b6bd",
    variants: regular,
    n: [{ input: "rYKKd90cGmViBQaX", expected: "FGCrdHZnN1fPu" }],
    sig: [
      {
        input:
          "000102030405060708090A0B0C0D0E0F101112131415161718191A1B1C1D1E1F202122232425262728292A2B2C2D2E2F303132333435363738393A3B3C3D3E3F404142434445464748494A4B4C4D4E4F505152535455565758595A5B5C5D5E5F606162636465666768696A",
        expected:
          "180405060708090A0B0C0D0E0F101112131415161741191A1B1C1D1E1F202122232425262728292A2B2C2D2E2F303132333435363738393A3B3C3D3E3F400342434445464748494A4B4C4D4E4F505152535455565758595A5B5C5D5E5F60616263646566676869",
      },
    ],
  },
];

type ExceptArray<T> = T[] & {
  except(...exclusions: T[]): ExceptArray<T>;
};

function withExcept<T>(v: T[]): ExceptArray<T> {
  const proto = Object.create(Array.prototype);
  proto.except = function <T>(this: ExceptArray<T>, ...exclusions: T[]): T[] {
    return this.filter((v) => !exclusions.includes(v));
  };
  return Object.setPrototypeOf(v, proto);
}

