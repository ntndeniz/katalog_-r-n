module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/images"); // Resimleri kopyala
    eleventyConfig.addPassthroughCopy("admin"); // CMS dosyalarını kopyala
  
    return {
      dir: {
        input: ".",
        output: "_site"
      }
    };
  };