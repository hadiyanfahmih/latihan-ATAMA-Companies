module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      container:{
        center:true,
        padding:'3.5rem'
      },
      fontFamily:{
        poppins:'Poppins, sans-serif',
        lora:'Lora, serif',
      },
      colors:{
        'soft-blue':'#E5EFFF',
        'main-blue':'#2D9CDB',
        'soft-gray':'#9099A3',
        'main-green':'#00CF53',
        'main-head':'#272D4E'
      },
      keyframes: {
        zoomscale: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        }
      },
      animation: {
        zoomscale: 'zoomscale 2s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
