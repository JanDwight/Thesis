import React from 'react'
import { PDFDocument } from 'pdf-lib'

export default function PreRegisatrationPDF() {
    const url = 'psytal\vite\src\assets\FINAL_PRE-REG_FORM-_NEW_FIRST_YEAR-FILLABLE_1.pdf';
    createPdf();
    async function createPdf() {
      const pdfDoc = await PDFLib.PDFDocument.create();
      const page = pdfDoc.addPage([350, 400]);
      page.moveTo(110, 200);
      page.drawText('Hello World!');
      const pdfDataUri = await pdfDoc.saveAsBase64({ dataUri: true });
      document.getElementById('pdf').src = pdfDataUri;
    }

  return (
    <div>{createPdf}</div>
  )
}
