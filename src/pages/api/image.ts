// pages/api/image.js
import sharp from 'sharp';
import type { NextApiRequest, NextApiResponse } from 'next';
// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   const { texto } = req.query; // Recibe el texto desde el cliente

//   try {
//     // Cargar la imagen base (asumiendo que está almacenada localmente en public/images)
//     const baseImage = sharp('public/images/dragon-1.jpeg');

//     // Generar una imagen SVG con el texto
//     const svgText = `
//       <svg width="800" height="600">
//         <style>
//           .title { fill: #fff; font-size: 24px; font-family: Arial, sans-serif; }
//         </style>
//         <text x="10" y="50" class="title">${texto}</text>
//       </svg>
//     `;

//     // Agregar el texto SVG al buffer de imagen
//     const imageWithText = await baseImage
//       .composite([{
//         input: Buffer.from(svgText),
//         top: 0,
//         left: 0
//       }])
//       .jpeg() // Asegúrate de convertirlo a jpeg si quieres mantener ese formato
//       .toBuffer();

//     // Establecer el tipo de contenido como imagen jpeg
//     res.setHeader('Content-Type', 'image/jpeg');

//     // Enviar la imagen como respuesta
//     res.send(imageWithText);
//   } catch (error) {
//     res.status(500).json({ message: 'Error al generar la imagen.' });
//   }
// }
// src/api/image.js 

// src/pages/api/image.ts


export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'Hello from image API!' });
}
