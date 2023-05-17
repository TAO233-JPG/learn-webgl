/**
 * 获取 webGL 上下文
 * @param {string} id
 * @returns {WebGL2RenderingContext}
 */
export function getWebGLContext(id) {
  const context = document.querySelector(id);

  return context.getContext("webgl");
}

/**
 * 返回一个对象，包含顶点着色器和片元着色器
 * @typedef {Object} ShaderProgram
 * @property {WebGLShader} vertexShader - 顶点着色器
 * @property {WebGLShader} fragmentShader - 片元着色器
 */

/**
 * 创建着色器对象
 * @param {WebGL2RenderingContext} gl
 * @param {string} vShaderSourse
 * @param {string} fShaderSourse
 * @returns {ShaderProgram}
 */
export function initShaders(gl, vShaderSourse, fShaderSourse) {
  // 创建顶点着色器
  const vertexShader = gl.createShader(gl.VERTEX_SHADER);
  // 将源码分配给顶点着色器
  gl.shaderSource(vertexShader, vShaderSourse);
  // 编译顶点着色器程序
  gl.compileShader(vertexShader);

  const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
  gl.shaderSource(fragmentShader, fShaderSourse);
  gl.compileShader(fragmentShader);

  return {
    vertexShader,
    fragmentShader,
  };
}
/**
 * 创建着色器程序
 * @param {WebGL2RenderingContext} gl
 * @param {ShaderProgram} param
 * @returns {WebGLProgram}
 */
export function initProgram(gl, { vertexShader, fragmentShader }) {
  // 创建着色器程序
  const program = gl.createProgram();
  // 挂载顶点着色器
  gl.attachShader(program, vertexShader);
  // 挂载片元着色器
  gl.attachShader(program, fragmentShader);
  // 连接着色器程序
  gl.linkProgram(program);

  return program;
}
/**
 *
 * @returns {number[]}
 */
export function getColor() {
  const r = Math.floor(Math.random() * 256) / 255;
  const g = Math.floor(Math.random() * 256) / 255;
  const b = Math.floor(Math.random() * 256) / 255;

  return [r, g, b, 1.0];
}
