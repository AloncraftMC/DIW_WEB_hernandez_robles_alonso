const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    aterrizaje: "./src/scripts/aterrizajeScript.js",
    editor: "./src/scripts/editorScript.js",
    userConfig: "./src/scripts/userConfigScript.js",
    userFunctions: "./src/scripts/userFunctions.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js", // Genera archivos con el nombre de cada entrada
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/, // Regla para procesar archivos CSS
        use: [
          MiniCssExtractPlugin.loader, // Extrae el CSS a un archivo separado
          "css-loader", // Para que Webpack entienda CSS
        ],
      },
    ],
  },
  plugins: [
    // Plugins para inyectar HTML con referencias a los JS generados
    new HtmlWebpackPlugin({
      template: "./index.html", // Especifica tu archivo HTML de origen
      filename: "index.html", // Nombre del archivo HTML generado
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/contacto.html", // Especifica tu archivo HTML de origen
      filename: "contacto.html", // Nombre del archivo HTML generado
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/editor.html", // Especifica tu archivo HTML de origen
      filename: "editor.html", // Nombre del archivo HTML generado
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/tutoriales.html", // Especifica tu archivo HTML de origen
      filename: "tutoriales.html", // Nombre del archivo HTML generado
    }),

    // Plugin para extraer el CSS
    new MiniCssExtractPlugin({
      filename: "[name].css", // Genera archivos CSS con el nombre de cada entrada
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 9000,
  },
};
