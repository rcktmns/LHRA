import localFont from 'next/font/local'

export const papyrus = localFont({
  src: '../public/fonts/papyrus.ttf',
  variable: '--font-papyrus',
  display: 'swap',
})

export const florentia = localFont({
  src: [
    { path: '../public/fonts/Florentia-Regular-trial.ttf', weight: '400', style: 'normal' },
    { path: '../public/fonts/Florentia-Bold-trial.ttf', weight: '700', style: 'normal' },
    { path: '../public/fonts/Florentia-Bold-Italic-trial.ttf', weight: '700', style: 'italic' },
    // Add more variants if needed
  ],
  variable: '--font-florentia',
  display: 'swap',
}) 