import React from 'react'
import { PDFDocument } from 'pdf-lib'

export default function PreRegisatrationPDF() {
    // PDF modification code======================================================================
    const formUrl = 'https://drive.google.com/file/d/10Z6nEV29uzPkm7Frw1N6JwPuBTIwW6lF/view?usp=drive_link';
    const formPdfBytes = fetch(formUrl).then(res => res.arrayBuffer())
    
    const pdfDoc = PDFDocument.load(formUrl);

    const form = pdfDoc.getForm();

    const text_student_name = form.getTextField('text_student_name');
    text_student_name.setText('Mario');

    pdfDoc.save();
  
}
