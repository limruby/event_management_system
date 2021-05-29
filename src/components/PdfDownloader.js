import React from 'react';
import html2pdf from "html2pdf.js";

const PdfDownloader = ({rootElementId , downloadFileName}) => {
    function addScript(url) {
        var script = document.createElement('script');
        script.type = 'application/javascript';
        script.src = url;
        document.head.appendChild(script);
    }
    addScript('https://raw.githack.com/eKoopmans/html2pdf/master/dist/html2pdf.bundle.js');
    const submitHandler = (e) => {
        window.scrollTo(0, 0);
        var element = document.getElementById(rootElementId);
        var opt = {
          margin:       1,
          filename:    downloadFileName,
          image:        { type: 'png', quality: 1.00 },
          html2canvas:  { scale: 1 },
          jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
        };
   
  
   // New Promise-based usage:
   //html2pdf().set(opt).from(element).save();
   
   // Old monolithic-style usage:
   html2pdf(element, opt);
}
    return <button className="btn btn-primary" onClick={submitHandler}>Download PDF</button>

}

export default PdfDownloader;