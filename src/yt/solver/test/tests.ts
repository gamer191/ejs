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
  {
    // 20772
    player: "907ce1cd",
    variants: regular,
    n: [{ input: "rYKKd90cGmViBQaX", expected: "9KH_qoCyDcUT2aK" }],
    sig: [
      {
        input:
          "000102030405060708090A0B0C0D0E0F101112131415161718191A1B1C1D1E1F202122232425262728292A2B2C2D2E2F303132333435363738393A3B3C3D3E3F404142434445464748494A4B4C4D4E4F505152535455565758595A5B5C5D5E5F606162636465666768696A",
        expected:
          "4F696867666564636261605F5E5D5C5B5A595857565554535251506A4E4D4C4B4A49484746454443423C402B3E3D3F3B3A393837363534333231302F2E2D2C172A292827262524232221201F1E1D1C1B1A191800161514131211100F0E0D0C0B0A09080706050403020141",
      },
    ],
  },
  {
    // 20773
    player: "53caf627",
    variants: regular,
    n: [{ input: "rYKKd90cGmViBQaX", expected: "mW_Q-CZfTbyuZ" }],
    sig: [
      {
        input:
          "000102030405060708090A0B0C0D0E0F101112131415161718191A1B1C1D1E1F202122232425262728292A2B2C2D2E2F303132333435363738393A3B3C3D3E3F404142434445464748494A4B4C4D4E4F505152535455565758595A5B5C5D5E5F606162636465666768696A",
        expected:
          "0405060708090A0B0C0D0E0F101112131415161718191A1B1C1D1E1F002122232425262728292A2B2C2D2E2F303132333435363738393A3B3C3D3E3F404142434445464748494A4B4C4D4E4F505152535455566A58595A5B5C5D5E5F6061626364656667686957",
      },
    ],
  },
  {
    // 20774
    player: "6b3d0364",
    variants: regular,
    n: [{ input: "rYKKd90cGmViBQaX", expected: "4bdGvS77-SAZ" }],
    sig: [
      {
        input:
          "000102030405060708090A0B0C0D0E0F101112131415161718191A1B1C1D1E1F202122232425262728292A2B2C2D2E2F303132333435363738393A3B3C3D3E3F404142434445464748494A4B4C4D4E4F505152535455565758595A5B5C5D5E5F606162636465666768696A",
        expected:
          "6A696867666564636261605F5E5D5C5B5A595857565554535251504F4E4D4C4B4A494847464544434241403F013D3C3B3A003837363534333231302F2E2D2C2B3E292827262524232221201F1E1D1C1B1A191839161514131211100F0E0D0C0B0A09080706050403022A",
      },
    ],
  },
  {
    // 20775
    player: "5ba500a8",
    variants: regular,
    n: [{ input: "rYKKd90cGmViBQaX", expected: "f-UPS3JuT" }],
    sig: [
      {
        input:
          "000102030405060708090A0B0C0D0E0F101112131415161718191A1B1C1D1E1F202122232425262728292A2B2C2D2E2F303132333435363738393A3B3C3D3E3F404142434445464748494A4B4C4D4E4F505152535455565758595A5B5C5D5E5F606162636465666768696A",
        expected:
          "0401060708090A0B0C0D0E0F101112131415161718191A1B1C1D1E1F202122232425262728292A2B2C2D2E2F303132333435363738393A3B053D3E3F404142434445464748494A4B4C4D4E4F505152535455565758595A5B5C5D5E5F606162636465666768696A",
      },
    ],
  },
  {
    // 20776
    player: "3dc75896",
    variants: regular,
    n: [{ input: "rYKKd90cGmViBQaX", expected: "v_oVscQWHRIALGie" }],
    sig: [
      {
        input:
          "000102030405060708090A0B0C0D0E0F101112131415161718191A1B1C1D1E1F202122232425262728292A2B2C2D2E2F303132333435363738393A3B3C3D3E3F404142434445464748494A4B4C4D4E4F505152535455565758595A5B5C5D5E5F606162636465666768696A",
        expected:
          "666564636268605F5E5D5C5B5A595857565554535251504F4E4D4C4B4A494847464544434241403F3E3D3C3B3A393837003534333231302F2E2D2C2B2A6A2827262524232221201F1E1D1C1B1A191817161514131211100F0E0D0C0B0A09080706050403020136",
      },
    ],
  },
  {
    // 20777
    player: "28c28ac0",
    variants: regular,
    n: [{ input: "rYKKd90cGmViBQaX", expected: "Lh0g5nDTae8J_d6" }],
    sig: [
      {
        input:
          "000102030405060708090A0B0C0D0E0F101112131415161718191A1B1C1D1E1F202122232425262728292A2B2C2D2E2F303132333435363738393A3B3C3D3E3F404142434445464748494A4B4C4D4E4F505152535455565758595A5B5C5D5E5F606162636465666768696A",
        expected:
          "6867666564636261605F5E5D5C5B5A595857565554535251504F4E4D4C4B4A494847464544434241403F3E3D3C3B3A393837360034333231302F2E2D2C2B2A292827262524232221201F1E1D1C1B1A191817161514131211100F0E0D0C0B0A09080706050403020135",
      },
    ],
  },
  {
    // 20779 (main, tce, tcc: a.addOnDisposeCallback is not a function)
    player: "b485e332",
    variants: regular,
    n: [{ input: "rYKKd90cGmViBQaX", expected: "3zbfWwYE4asG8" }],
    sig: [
      {
        input:
          "000102030405060708090A0B0C0D0E0F101112131415161718191A1B1C1D1E1F202122232425262728292A2B2C2D2E2F303132333435363738393A3B3C3D3E3F404142434445464748494A4B4C4D4E4F505152535455565758595A5B5C5D5E5F606162636465666768696A",
        expected:
          "01020304050607081D0A0B0C0D0E0F101112131415161718191A1B1C3A1E1F202122232425262700292A2B2C2D2E2F30313233343536373839283B3C3D3E3F404142434445464748494A4B4C4D4E4F505152535455565758595A5B5C5D5E5F606162636465666768696A",
      },
    ],
  },
  {
    // 20780 (main, tce, tcc: a.addOnDisposeCallback is not a function)
    player: "92eef845",
    variants: regular,
    n: [{ input: "rYKKd90cGmViBQaX", expected: "3tU2ya-IJqhNt" }],
    sig: [
      {
        input:
          "000102030405060708090A0B0C0D0E0F101112131415161718191A1B1C1D1E1F202122232425262728292A2B2C2D2E2F303132333435363738393A3B3C3D3E3F404142434445464748494A4B4C4D4E4F505152535455565758595A5B5C5D5E5F606162636465666768696A",
        expected:
          "5D6564636261605F5E445C5B5A595857565554535251504F4E4D4C4B4A494847464566434241403F3E3D3C3B3A393837363500333231302F692D2C2B2A292827262524232221201F1E1D1C1B1A191817161514131211100F0E0D0C0B0A09080706050403020134",
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

