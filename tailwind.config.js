/**
 * Configuração do Tailwind CSS do FinControl.
 * As cores abaixo são a identidade visual definida nas telas da Fase 2 (Figma).
 */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        primaria: {
          DEFAULT: "#1F4E79", // azul FinControl: marca, botões e links
          escura: "#173B5C", // hover dos botões
          clara: "#E8EEF5", // fundo do item ativo e destaques
        },
        fundo: "#F5F7FA", // fundo das páginas
        borda: "#E0E4EA", // bordas de cartões, campos e tabelas
        texto: "#1A1A1A", // texto principal
        suave: "#6B7280", // rótulos e textos secundários
        sucesso: "#2E7D32", // valores positivos
        perigo: "#C62828", // ações destrutivas (excluir)
      },
      fontFamily: {
        sans: ["Inter", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
      },
      borderRadius: {
        cartao: "12px",
      },
      boxShadow: {
        cartao: "0 1px 2px rgba(16, 24, 40, 0.06)",
      },
    },
  },
  plugins: [],
};
