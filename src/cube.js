const CUBE_FACE_INDICES = [
  [0, 1, 2, 3], //前面
  [4, 5, 6, 7], //后面
  [0, 3, 5, 4], //左面
  [1, 7, 6, 2], //右面
  [3, 2, 6, 5], //上面
  [0, 4, 7, 1], // 下面
];

/**
 *
 * @param {number} width
 * @param {number} height
 * @param {number} depth
 */
export function createCube(width, height, depth) {
  const x = width / 2;
  const y = height / 2;
  const z = depth / 2;

  const cornerPositions = [
    [-x, -y, -z],
    [x, -y, -z],
    [x, y, -z],
    [-x, y, -z],
    [-x, -y, z],
    [-x, y, z],
    [x, y, z],
    [x, -y, z],
  ];
  const colorInput = [
    [255, 0, 0, 1],
    [0, 255, 0, 1],
    [0, 0, 255, 1],
    [255, 255, 0, 1],
    [0, 255, 255, 1],
    [255, 0, 255, 1],
  ];

  const colors = [];
  const positions = [];
  const indices = [];

  for (let f = 0; f < 6; f++) {
    let faceIndices = CUBE_FACE_INDICES[f];
    let color = colorInput[f];
    for (let v = 0; v < 4; ++v) {
      let position = cornerPositions[faceIndices[v]];
      positions.push(...position);
      colors.push(...color);
    }
    let offset = 4 * f;
    indices.push(offset + 0, offset + 1, offset + 2);
    indices.push(offset + 0, offset + 2, offset + 3);
  }

  return {
    positions: new Float32Array(positions),
    indices: new Uint16Array(indices),
    colors: new Float32Array(colors),
  };
}
